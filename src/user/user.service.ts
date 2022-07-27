import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { userDTO } from './dto/user.dto';

@Injectable()
export class UserService {
    constructor(@InjectModel('users') private readonly userModel: Model<userDTO>) { } 

    async findAll() {
        return await this.userModel.find({})
    }
}
