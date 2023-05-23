import Category from './category.domain'
import City from './city.domain.'

export default interface Job {
  id: number
  logo: string
  company: string
  job: string
  location: City
  published: Date
  category: Category
}
