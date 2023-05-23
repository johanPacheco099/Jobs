import City from '../../../../domain/city.domain.'
import CityRepositoryJsonAdapterPort from './city-repository-json-adapter.port'
import CityRepositoryJsonEntity from './city-repository-json.entity'
import fs from 'fs'
import path from 'path'

const citiesJsonPath = path.resolve(__dirname, '../../../../../database/cities.json')

export { City, CityRepositoryJsonAdapterPort, CityRepositoryJsonEntity, citiesJsonPath, fs }
