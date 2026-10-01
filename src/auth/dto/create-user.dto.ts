import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsEmail, IsIn, IsOptional, IsString, MinLength } from "class-validator";

export class CreateUserDto {
    @ApiProperty({
        default: "user@gmail.com",
    })
    @IsEmail()
    userEmail: string;

    @ApiProperty({
        default: "pass12345",
    })
    @IsString()
    @MinLength(8)
    userPassword: string;

    @ApiPropertyOptional({
        default: "Employee",
    })
    @IsOptional()
    @IsIn(["Admin","Employee","Manager"])
    userRoleS: string[]
}
