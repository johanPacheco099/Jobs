import { City } from './city-web-app-adapter.dependency'

export default interface CityWebAppAdapterPort {
  getDefaultCities: () => City[]
}
