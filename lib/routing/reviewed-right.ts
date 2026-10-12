import routes from './right-routes.json'
import ports from './right-ports.json'
import { replayReviewed } from './replay-reviewed'
export const reviewedRightAutorouter = replayReviewed(routes,ports)
