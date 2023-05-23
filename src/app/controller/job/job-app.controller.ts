import { Job, JobAppControllerPort, JobAppModelPort, LIMIT } from './job-app-controller.dependency'

export default class JobAppController implements JobAppControllerPort {
  constructor (private readonly jobAppModel: JobAppModelPort) { }

  getById = (id: number):Job|null => {
    return this.jobAppModel.getById(id);
  };

  getByFilters = (page: number, filters: { keyword?: string; city?: string; location?: string; fulltime?: boolean}) => {
    const jobs = this.jobAppModel.getAll();
    const start = LIMIT * (page - 1)
    const end = LIMIT * page

    const jobFilters = jobs.map(job=>{
      if(filters.keyword && !job.job.toLocaleLowerCase().includes(filters.keyword.toLocaleLowerCase())){
        return null
      }
      if(filters.city && !job.location.name.toLocaleLowerCase().includes(filters.city.toLocaleLowerCase())){
        return null
      }
      if(filters.location && !job.location.name.toLocaleLowerCase().includes(filters.location.toLocaleLowerCase())){
        return null
      }
      if(filters.fulltime && job.category.id!=1){
        return null
      }
      return job;
    })

    return {
      jobs: (jobFilters as Job[]).filter(job=>job!=null).slice(start, end), 
      pages: Math.ceil(jobFilters.length/5)
    };
  }

  getJobs = (page: number): Job[] => {
    return this.jobAppModel.getJobs(page)
  }
}
