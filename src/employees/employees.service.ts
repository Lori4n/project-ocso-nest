import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto.js';
import { UpdateEmployeeDto } from './dto/update-employee.dto.js';
import { Employee } from './entities/employee.entity.js';
import {v4 as uuid} from "uuid";
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EmployeesService {

  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>
  ){}
  async create(createEmployeeDto: CreateEmployeeDto) {
    const employee = await this.employeeRepository.save(createEmployeeDto)
    return employee;
  }

  findAll() {
    // Retorne todos los empleados
    return this.employeeRepository.find()
  }

  findOne(id: string) {
    const employee = this.employeeRepository.findOneBy({
      employeeId: id
    })
  }

async update(id: string, updateEmployeeDto: UpdateEmployeeDto) {
  const employee = await this.employeeRepository.preload({
    employeeId: id,
    ...updateEmployeeDto,
  });
  if (!employee) {
    throw new NotFoundException();
  }
  return await this.employeeRepository.save(employee);
}

  remove(id: string) {
    this.employeeRepository.delete({
      employeeId: id
    })
    return {
      message: "Employee deleted successfully"
    }
  }
}
