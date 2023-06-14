import { IsString, MaxLength } from 'class-validator';
export class userDTO {
    @IsString()
    @MaxLength(3)
    id: string;

    @IsString()
    @MaxLength(3)
    name: string;

    @IsString()
    @MaxLength(3)
    age: number;

    @IsString()
    @MaxLength(3)
    position: string;
}

export class createUserDTO {
    @IsString()
    @MaxLength(3)
    id: string;

    @IsString()
    @MaxLength(3)
    name: string;

    @IsString()
    @MaxLength(3)
    age: number;

    @IsString()
    @MaxLength(3)
    position: string;
}
