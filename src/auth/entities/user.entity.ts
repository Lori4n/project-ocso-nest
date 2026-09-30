import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Manager } from "../../managers/entities/manager.entity.js";
import { Employee } from "../../employees/entities/employee.entity.js";

@Entity()
export class User{
    @PrimaryGeneratedColumn('uuid')
    uderId: string;

    @Column('text')
    userEmail: string;

    @Column('text')
    userPassword: string;

    @Column('simple-array', {
        default: "Employee"
    })
    userRoles: string[];

    @OneToOne(() => Manager, {
        eager: true
    })
    manager: Manager;

    @OneToOne(() => Employee, (employee) => employee.user, {
    eager: true
    })
    employee: Employee;

}