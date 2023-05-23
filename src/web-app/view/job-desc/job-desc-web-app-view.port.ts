import { Request, Response, WebAppViewPort } from './job-desc-web-app-view.dependency'

export default interface JobDescViewWebAppPort extends WebAppViewPort {
  index: (req: Request, res: Response) => void
}
