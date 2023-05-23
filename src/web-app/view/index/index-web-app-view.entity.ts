export interface JobIndexViewEntity {
  id: string
  logo: string
  company: string
  job: string
  category: string
  city: string
  published: string
}

export interface CityIndexViewEntity {
  id: string
  name: string
}

export interface IndexViewEntity {
  jobs: JobIndexViewEntity[]
  cities: CityIndexViewEntity[]
  page: number
  pages: number
}
