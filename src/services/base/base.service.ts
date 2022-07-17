import { plainToClass, plainToClassFromExist } from "class-transformer";
import { BaseRepository } from "src/repositories/base/base.repository";
import { FindManyOptions, FindOneOptions, FindOptionsWhere } from "typeorm";
import { ResponseDto } from "../../dtos/response.dto";
import { RESPONSE_CODE_CONTANTS } from "../../share/constants/response-code.const";

export class BaseService<TRep, TEnity>{
    _dto: any;
    _entity: any;
    constructor(private _repos: BaseRepository<TEnity>, dto: new () => TRep) {
        this._dto = dto;
    }

    /**
     * getAll
     * @returns 
     */
    async getAll(options?: FindManyOptions<TEnity>): Promise<ResponseDto> {
        const results = await this._repos.getAll(options);
        const data = plainToClassFromExist(this._dto, results);
        return new ResponseDto(
            RESPONSE_CODE_CONTANTS.SUCCESSFULLY.CODE,
            RESPONSE_CODE_CONTANTS.SUCCESSFULLY.MESSAGES,
            data
        );
    }

    /**
     * getPaging
     * @param options 
     * @returns 
     */
    async getPaging(options: FindManyOptions<TEnity>): Promise<ResponseDto> {

        const cloneObject = {...options};
        const take = cloneObject.take || 10;
        const skip = cloneObject.skip * options.take;
        options.skip = skip;
        options.take = take;

        const [data, count] = await this._repos.getPaging(options);
        const mappingData = plainToClassFromExist(this._dto, data);
        const pageData = {
            pageResults: mappingData,
            count
        }

        return new ResponseDto(
            RESPONSE_CODE_CONTANTS.SUCCESSFULLY.CODE,
            RESPONSE_CODE_CONTANTS.SUCCESSFULLY.MESSAGES,
            pageData
        );
    }

    /**
     * getByCondition
     * @param condition 
     * @param order 
     * @returns 
     */
    async getByCondition(options?: FindManyOptions<TEnity>): Promise<ResponseDto> {
        const results = await this._repos.getByCondition(options);
        const data = plainToClassFromExist(this._dto, results);
        return new ResponseDto(
            RESPONSE_CODE_CONTANTS.SUCCESSFULLY.CODE,
            RESPONSE_CODE_CONTANTS.SUCCESSFULLY.MESSAGES,
            data
        );
    }

    /**
     * getById
     * @param id 
     * @returns 
     */
    async getById(id: any): Promise<ResponseDto> {
        const result = await this._repos.getById(id);
        const data = plainToClass(this._dto, result);
        return new ResponseDto(
            RESPONSE_CODE_CONTANTS.SUCCESSFULLY.CODE,
            RESPONSE_CODE_CONTANTS.SUCCESSFULLY.MESSAGES,
            data
        );
    }

    /**
     * getOne
     * @param options 
     * @returns 
     */
    async getOne(options: FindOneOptions<TEnity>): Promise<ResponseDto> {
        const result = await this._repos.getOne(options);
        const data = plainToClass(this._dto, result);
        return new ResponseDto(
            RESPONSE_CODE_CONTANTS.SUCCESSFULLY.CODE,
            RESPONSE_CODE_CONTANTS.SUCCESSFULLY.MESSAGES,
            data
        );
    }

    /**
     * count
     * @param options 
     * @returns 
     */
    async count(options?: FindManyOptions<any>): Promise<ResponseDto> {
        const data = await this._repos.count(options);
        return new ResponseDto(
            RESPONSE_CODE_CONTANTS.SUCCESSFULLY.CODE,
            RESPONSE_CODE_CONTANTS.SUCCESSFULLY.MESSAGES,
            data
        );
    }


    /**
     * create
     * @param entity 
     * @returns 
     */
    async create(req: any): Promise<ResponseDto> {
        const data = await this._repos.create(req);
        return new ResponseDto(
            RESPONSE_CODE_CONTANTS.SUCCESSFULLY.CODE,
            RESPONSE_CODE_CONTANTS.SUCCESSFULLY.MESSAGES,
            data
        );
    }

    /**
     * createMany
     * @param entities 
     * @returns 
     */
    async createMany(entities: []): Promise<ResponseDto> {
        const data = await this._repos.createMany(entities);
        return new ResponseDto(
            RESPONSE_CODE_CONTANTS.SUCCESSFULLY.CODE,
            RESPONSE_CODE_CONTANTS.SUCCESSFULLY.MESSAGES,
            data
        );
    }

    /**
    * update
    * @param TEnity 
    * @returns 
    */
    async update(entity: any): Promise<ResponseDto> {
        const data = await this._repos.update(entity);
        return new ResponseDto(
            RESPONSE_CODE_CONTANTS.SUCCESSFULLY.CODE,
            RESPONSE_CODE_CONTANTS.SUCCESSFULLY.MESSAGES,
            data
        );
    }


    /**
     * updateMany
     * @param entities 
     * @returns 
     */
    async updateMany(entities: []): Promise<ResponseDto> {
        const data = await this._repos.updateMany(entities);
        return new ResponseDto(
            RESPONSE_CODE_CONTANTS.SUCCESSFULLY.CODE,
            RESPONSE_CODE_CONTANTS.SUCCESSFULLY.MESSAGES,
            data
        );
    }

    /**
     * delete
     * @param options
     * @returns 
     */
    async delete(options?: any): Promise<ResponseDto> {
        const data = await this._repos.delete(options);
        return new ResponseDto(
            RESPONSE_CODE_CONTANTS.SUCCESSFULLY.CODE,
            RESPONSE_CODE_CONTANTS.SUCCESSFULLY.MESSAGES,
            data
        );
    }
}