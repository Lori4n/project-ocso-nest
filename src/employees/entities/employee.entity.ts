import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToOne} from "typeorm";
import { Location } from "../../locations/entities/location.entity.js";
import { User } from "../../auth/entities/user.entity.js";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

@Entity()
export class Employee {
    @PrimaryGeneratedColumn('uuid')
    employeeId: string;

    @ApiProperty()
    @Column('text')
    employeeName: string;

    @ApiProperty()
    @Column('text')
    employeeLastName: string;

    @ApiProperty()
    @Column('text')
    employeePhoneNumber: string;

    @ApiProperty()
    @Column('text', {
        unique: true
    })
    employeeEmail: string;

    @ApiProperty()
    @Column ({
        type: 'text',
        nullable: true
    })
    employeePhoto: string;

    @ApiPropertyOptional()
    @ManyToOne(() => Location, (location) => location.employees)
    @JoinColumn ({
        name: "locationId"
    })
    location: Location;
    
    @OneToOne(() => User)
    @JoinColumn({
        name: "userId"
    })
    user: User
}
