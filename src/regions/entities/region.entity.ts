import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Region {
    @PrimaryGeneratedColumn('increment')
    regionId: number;

    @Column({
        type: "text",
        unique: true
    })
    regionName: string;

    @Column('simple-array')
    regionStates: string[];
}
