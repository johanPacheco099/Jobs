import { Job } from './job-app-model.dependency'

export default interface JobAppModelPort {
  getById: (id: number) => Job|null
  getAll: () => Job[]
  getJobs: (page: number) => Job[]
}
