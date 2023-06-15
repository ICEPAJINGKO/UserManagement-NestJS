import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { MongodbModule } from './mongodb/mongodb.module';

@Module({
    imports: [
        ConfigModule.forRoot({ envFilePath: `.env.${process.env.NODE_ENV || 'development'}` }),
        MongooseModule.forRoot('mongodb://localhost:27017/usermanagement_nestjs'),
        UserModule,
        MongodbModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }
