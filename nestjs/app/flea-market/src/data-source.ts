import { Item } from './entities/item.entity';
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
  entities: [Item],
  migrations: ['../dist/migration/*.js'],
  // cli: {
  //   entitiesDir: 'src/entities',
  //   migrationsDir: 'src/migrations',
  // },
});
