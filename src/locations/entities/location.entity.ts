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

    @ApiProperty({ default: "1b1434ad-5e6c-4ee3-806d-74406d65c714" })
    @OneToOne(() => Manager, {
        eager: true,
    })
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