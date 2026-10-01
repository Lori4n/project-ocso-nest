import { ArrayNotEmpty, IsArray, IsObject, IsOptional, IsString, MaxLength } from "class-validator"
import { Region } from "../../regions/entities/region.entity";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreateLocationDto {

    @ApiProperty({
        example: "Osco Juriquilla"
    })
    @IsString()
    @MaxLength(35)
    locationName: string;

    @ApiProperty({
        example: "Ciencias Av, Juriquilla, Qro"
    })
    @IsString()
    @MaxLength(160)
    locationAddress: string;
    
    @ApiProperty({
        example: [12, 13]
    })
    @IsArray()
    @ArrayNotEmpty()
    locationLatLng: number[];

    @ApiPropertyOptional()
    @IsObject()
    @IsOptional()
    region: Region;

}
