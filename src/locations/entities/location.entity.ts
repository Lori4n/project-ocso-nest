import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class location {
    @PrimaryGeneratedColumn('increment')
    locationId: number;
    @Column('text')
    locationName: string;
    @Column('text')
    locationAddress: string;
    @Column('array')
    locationLatLng: number[];
}