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
    async create(entity: any): Promise<T> {
        await this._repos.save(entity);
        return entity;
    }

    /**
     * createMany
     * @param entities 
     * @returns 
     */
    async createMany(entities: T[]) {
        await this._repos.save(entities);
        return entities;
    }

    /**
    * update
    * @param entity 
    * @returns 
    */
    update(entity: any): Promise<T> {
        this._repos.save(entity, {reload: true})[0];
        return entity;
    }


    /**
     * updateMany
     * @param entities 
     * @returns 
     */
    async updateMany(entities: []) {
        await this._repos.save(entities);
        return entities;
    }

    /**
     * delete
     * @param options
     * @returns 
     */
    delete(options?: FindOptionsWhere<T> | any): Promise<DeleteResult> {
        return this._repos.delete(options);
    }

    /**
     * delete
     * @param options
     * @returns 
     */
     upsert(entities: T[],  conflictPathsOrOptions: string[]): Promise<DeleteResult> {
        return this._repos.upsert(entities, conflictPathsOrOptions);
    }
} 