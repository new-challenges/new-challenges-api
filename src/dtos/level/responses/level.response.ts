import { Exclude, Expose } from "class-transformer";

@Exclude()
export class LevelResponse {
    @Expose()
    name: string;

    @Expose()
    quanlity: number;

    @Expose()
    description: string;
}