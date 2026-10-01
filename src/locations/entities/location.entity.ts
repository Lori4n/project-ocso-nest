import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { Manager } from "../../managers/entities/manager.entity.js";
import { Region } from "../../regions/entities/region.entity.js";
import { Employee } from "../../employees/entities/employee.entity.js";
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class Location {
    @PrimaryGeneratedColumn('increment')
    locationId: number;

    @ApiProperty({
        example: 'Branch name and location'
    })
    @Column('text')
    locationName: string;
    
    @ApiProperty({
        example: 'Physical address'
    })
    @Column('text')
    locationAddress: string;

    @ApiProperty({
        example: ['Latitude', 'Longitude']
    })
    @Column('simple-array')
    locationLatLng: number[];

    @OneToOne (() => Manager)
    @JoinColumn({
        name: "managerId"
    })
    manager: Manager;

    @ManyToOne(() => Region, (region) => region.location)
    @JoinColumn ({
        name: "regionId"
    })
    region: Region;

    @OneToMany(() => Employee,(employee)=> employee.location)
    employees: Employee[]
}