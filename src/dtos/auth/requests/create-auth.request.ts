import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, MaxLength } from "class-validator";

export class CreateAuthRequest {
    @ApiProperty()
    @IsNotEmpty()
    @MaxLength(255)
    username: string;

    @ApiProperty()
    @IsNotEmpty()
    password: string;

    @ApiProperty()
    @IsNotEmpty()
    passwordConfirm: string;
}