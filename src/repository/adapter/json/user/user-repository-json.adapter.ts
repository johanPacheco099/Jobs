import {
  User,
  UserRepositoryJsonAdapterPort,
  //CategoryRepositoryJsonAdapter,
  //CityJsonAdapter
} from './user-repository-json-adapter.dependency'
import mysql from 'mysql';

export default class UserRepositoryJsonAdapter implements UserRepositoryJsonAdapterPort<User> {

  getById = (id: string): User | null => {
    try {
      const sql = 'SELECT * FROM user WHERE id = ?';
      connection.query(sql, [id], (error: mysql.MysqlError | null, results: any[]) => {
        if (error) {
          console.error('Error al ejecutar la consulta: ', error);
          return null;
        } else if (results.length === 0) {
          console.error('User not found');
          return null;
        } else {
          const userEntity = results[0];
          if (userEntity == null) {
            console.error('user not found');
            return null;
          }
          return {
            id: userEntity.id,
            name: userEntity.name,
            email: userEntity.email,
            phone: userEntity.phone,
            job: userEntity.job,
            password: userEntity.password,
            location: userEntity.location,
            country: userEntity.country
          };
        }
      });
    } catch (error) {
      console.error(error);
    }
    return null;
  };

  getAll = () => {
    return [];
  };

  save = () => {
    return null;
  };

  update = () => {
    return null;
  };

  delete = () => {
    return false;
  };


}





