import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, MaxLength } from "class-validator";

export class SignUpAuthRequest {
    @ApiProperty()
    @IsNotEmpty()
    email: string;
}