import RepositoryPort from '../../../repository.port'

export default interface UserRepositoryJsonAdapterPort<T> extends RepositoryPort<T> {
  //getUserByRange: (start: number, end: number) => T[]
  getById : (id:string)=> T | null 
}
