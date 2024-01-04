import { DataSource } from 'typeorm';
//import {User} from '../users/entities/user.entity'

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: '127.0.0.1',
        port: 3306,
        username: 'root',
        password: 'rootMysqlPassword',
        database: 'test',
        entities: [
          __dirname + '/../**/*.entity{.ts,.js}',
          //User
        ],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];