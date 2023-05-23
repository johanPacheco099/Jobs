import { Router, WebAppRouterPort, IndexWebAppViewPort, ErrorWebAppViewPort, JobDescViewWebAppPort } from './web-app-router.dependency'

export default class WebAppRouter implements WebAppRouterPort {
  router: Router

  constructor (
    private readonly indexWebAppView: IndexWebAppViewPort,
    private readonly jobDescViewWebApp: JobDescViewWebAppPort,
    private readonly errorWebAppView: ErrorWebAppViewPort,
  ) {
    this.router = Router()
    this.routes()
  }

  routes = (): void => {
    this.router.get('/', this.indexWebAppView.index.bind(this.indexWebAppView))
    this.router.get('/:page', this.indexWebAppView.index.bind(this.indexWebAppView))
    this.router.get('/job-description/:id', this.jobDescViewWebApp.index.bind(this.jobDescViewWebApp))
    this.router.get('/', this.errorWebAppView.error.bind(this.errorWebAppView))
  }
}
