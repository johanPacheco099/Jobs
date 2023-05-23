import { City, CityRepositoryJsonAdapterPort, CityRepositoryJsonEntity, citiesJsonPath, fs } from './city-repository-json-adapter.dependency'

export default class CityRepositoryJsonAdapter implements CityRepositoryJsonAdapterPort<City> {
  getById = (id: string): City | null => {
    try {
      const data = fs.readFileSync(citiesJsonPath, 'utf8')
      const cities: CityRepositoryJsonEntity[] = JSON.parse(data)
      if (cities !== undefined) {
        for (const city of cities) {
          if (city.id === +id) {
            return {
              id: city.id,
              country: city.country,
              name: city.name,
              lat: city.lat,
              lng: city.lng
            }
          }
        }
      }
    } catch (error) {
      console.error(error)
    }
    return null
  }

  getAll = (): City[] => {
    try {
      const data = fs.readFileSync(citiesJsonPath, 'utf8')
      const cities: CityRepositoryJsonEntity[] = JSON.parse(data)
      if (cities !== undefined) {
        return cities.map((city: CityRepositoryJsonEntity) => {
          return {
            id: city.id,
            country: city.country,
            name: city.name,
            lat: city.lat,
            lng: city.lng
          }
        })
      }
    } catch (error) {
      console.error(error)
    }
    return []
  }

  save = (city: City): City | null => {
    try {
      let data = fs.readFileSync(citiesJsonPath, 'utf8')
      const cities: CityRepositoryJsonEntity[] = JSON.parse(data)
      if (city.id === undefined) {
        city.id = cities.length + 1
      }
      const cityEntity: CityRepositoryJsonEntity = {
        id: city.id,
        country: city.country,
        name: city.name,
        lat: city.lat,
        lng: city.lng
      }
      cities.push(cityEntity)
      data = JSON.stringify(cities)
      fs.writeFile(citiesJsonPath, data, (error) => {
        if (error != null) throw error
        return null
      })
      return city
    } catch (error) {
      console.error(error)
    }
    return null
  }

  update = (city: City): City | null => {
    try {
      let data = fs.readFileSync(citiesJsonPath, 'utf8')
      const cities: CityRepositoryJsonEntity[] = JSON.parse(data)
      cities.forEach(cityEntity => {
        if (cityEntity.id === city.id) {
          cityEntity.id = city.id
          cityEntity.country = city.country
          cityEntity.name = city.name
          cityEntity.lat = city.lat
          cityEntity.lng = city.lng
        }
      })
      data = JSON.stringify(cities)
      fs.writeFile(citiesJsonPath, data, (error) => {
        if (error != null) throw error
        return null
      })
      return city
    } catch (error) {
      console.error(error)
    }
    return null
  }

  delete = (id: string): boolean => {
    let data = fs.readFileSync(citiesJsonPath, 'utf8')
    let cities: CityRepositoryJsonEntity[] = JSON.parse(data)
    cities = cities.filter(city => city.id !== +id)
    data = JSON.stringify(cities)
    fs.writeFile(citiesJsonPath, data, (error) => {
      if (error != null) throw error
      return null
    })
    return true
  }
}
