import { Exclude, Expose } from "class-transformer";

@Exclude()
export class DictionaryExampleResponse {
    @Expose()
    dictionaryId: number;

    @Expose()
    example: string;

    @Expose()
    description: string;
}