import { UserRepositoryJsonAdapterPort, UserAppModelPort, User } from './user-app-model.dependency'

export default class UserAppModel implements UserAppModelPort {
  constructor(

    private readonly UserRepositoryJsonAdapter: UserRepositoryJsonAdapterPort<User>) {
      getById: async (id: number) => {
        const user = await UserRepositoryJsonAdapter.getById(id);
        return user !== null ? [user] : [];
      }

    getAll = () => {
      return this.UserRepositoryJsonAdapter.getAll();
    }
  }
