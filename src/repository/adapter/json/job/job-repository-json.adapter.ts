import {
  Job,
  JobRepositoryJsonAdapterPort,
  CategoryRepositoryJsonAdapter,
  CityJsonAdapter,
  jobsJson
} from './job-repository-json-adapter.dependency'

export default class JobRepositoryJsonAdapter implements JobRepositoryJsonAdapterPort<Job> {
  getById = (id: string): Job | null => {
    try {
      if (jobsJson !== undefined) {
        for (const jobEntity of jobsJson) {
          if (jobEntity.id === +id) {
            const city = new CityJsonAdapter().getById(jobEntity.location)
            if (city == null) {
              console.error('City not found')
              return null
            }
            const category = new CategoryRepositoryJsonAdapter().getById(String(jobEntity.category))
            if (category == null) {
              console.error('Category not found')
              return null
            }
            return {
              id: jobEntity.id,
              logo: jobEntity.logo,
              company: jobEntity.company,
              job: jobEntity.job,
              location: city,
              published: new Date(jobEntity.published),
              category
            }
          }
        }
      }
    } catch (error) {
      console.error(error)
    }
    return null
  }

  getAll = (): Job[] => {
    try {
      if (jobsJson !== undefined) {
        const jobs: Job[] = []
        for (const jobEntity of jobsJson) {
          if (jobEntity === null) {
            console.error('City not found')
            return []
          }
          const city = new CityJsonAdapter().getById(String(jobEntity.location))
          if (city == null) {
            console.error('City not found')
            return []
          }
          const category = new CategoryRepositoryJsonAdapter().getById(String(jobEntity.category))
          if (category == null) {
            console.error('Category not found')
            return []
          }
          jobs.push({
            id: jobEntity.id,
            logo: jobEntity.logo,
            company: jobEntity.company,
            job: jobEntity.job,
            location: city,
            published: new Date(jobEntity.published),
            category
          })
        }
        return jobs
      }
    } catch (error) {
      console.error(error)
    }
    return []
  }

  save = (job: Job): Job | null => {
    console.error(job.company + 'Not implemented')
    return null
  }

  update = (job: Job): Job | null => {
    console.error(job.company + 'Not implemented')
    return null
  }

  delete = (id: string): boolean => id === null

  getJobsByRange = (start: number, end: number): Job[] => {
    try {
      const jobs: Job[] = []
      if (end > jobsJson.length) end = jobsJson.length
      for (let index = start; index < end; index++) {
        const city = new CityJsonAdapter().getById(jobsJson[index].location)
        if (city == null) {
          console.error('City not found')
          return []
        }
        const category = new CategoryRepositoryJsonAdapter().getById(String(jobsJson[index].category))
        if (category == null) {
          console.error('Category not found')
          return []
        }
        jobs.push(
          {
            id: jobsJson[index].id,
            logo: jobsJson[index].logo,
            company: jobsJson[index].company,
            job: jobsJson[index].job,
            location: city,
            published: new Date(jobsJson[index].published),
            category
          }
        )
      }
      return jobs
    } catch (error) {
      return []
    }
  }
}
