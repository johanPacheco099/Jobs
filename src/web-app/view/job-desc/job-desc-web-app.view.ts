import {
  Request,
  Response,
  IndexViewWebAppPort,
  JobWebAppAdapterPort,
  JobDescViewEntity,
  DateUtil
} from './job-desc-web-app-view.dependency'

export default class JobDescWebAppView implements IndexViewWebAppPort {
  title = 'Jobs Web App'
  constructor (
    private readonly jobWebAppAdapter: JobWebAppAdapterPort
  ) { }

  index = (req: Request, res: Response): void => {
    let { id } = req.params
    
    const job = this.jobWebAppAdapter.getJobById(parseInt(id));
    console.log(job);
    if(!job){
      return res.redirect('/');
    }

    const daysAgo: number = DateUtil.getInstance().getDaysFromDate(job.published)
    const published: string = (daysAgo === 1) ? 'Less than a day ago' : `${daysAgo} days ago`

    const model: JobDescViewEntity = {
      job: {
        ...job,
        id: job.id.toString(),
        category: job.category.description,
        published,
        city: {
          id: job.location.id.toString(),
          name: job.location.name
        }
      }
    }
    console.log(model);
    res.render('job-description', { data: model, title: this.title })
  }
}
