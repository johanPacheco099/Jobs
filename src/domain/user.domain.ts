import City from './city.domain.'

export default interface User {
  id: number
  name: string
  email: string
  phone : string
  job ? : string
  password : string
  location: City
  country : string
}

