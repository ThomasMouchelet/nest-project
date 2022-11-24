import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipeModule } from './recipe/recipe.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: "root",
      password: "root",
      database: "postgres",
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    RecipeModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
