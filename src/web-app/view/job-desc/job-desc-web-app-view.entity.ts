export interface CityJobDescViewEntity {
  id: string
  name: string
}

export interface JobViewEntity {
  id: string
  logo: string
  company: string
  job: string
  category: string
  city: CityJobDescViewEntity
  published: string
}


export interface JobDescViewEntity {
  job: JobViewEntity
}
