import { Job } from './job-app-controller.dependency'

export default interface JobAppControllerPort {
  getJobs: (page: number) => Job[]
  getById: (id: number) => Job|null
  getByFilters: (page: number, filters:{keyword?: string, city?: string, location?: string, fulltime?: boolean}) => {jobs: Job[], pages: number}
}
