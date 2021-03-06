import { Exclude, Expose } from "class-transformer";

@Exclude()
export class LevelResponse {

    @Expose()
    id: number;

    @Expose()
    name: string;

    @Expose()
    quantity: number;

    @Expose()
    passed: number;

    @Expose()
    description: string;
}