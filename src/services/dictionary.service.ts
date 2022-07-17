import { Injectable } from "@nestjs/common";
import { plainToClass, plainToInstance } from "class-transformer";
import { CreateDictionaryRequest } from "../dtos/dictionary/requests/create-dictionary.request";
import { DictionaryExampleResponse } from "../dtos/dictionary/responses/dictionary-example.response";
import { DictionaryResponse } from "../dtos/dictionary/responses/dictionary.response";
import { ResponseDto } from "../dtos/response.dto";
import { DictionaryExampleRepository } from "../repositories/dictionary-example.repository";
import { DictionaryRepository } from "../repositories/dictionary.repository";
import { RESPONSE_CODE_CONTANTS } from "../share/constants/response-code.const";
import { DictionaryExampleEntity } from "../share/entities/dictionary-example.entity";
import { DictionaryEnity } from "../share/entities/dictionary.entity";
import autoMapper from "../share/services/mapper.service";
import { BaseService } from "./base/base.service";

@Injectable()
export class DictionaryService extends BaseService<DictionaryResponse, DictionaryEnity>{
    constructor(
        private dictionaryRepos: DictionaryRepository,
        private dictionaryExampleRepos: DictionaryExampleRepository
    ) {
        super(dictionaryRepos, DictionaryResponse);
    }

    async upsertData(req: CreateDictionaryRequest) {
        let dictionary = autoMapper(req, new DictionaryEnity());
        await this.dictionaryRepos.upsert([dictionary], ['id']);
        const dictionaryOuput = plainToClass(DictionaryResponse, dictionary);
        if (req.examples.length > 0) {
            const examples: DictionaryExampleEntity[] = [];
            req.examples.forEach((item) => {
                const example = autoMapper(item, new DictionaryExampleEntity());
                example.dictionaryId = dictionary.id;
                examples.push(example);
            });
            await this.dictionaryExampleRepos.upsert(examples, ['id']);

            const s = [];
            const exampleOutput = plainToInstance(DictionaryExampleResponse, examples);
            dictionaryOuput.examples = exampleOutput;
        }

        return new ResponseDto(
            RESPONSE_CODE_CONTANTS.SUCCESSFULLY.CODE,
            RESPONSE_CODE_CONTANTS.SUCCESSFULLY.MESSAGES,
            dictionaryOuput
        );
    }

    async getDetails(id: number) {
        const dictionary = await this.dictionaryRepos.getById(id);
        const dictionaryOuput = plainToClass(DictionaryResponse, dictionary);
        const examples = await this.dictionaryExampleRepos.getByCondition({
            where: {
                dictionaryId: id
            }
        });
        const exampleOutput = plainToInstance(DictionaryExampleResponse, examples);
        dictionaryOuput.examples = exampleOutput;
        return new ResponseDto(
            RESPONSE_CODE_CONTANTS.SUCCESSFULLY.CODE,
            RESPONSE_CODE_CONTANTS.SUCCESSFULLY.MESSAGES,
            dictionaryOuput
        );
    }

    async deleteData(id: number): Promise<ResponseDto> {
        await this.dictionaryExampleRepos.delete({ id });
        await this.dictionaryExampleRepos.delete({ dictionaryId: id });

        return new ResponseDto(
            RESPONSE_CODE_CONTANTS.SUCCESSFULLY.CODE,
            RESPONSE_CODE_CONTANTS.SUCCESSFULLY.MESSAGES,
            []
        );
    }
}