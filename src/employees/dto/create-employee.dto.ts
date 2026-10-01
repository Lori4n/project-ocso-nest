import { IsString, MaxLength, IsEmail, IsObject, IsOptional } from "class-validator";
import { Location } from "../../locations/entities/location.entity";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";


export class CreateEmployeeDto{
    @ApiProperty({
        example: "Karlo"
    })
    @IsString()
    @MaxLength(30)
    employeeName: string;

    
     @ApiProperty({
        example: "Paz"
    })
    @IsString()
    @MaxLength(70)
    employeeLastName: string;

     @ApiProperty({
        example: "442677898"
    })
    @IsString()
    @MaxLength(10)
    employeePhoneNumber: string;

     @ApiProperty({
        example: "karlo@gmail.com"
    })
    @IsString()
    @IsEmail()
    employeeEmail: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsObject()
    location: Location;
}