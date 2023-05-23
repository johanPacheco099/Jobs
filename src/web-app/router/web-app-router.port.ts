import { Router } from './web-app-router.dependency'

export default interface WebAppRouterPort {
  router: Router
  routes: () => void
}
