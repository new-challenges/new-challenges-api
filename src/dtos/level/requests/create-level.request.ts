import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, MaxLength } from "class-validator";

export class CreateLevelRequest {
    @ApiProperty()
    @IsNotEmpty()
    @MaxLength(255)
    name: string;

    @ApiProperty()
    @IsNumber()
    quantity: number;

    @ApiProperty()
    @IsNumber()
    passed: number;

    @ApiProperty()
    @MaxLength(1500, {message: ''})
    description: string;
}