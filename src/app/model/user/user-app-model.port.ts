import { User } from './user-app-model.dependency'

export default interface UserAppModelPort {
  getById: (id: number) =>  Promise<User | null>[]
  getAll: () => User[]
}
