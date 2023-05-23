import City from '../../../../../src/domain/city.domain.'
import CityRepositoryJsonAdapterPort from '../../../../../src/repository/adapter/json/city/city-repository-json-adapter.port'
import CityRepositoryJsonAdapter from '../../../../../src/repository/adapter/json/city/city-repository-json.adapter'

const cja: CityRepositoryJsonAdapterPort<City> = new CityRepositoryJsonAdapter()

describe('CityRepositoryJsonAdapter', () => {
  test('CityRepositoryJsonAdapter.getById', () => {
    expect(cja.getById('22166')?.name).toBe('Bucaramanga')
  })

  test('CityRepositoryJsonAdapter.getAll', () => {
    expect(cja.getAll().length).toBe(140889)
  })

  test('CityRepositoryJsonAdapter.getAll', () => {
    expect(cja.getAll()[0].id).toBe(0)
  })

  test('CityRepositoryJsonAdapter.getAll', () => {
    expect(cja.getAll()[5].name).toEqual('Encamp')
  })
})
