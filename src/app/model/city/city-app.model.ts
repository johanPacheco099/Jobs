import { CityRepositoryJsonAdapterPort, CityAppModelPort, DEFAULT_CITIES, City } from './city-app-model.dependency'

export default class CityAppModel implements CityAppModelPort {
  constructor (
    private readonly cityRepositoryJsonAdapter: CityRepositoryJsonAdapterPort<City>) { }

  getDefaultCities = () => {
    try{
      return DEFAULT_CITIES.map(city=>{
        const _city = this.cityRepositoryJsonAdapter.getById(city);
        if(_city) return _city;
        else throw 'No city found'
      })
    }catch(error){
      return [];
    }
  }
}
