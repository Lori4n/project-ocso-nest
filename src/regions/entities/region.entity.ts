import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Location } from "../../locations/entities/location.entity.js";
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class Region {
    @PrimaryGeneratedColumn('increment')
    regionId: number;

    @ApiProperty({
            example: "Location's region"
    })
    @Column({
        type: "text",
        unique: true
    })
    regionName: string;

    @ApiProperty({
        example: ['StateName','RegionName']
    })
    @Column('simple-array')
    regionStates: string[];

    @OneToMany(() => Location, (location) => location.region)
    location: Location[];
}
