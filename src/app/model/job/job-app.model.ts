import { JobRepositoryJsonAdapterPort, JobAppModelPort, Job, LIMIT } from './job-app-model.dependency'

export default class JobAppModel implements JobAppModelPort {
  constructor (
    private readonly jobRepositoryJsonAdapter: JobRepositoryJsonAdapterPort<Job>) { }

    getById = (id:number) :Job | null => {
      return this.jobRepositoryJsonAdapter.getById(id.toString());
    };

  getAll = () => {
    return this.jobRepositoryJsonAdapter.getAll();
  }

  getJobs = (page: number): Job[] => {
    const start = LIMIT * (page - 1)
    const end = LIMIT * page
    return this.jobRepositoryJsonAdapter.getJobsByRange(start, end)
  }
}
