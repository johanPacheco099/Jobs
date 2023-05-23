import {
  Request,
  Response,
  City,
  Job,
  IndexViewWebAppPort,
  CityWebAppAdapterPort,
  JobWebAppAdapterPort,
  CityIndexViewEntity,
  IndexViewEntity,
  JobIndexViewEntity,
  DateUtil
} from './index-web-app-view.dependency'

export default class IndexWebAppView implements IndexViewWebAppPort {
  title = 'Jobs Web App'
  constructor (
    private readonly jobWebAppAdapter: JobWebAppAdapterPort,
    private readonly cityWebAppAdapter: CityWebAppAdapterPort
  ) { }

  index = (req: Request, res: Response): void => {
    let { page } = req.params
    let { location, keyword, city, fulltime } = req.query;
    if (page === null) page = '1'
    const r = /[^0-9]/
    if (r.test(page)) page = '1'
    const pag: number = Number(page)
    const {jobs, pages} = this.jobWebAppAdapter.getByFilters(pag, {
      location: (location && typeof location == 'string') ? location : undefined,
      keyword: (keyword && typeof keyword == 'string') ? keyword : undefined,
      city: (city && typeof city == 'string') ? city : undefined,
      fulltime: (fulltime && typeof fulltime == 'string' && fulltime==='yes') ? true : undefined
    });
    if (jobs.length === 0) {
      //return res.redirect('/1')
    }
    const cityList = this.cityWebAppAdapter.getDefaultCities()
    const model: IndexViewEntity = {
      jobs: jobs.map((job: Job): JobIndexViewEntity => {
        const daysAgo: number = DateUtil.getInstance().getDaysFromDate(job.published)
        const published: string = (daysAgo === 1) ? 'Less than a day ago' : `${daysAgo} days ago`
        return {
          id: String(job.id),
          logo: job.logo,
          company: job.company,
          job: job.job,
          category: job.category.description,
          city: job.location.name,
          published
        }
      }),
      cities: cityList.map((city: City): CityIndexViewEntity => {
        return {
          id: String(city.id),
          name: city.name
        }
      }),
      page: pag,
      pages
    }
    res.render('index', { data: model, title: this.title })
  }
}
