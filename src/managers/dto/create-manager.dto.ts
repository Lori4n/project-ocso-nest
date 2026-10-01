import { IsString, IsEmail, IsNumber, maxLength, MaxLength, IsObject, IsOptional } from "class-validator";
import { Location } from "../../locations/entities/location.entity";

export class CreateManagerDto {
    @IsString()
    @MaxLength(80)
    managerFullName: string;

    @IsString()
    @IsEmail()
    managerEmail: string;

    @IsNumber()
    managerSalary: number;

    @IsString()
    @MaxLength(16)
    managerPhoneNumber: string;

    @IsObject()
    @IsOptional()
    location: Location;
}