import { IsString, IsEmail, IsNumber, maxLength, MaxLength } from "class-validator";


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
}