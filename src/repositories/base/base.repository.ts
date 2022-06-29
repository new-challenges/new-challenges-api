import { Logger } from '@nestjs/common';
import { FindManyOptions, Repository } from 'typeorm';

export class BaseRepository<T>{
    public _logger = new Logger(BaseRepository.name);
    private _repos: Repository<T>;
    constructor(repos: Repository<T>) {
        this._repos = repos;
    }

    /**
     * getAll
     * @returns 
     */
    getAll(order?: any): Promise<T[]> {
        if (order) {
            return this._repos.find({
                order: { ...order }
            });
        } else {
            return this._repos.find();
        }
    }


    /**
     * getByCondition
     * @param condition 
     * @param order 
     * @returns 
     */
    getByCondition(condition: any, order?: any): Promise<T[]> {
        if (order) {
            return this._repos.find({
                where: { ...condition },
                order: { ...order },
            });
        } else {
            return this._repos.find(condition);
        }
    }

    /**
     * getById
     * @param id 
     * @returns 
     */
    getById(id: any) {
        return this._repos.findOne(id);
    }

    /**
     * getById
     * @param options 
     * @returns 
     */
    getOne(options?: any) {
        if (options) {
            return this._repos.findOneBy(options);
        } else {
            return this._repos.find({
                take: 1
            });
        }
    }

    /**
     * count
     * @param options 
     * @returns 
     */
    count(options?: any) {
        if (options) {
            return this._repos.count();
        } else {
            return this._repos.count(options);
        }
    }


    /**
     * create
     * @param entity 
     * @returns 
     */
    create(entity: T) {
        return this._repos.insert(entity);
    }

    /**
     * createMany
     * @param entities 
     * @returns 
     */
    createMany(entities: T[]) {
        return this._repos.save(entities);
    }

    /**
    * update
    * @param entity 
    * @returns 
    */
    update(entity: T) {
        return this._repos.save([entity]);
    }


    /**
     * updateMany
     * @param entities 
     * @returns 
     */
    updateMany(entities: T[]) {
        return this._repos.save(entities);
    }

    /**
     * delete
     * @param options
     * @returns 
     */
    delete(options?: any) {
        return this._repos.delete(options);
    }
} 