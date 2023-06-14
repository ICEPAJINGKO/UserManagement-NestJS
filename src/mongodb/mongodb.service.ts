import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUser, IVideo } from './mongodb.interface';

@Injectable()
export class MongodbService {
    constructor(
        @InjectModel('users') private readonly userModel: Model<IUser>,
        @InjectModel('videos') private readonly videoModel: Model<IVideo>
    ) { }

    async createUser(data: IUser): Promise<any> {
        const createUser = new this.userModel(data);
        return createUser.save();
    }

    async createVideo(data: IVideo): Promise<any> {
        const createUser = new this.videoModel(data);
        return createUser.save();
    }

}
