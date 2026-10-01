import { IsString, IsEmail, IsNumber, maxLength, MaxLength, IsObject, IsOptional } from "class-validator";
import { Location } from "../../locations/entities/location.entity";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreateManagerDto {

    @ApiProperty({
        example: "Juan Carlos Torres"
    })
    @IsString()
    @MaxLength(80)
    managerFullName: string;

    @ApiProperty({
        example: "JuanC@gmail.com"
    })
    @IsString()
    @IsEmail()
    managerEmail: string;

    @ApiProperty({
        example: 2500
    })
    @IsNumber()
    managerSalary: number;

    @ApiProperty({
        example: "5567371673"
    })
    @IsString()
    @MaxLength(16)
    managerPhoneNumber: string;

    @ApiPropertyOptional()
    @IsObject()
    @IsOptional()
    location: Location;
}