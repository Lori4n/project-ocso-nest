import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "../../products/entities/product.entity.js";
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class Provider {
    @PrimaryGeneratedColumn('uuid')
    providerId: string;

    @ApiProperty({
        example: 'Branch name of the provider'
    })
    @Column('text')
    providerName: string;

    @ApiProperty({
        example: "Provider's email"
    })
    @Column('text', {
        unique: true,
    })
    providerEmail: string;

    @ApiProperty({
        example: 'Contact phone number of the provider'
    })
    @Column({
        type: "text",
        nullable: true,
    })
    providerPhoneNumber: string;

    @OneToMany(() => Product, (product) => product.provider)
    products: Product[];
}