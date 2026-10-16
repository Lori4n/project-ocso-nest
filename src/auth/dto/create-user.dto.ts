import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsEmail, IsIn, IsOptional, IsString, MinLength } from "class-validator";

export class CreateUserDto {
    @ApiProperty({
        example: "user@gmail.com",
    })
    @IsEmail()
    userEmail: string;

    @ApiProperty({
        example: "password",
    })
    @IsString()
    @MinLength(8)
    userPassword: string;

    @ApiPropertyOptional({
        example: "Employee",
    })
    @IsOptional()
    @IsIn(["Admin","Employee","Manager"])
    userRoleS: string[]
}
