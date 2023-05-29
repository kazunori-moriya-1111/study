import { Item } from './entities/item.entity';
import { User } from './entities/user.entity';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'postgresql_nest',
  port: 5432,
  username: 'postgres',
  password: 'passw0rd',
  database: 'postgres',
  // autoLoadEntities: true,
  logging: true,
  synchronize: false,
  entities: [Item, User],
  migrations: ['./dist/migration/*.js'],
  // cli: {
  //   entitiesDir: 'src/entities',
  //   migrationsDir: 'src/migrations',
  // },
});
