import { City } from './city-app-model.dependency'

export default interface CityAppModelPort {
  getDefaultCities: () => City[]
}
