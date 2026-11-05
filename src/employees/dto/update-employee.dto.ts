import { PartialType } from "@nestjs/swagger";
import { CreateEmployeeDto } from './create-employee.dto.js';
import { IsOptional, IsString } from "class-validator";

export class UpdateEmployeeDto extends PartialType(CreateEmployeeDto) {
    @IsString()
    @IsOptional()
    employeePhoto?: string;
}