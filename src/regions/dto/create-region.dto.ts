import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsString, MaxLength } from "class-validator";

export class CreateRegionDto {
    @ApiProperty({
        example: "El Bajio"
    })
    @IsString()
    @MaxLength(100)
    regionName: string;
    
    @ApiProperty({
        example: ["Queretaro","El Bajio"]
    })
    @IsArray()
    regionState: string[];

}
