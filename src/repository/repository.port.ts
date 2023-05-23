export default interface RepositoryPort<T> {
  getById: (id: string) => T | null
  getAll: () => T[] | []
  save: (entity: T) => T | null
  update: (entity: T) => T | null
  delete: (id: string) => boolean
}
