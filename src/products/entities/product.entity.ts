import {Entity, ManyToOne,Column, PrimaryGeneratedColumn} from "typeorm";
import { Provider } from "../../providers/entities/provider.entity.js";

@Entity()

export class Product {
    @PrimaryGeneratedColumn("uuid")
    productId: string;
    @Column({type: 'text'})
    productName:string;
    @Column({type: 'float'})
    price: number;
    @Column ({type: 'int'})
    countSeal: number;
    // @Column({type: 'uuid'})
    // provider: string
    @ManyToOne(() => Provider, (provider) => provider.products,{
        eager: true,
    })
    provider: Provider;
}
