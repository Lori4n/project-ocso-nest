import { IsString, MaxLength, IsEmail, IsObject, IsOptional } from "class-validator";
import { Location } from "../../locations/entities/location.entity";

export class CreateEmployeeDto {
    @IsString()
    @MaxLength(30)
    employeeName: string;

    @IsString()
    @MaxLength(70)
    employeeLastName: string;

    @IsString()
    @MaxLength(10)
    employeePhoneNumber: string;

    @IsString()
    @IsEmail()
    employeeEmail: string;

    @IsOptional()
    @IsObject()
    location: Location;
}
