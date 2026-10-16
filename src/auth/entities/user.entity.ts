import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Manager } from "../../managers/entities/manager.entity.js";
import { Employee } from "../../employees/entities/employee.entity.js";
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class User{
    @PrimaryGeneratedColumn('uuid')
    uderId: string;

    @ApiProperty()
    @Column('text', {
        unique: true,
    })
    userEmail: string;

    @ApiProperty()
    @Column('text')
    userPassword: string;

    @ApiProperty()
    @Column('simple-array', {
        default: "Employee"
    })
    userRoles: string[];

    @OneToOne(() => Manager)
    manager: Manager;

    @OneToOne(() => Employee, (employee) => employee.user)
    employee: Employee;

}