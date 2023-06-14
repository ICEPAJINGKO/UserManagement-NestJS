import { Module } from '@nestjs/common';
import { MongodbService } from './mongodb.service';
import { MongodbController } from './mongodb.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema, VideoSchema } from './schemas';

@Module({
    imports: [MongooseModule.forFeature([
        { name: 'users', schema: UserSchema },
        { name: 'videos', schema: VideoSchema }
    ])],
    providers: [MongodbService],
    controllers: [MongodbController]
})
export class MongodbModule { }
