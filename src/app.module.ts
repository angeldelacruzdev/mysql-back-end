import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserSchema } from './users/user.schema';
import { Connection } from 'typeorm';

// Create database with name: citas_medicas
@Module({
  imports: [
    UsersModule,
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'citas_medicas',
      entities: [UserSchema],
      synchronize: true,
    }),
  ],
})
export class AppModule {
  constructor(private conenction: Connection) {}
}
