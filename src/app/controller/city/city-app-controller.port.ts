import { City } from './city-app-controller.dependency'

export default interface CityAppControllerPort {
  getDefaultCities: () => City[]
}
