import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class PagingQuestionRequest{
    @ApiProperty()
    name: string;

    @ApiProperty()
    @IsNotEmpty()
    take: number;

    @ApiProperty()
    @IsNotEmpty()
    skip: number;
}