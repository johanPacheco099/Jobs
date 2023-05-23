import { Request, Response, WebAppViewPort } from './index-web-app-view.dependency'

export default interface IndexViewWebAppPort extends WebAppViewPort {
  index: (req: Request, res: Response) => void
}
