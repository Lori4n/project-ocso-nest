import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../../auth/entities/user.entity.js";
import { Location } from "../../locations/entities/location.entity.js";
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class Manager {
    @PrimaryGeneratedColumn('uuid')
    managerId: string;

    @ApiProperty()
    @Column('text')
    managerFullName: string;

    @ApiProperty()
    @Column('float')
    managerSalary: number;

    @ApiProperty()
    @Column('text', {
        unique: true
    })
    managerEmail: string;

    @ApiProperty()
    @Column('text')
    managerPhoneNumber: string;

    @OneToOne(() => Location)
    location: Location;

    @OneToOne(() => User)
    @JoinColumn({
        name: "userId"
    })
    user: User;
}

