import {
  Category,
  CategoryRepositoryJsonAdapterPort,
  CategoryRepositoryJsonEntity,
  categoriesJson,
  categoriesJsonPath,
  fs
} from './category-json-adapter.dependency'

export default class CategoryRepositoryJsonAdapter implements CategoryRepositoryJsonAdapterPort<Category> {
  getById = (id: string): Category | null => {
    try {
      if (categoriesJson !== undefined) {
        for (const categoryEntity of categoriesJson) {
          if (categoryEntity.id === +id) {
            return {
              id: categoryEntity.id,
              description: categoryEntity.description
            }
          }
        }
      }
    } catch (error) {
      console.error(error)
    }
    return null
  }

  getAll = (): Category[] => {
    try {
      if (categoriesJson !== undefined) {
        return categoriesJson.map((categoryEntity: CategoryRepositoryJsonEntity) => {
          return {
            id: categoryEntity.id,
            description: categoryEntity.description
          }
        })
      }
    } catch (error) {
      console.error(error)
    }
    return []
  }

  save = (category: Category): Category | null => {
    try {
      if (category.id === undefined) {
        category.id = +categoriesJson.length + 1
      }
      const categoryEntity = {
        id: category.id,
        description: category.description
      }
      categoriesJson.push(categoryEntity)
      const data = JSON.stringify(categoriesJson)
      fs.writeFile(categoriesJsonPath, data, (error) => {
        if (error != null) throw error
        return null
      })
      return category
    } catch (error) {
      console.error(error)
    }
    return null
  }

  update = (category: Category): Category | null => {
    try {
      categoriesJson.forEach((categoryEntity: CategoryRepositoryJsonEntity) => {
        if (categoryEntity.id === category.id) {
          categoryEntity.description = category.description
        }
      })
      const data = JSON.stringify(categoriesJson)
      fs.writeFile(categoriesJsonPath, data, (error) => {
        if (error != null) throw error
        return null
      })
      return category
    } catch (error) {
      console.error(error)
    }
    return null
  }

  delete = (id: string): boolean => {
    try {
      const categories = categoriesJson.filter((category: Category) => category.id !== +id)
      const data = JSON.stringify(categories)
      fs.writeFile(categoriesJsonPath, data, (error) => {
        if (error != null) throw error
        return null
      })
      return true
    } catch (error) {
      console.error(error)
    }
    return false
  }
}
