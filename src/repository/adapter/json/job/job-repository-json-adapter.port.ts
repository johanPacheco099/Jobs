import RepositoryPort from '../../../repository.port'

export default interface JobRepositoryJsonAdapterPort<T> extends RepositoryPort<T> {
  getJobsByRange: (start: number, end: number) => T[]
}
