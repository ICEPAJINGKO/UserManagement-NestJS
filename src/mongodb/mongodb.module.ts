import { Module } from '@nestjs/common';
import { MongodbService } from './mongodb.service';
import { MongodbController } from './mongodb.controller';

@Module({
  providers: [MongodbService],
  controllers: [MongodbController]
})
export class MongodbModule {}
