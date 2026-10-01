import { IsInt, IsNumber, IsObject, IsOptional, IsString, IsUUID, MaxLength } from "class-validator";
import { Provider } from "../../providers/entities/provider.entity.js"
import { ApiProperty } from "@nestjs/swagger";

export class CreateProductDto {

    @IsUUID("4")
    @IsOptional()
    productId: string;

    @ApiProperty({
        example: "Coca Cola Light 200ml"
    })

    @IsString()
    @MaxLength(40)
    productName:string;

    @ApiProperty({
        example: 25.75
    })
    @ApiProperty()
    @IsNumber()
    price: number;

    @ApiProperty({
        example: 3
        })
    @ApiProperty()
    @IsInt()
    countSeal: number;

    @ApiProperty()
    @IsObject()
    provider: Provider;

}
