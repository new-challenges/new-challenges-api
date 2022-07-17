import { Logger } from '@nestjs/common';
import { DeleteResult, FindManyOptions, FindOneOptions, FindOptionsWhere, Repository } from 'typeorm';

export class BaseRepository<T>{
    public _logger = new Logger(BaseRepository.name);
    public _repos: Repository<any>;
    constructor(repos: Repository<T>) {
        this._repos = repos;
    }

    /**
     * getAll
     * @returns 
     */
    getAll(options?: FindManyOptions<T>): Promise<T[]> {
        return this._repos.find(options);
    }


    /**
     * getByCondition
     * @param condition 
     * @param order 
     * @returns 
     */
    getByCondition(options?: FindManyOptions<T>): Promise<T[]> {
        return this._repos.find(options);
    }

    /**
     * getPaging
     * @param options 
     * @returns 
     */
    getPaging(options?: FindManyOptions<T>): Promise<[T[], number]> {
        return this._repos.findAndCount(options);
    }

    /**
     * getById
     * @param id 
     * @returns 
     */
    getById(id: any): Promise<T> {
        return this._repos.findOne({ where: { id } });
    }

    /**
     * getById
     * @param options 
     * @returns 
     */
    getOne(options: FindOneOptions<T>): Promise<T> {
        return this._repos.findOne(options);
    }

    /**
     * count
     * @param options 
     * @returns 
     */
    count(options?: FindManyOptions<T>) {
        return this._repos.count(options);
    }

    /**
     * create
     * @param entity 
     * @returns 
     */
    create(entity: any) {
        return this._repos.insert(entity);
    }

    /**
     * createMany
     * @param entities 
     * @returns 
     */
    createMany(entities: []) {
        return this._repos.save(entities);
    }

    /**
    * update
    * @param entity 
    * @returns 
    */
    update(entity: any): Promise<T> {
        return this._repos.save([entity])[0];
    }


    /**
     * updateMany
     * @param entities 
     * @returns 
     */
    updateMany(entities: []) {
        return this._repos.save(entities);
    }

    /**
     * delete
     * @param options
     * @returns 
     */
    delete(options?: any): Promise<DeleteResult> {
        return this._repos.delete(options);
    }
} 