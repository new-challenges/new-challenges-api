import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, MaxLength } from "class-validator";

export class CreateChallengesRequest {
    @ApiProperty()
    @IsNotEmpty()
    @MaxLength(255)
    challengesType: string;

    @ApiProperty()
    @IsNotEmpty()
    levelId: number
}