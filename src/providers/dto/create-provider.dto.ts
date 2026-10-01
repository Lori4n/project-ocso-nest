import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsEmail,IsOptional, IsString, MaxLength } from "class-validator"

export class CreateProviderDto {

  @ApiProperty({
    example: "Coca Cola"
  })
  @IsString()
  @MaxLength(100)
  providerName: string;

  @ApiProperty({
    example: "CocaCola@gmail.com"
  })
  @ApiProperty()
  @IsEmail()
  @IsString()
  providerEmail: string;

  @ApiProperty({
    example: "556737167"
  })
  @ApiPropertyOptional()
  @IsString()
  @MaxLength(15)
  @IsOptional()
  providerPhoneNumber: string;
}
