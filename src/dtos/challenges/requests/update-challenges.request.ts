import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, MaxLength } from "class-validator";

export class UpdateChallengesRequest {
    @ApiProperty()
    @IsNotEmpty()
    id: number;

    @ApiProperty()
    @IsNotEmpty()
    @MaxLength(255)
    name: string;

    @ApiProperty()
    @IsNotEmpty()
    @MaxLength(255)
    answer: string;

    @ApiProperty()
    @IsNotEmpty()
    point: number

    @ApiProperty()
    @MaxLength(1500, {message: ''})
    description: string;
}