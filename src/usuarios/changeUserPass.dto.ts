import { IsString } from "class-validator";

export class ChangeUserPassDto{   

    @IsString()
    login: string;

    @IsString()
    password: string;

    @IsString()
    newPassword: string;
}