import { City, CityAppControllerPort, CityWebAppAdapterPort } from './city-web-app-adapter.dependency'

export default class CityWebAppAdapter implements CityWebAppAdapterPort {
  constructor (private readonly cityAppController: CityAppControllerPort) { }

  getDefaultCities = (): City[] => {
    return this.cityAppController.getDefaultCities()
  }
}
