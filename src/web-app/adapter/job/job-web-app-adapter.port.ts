import { Job } from './job-web-app-adapter.dependency'

export default interface JobWebAppAdapterPort {
  getJobs: (page: number) => Job[]
  getJobsByKeyword: (keyword: string, page: number) => Job[]
  getJobsByCity: (name: string, page: number) => Job[]
  getJobsByZip: (code: string, page: number) => Job[]
  getJobsByCategory: (id: number, page: number) => Job[]
  getJobById: (id: number) => Job | null
  getByFilters: (page: number, filters:{keyword?: string, city?: string, location?: string, fulltime?: boolean}) =>{jobs: Job[], pages: number}
}
