/** Rebase reviewed board-local copper into a translated panel board. */
export function replayReviewed(routes: any[], ports: {id:string,x:number,y:number}[]) {
  return async (input: any) => {
    const number = (id:string) => Number(id.match(/_(\d+)$/)![1])
    const points = input.connections.flatMap((c:any) => c.pointsToConnect).filter((p:any) => p.pcb_port_id)
    const portOffset = Math.min(...points.map((p:any) => number(p.pcb_port_id))) - Math.min(...ports.map(p => number(p.id)))
    const traceNumbers = input.connections.map((c:any) => c.name.match(/^source_trace_(\d+)$/)?.[1]).filter(Boolean).map(Number)
    const netNumbers = input.connections.map((c:any) => c.name.match(/^source_net_(\d+)$/)?.[1]).filter(Boolean).map(Number)
    const traceOffset = Math.min(...traceNumbers)
    const netOffset = Math.min(...netNumbers)
    if (!Number.isFinite(traceOffset) || !Number.isFinite(netOffset)) throw Error('Reviewed routing requires the complete board routing stage')
    const outline = input.outline
    const dx = (Math.min(...outline.map((p:any)=>p.x)) + Math.max(...outline.map((p:any)=>p.x))) / 2
    const dy = (Math.min(...outline.map((p:any)=>p.y)) + Math.max(...outline.map((p:any)=>p.y))) / 2
    const expected = new Map(ports.map(p=>[p.id,p]))
    for (const p of points) {
      const original = expected.get(`pcb_port_${number(p.pcb_port_id)-portOffset}`)
      if (!original || Math.hypot(p.x-dx-original.x,p.y-dy-original.y)>.001) throw Error(`Reviewed routing no longer matches ${p.pcb_port_id}; reroute after changing placement`)
    }
    const remap = (value:any):any => {
      if (typeof value==='string') return value.replace(/pcb_port_(\d+)/g,(_,n)=>`pcb_port_${Number(n)+portOffset}`).replace(/source_trace_(\d+)/g,(_,n)=>`source_trace_${Number(n)+traceOffset}`).replace(/source_net_(\d+)/g,(_,n)=>`source_net_${Number(n)+netOffset}`)
      if (Array.isArray(value)) return value.map(remap)
      if (value && typeof value==='object') return Object.fromEntries(Object.entries(value).map(([k,v])=>[k,remap(v)]))
      return value
    }
    const translated=routes.map(original=>{
      const trace=remap(original)
      // Core assigns the current board's subcircuit instead of the saved one.
      delete trace.subcircuit_id
      for(const p of trace.route){
        // Explicit saved sizes otherwise override the board minima in core.
        if(p.route_type === 'via'){
          const padMinimum = input.minViaPadDiameter ?? input.min_via_pad_diameter
          const holeMinimum = input.minViaHoleDiameter ?? input.min_via_hole_diameter
          if(padMinimum !== undefined) p.via_diameter = Math.max(p.via_diameter ?? p.outer_diameter ?? 0, padMinimum)
          if(holeMinimum !== undefined) p.via_hole_diameter = Math.max(p.via_hole_diameter ?? p.hole_diameter ?? 0, holeMinimum)
        }
        if(typeof p.x==='number'){p.x+=dx;p.y+=dy}
        for(const key of ['start','end']) if(p[key]){p[key].x+=dx;p[key].y+=dy}
      }
      return trace
    })
    const handlers:Record<string,Array<(e:any)=>void>>={}
    return {
      on(event:string,fn:(e:any)=>void){(handlers[event]??=[]).push(fn)},
      start(){queueMicrotask(()=>{for(const fn of handlers.complete??[])fn({traces:translated})})},
      stop(){},
    }
  }
}
