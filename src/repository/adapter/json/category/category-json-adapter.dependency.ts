import Category from '../../../../domain/category.domain'
import CategoryRepositoryJsonEntity from './category-repository-json.entity'
import CategoryRepositoryJsonAdapterPort from './category-repository-json-adapter.port'
import fs from 'fs'
import path from 'path'

import categoriesJson from '../../../../../database/categories.json'
const categoriesJsonPath = path.resolve(__dirname, '../../../../../database/cities.json')

export {
  Category,
  CategoryRepositoryJsonAdapterPort,
  CategoryRepositoryJsonEntity,
  categoriesJson,
  categoriesJsonPath,
  fs
}
