import routes from './left-routes.json'
import ports from './left-ports.json'
import { replayReviewed } from './replay-reviewed'
export const reviewedLeftAutorouter = replayReviewed(routes,ports)
