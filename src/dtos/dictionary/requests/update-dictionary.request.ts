import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, MaxLength } from "class-validator";

export class UpdateDictionaryRequest{
    @ApiProperty()
    @IsNotEmpty()
    id:number;

    @ApiProperty()
    @IsNotEmpty()
    @MaxLength(255)
    name: string;

    @ApiProperty()
    @IsNotEmpty()
    @MaxLength(50)
    typeOfWord: string;

    @ApiProperty()
    @IsNotEmpty()
    @MaxLength(1000)
    meaning: string;

    @ApiProperty()
    examples: []
}