import { City, CityAppControllerPort } from './city-app-controller.dependency'

export default class CityAppController implements CityAppControllerPort {

  constructor(
    private readonly CityAppModel: CityAppControllerPort
  ){}

  getDefaultCities = (): City[] => {
    return this.CityAppModel.getDefaultCities();
  }
}
