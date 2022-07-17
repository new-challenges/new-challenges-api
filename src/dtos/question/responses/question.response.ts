import { Exclude, Expose } from "class-transformer";

@Exclude()
export class QuestionResponse {
    @Expose()
    id: number;

    @Expose()
    name: string;

    @Expose()
    answer: string;

    @Expose()
    point: number;

    @Expose()
    description: string;
}