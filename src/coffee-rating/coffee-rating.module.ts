import { Module } from '@nestjs/common';
import { CoffeeRatingService } from './coffee-rating.service';
import { CoffeeModule } from 'src/coffee/coffee.module';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [
    DatabaseModule.register({
      type: 'postgres',
      host: 'localhost',
      password: 'password',
      port: 5432,
    }),
    CoffeeModule,
  ],
  providers: [CoffeeRatingService],
})
export class CoffeeRatingModule {}
