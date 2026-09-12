import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto.js';
import { UpdateEmployeeDto } from './dto/update-employee.dto.js';
import { Employee } from './entities/employee.entity.js';
import {v4 as uuid} from "uuid";

@Injectable()
export class EmployeesService {
  private employees: CreateEmployeeDto[] = [
  {
    id: uuid(),
    name: "Alberto",
    lastName: "Costas",
    phoneNumber: "XXXX442321"
  },
  {
    id: uuid(),
    name: "Juan",
    lastName: "Perez",
    phoneNumber: "XXXX442321"
  }
]
  create(createEmployeeDto: CreateEmployeeDto) {
    createEmployeeDto.id = uuid()
    this.employees.push(createEmployeeDto);
    return createEmployeeDto;
  }

  findAll() {
    // Retorne todos los empleados
    return this.employees;
  }

  findOne(id: string) {
    const employee = this.employees.filter((employee) =>employee.id == id)[0];
    if (!employee) throw new NotFoundException()
    return employee
  }

  update(id: string, updateEmployeeDto: UpdateEmployeeDto) {
    let employeeToUpdate = this.findOne(id)
    employeeToUpdate = {
      ... employeeToUpdate,
      ... updateEmployeeDto,
    }
    this.employees = this.employees.map((employee) => {
      if (employee.id == id) {
        employee = employeeToUpdate
      }
      return employee
    })

    return employeeToUpdate;
  }

  remove(id: string) {
    this.findOne(id)
    this.employees = this.employees.filter((employees) => employees.id !== id)
    return this.employees;
  }
}
