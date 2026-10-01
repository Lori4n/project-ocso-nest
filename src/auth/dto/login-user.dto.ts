import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, MinLength } from "class-validator";


export class LoginUserDto{
    @ApiProperty({
            example: "user@gmail.com",
        })
    @IsString()
    @IsEmail()
    userEmail: string;

    @ApiProperty({
            example: "password",
    })
    @IsString()
    @MinLength(8)
    userPassword: string;
}