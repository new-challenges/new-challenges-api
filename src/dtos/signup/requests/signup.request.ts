import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class SignUpRequest {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    username: string;
}