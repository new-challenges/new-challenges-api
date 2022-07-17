import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, MaxLength } from "class-validator";

export class UpdateStatusUserRequest {
    @ApiProperty()
    @IsNotEmpty()
    id: string;

    @ApiProperty()
    status: string;
}