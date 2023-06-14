import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MongodbModule } from './mongodb/mongodb.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/usermanagement_nestjs'),
    UserModule,
    MongodbModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
