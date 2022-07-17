import { Exclude, Expose } from "class-transformer";
import { DictionaryExampleResponse } from "./dictionary-example.response";

@Exclude()
export class DictionaryResponse {
    @Expose()
    id: number;

    @Expose()
    name: string;

    @Expose()
    typeOfWord: string;

    @Expose()
    meaning: string;

    @Expose()
    examples: DictionaryExampleResponse[];
}