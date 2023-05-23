import { Request, Response, WebAppViewPort } from './error-web-app-view.dependency'

export default interface ErrorWebAppViewPort extends WebAppViewPort {
  error: (req: Request, res: Response) => void
}
