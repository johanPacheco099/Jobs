import { Request, Response, ErrorWebAppViewPort } from './error-web-app-view.dependency'

export default class ErrorWebAppView implements ErrorWebAppViewPort {
  title = 'Jobs Web App'

  error = (_req: Request, res: Response): void => {
    res.status(404).send('404 Not Found')
  }
}
