import { BaseRepository } from "src/repositories/base/base.repository";
import { Repository } from "typeorm";

export class BaseService<TRep, TEnity>{

    constructor(private _repos: BaseRepository<TEnity>) {
    }

    /**
     * getAll
     * @returns 
     */
    getAll(order?: any): Promise<TEnity[]> {
        return this._repos.getAll(order);
    }

    /**
     * getByCondition
     * @param condition 
     * @param order 
     * @returns 
     */
    getByCondition(condition: any, order?: any): Promise<TEnity[]> {
        return this._repos.getByCondition(condition);
    }

    /**
     * getById
     * @param id 
     * @returns 
     */
    getById(id: any) {
        return this._repos.getById(id);
    }

    /**
     * getOne
     * @param options 
     * @returns 
     */
    getOne(options?: any) {
        return this._repos.getOne(options);
    }

    /**
     * count
     * @param options 
     * @returns 
     */
    count(options?: any) {
        return this._repos.count(options);
    }


    /**
     * create
     * @param entity 
     * @returns 
     */
    create(entity: TEnity) {
        return this._repos.create(entity);
    }

    /**
     * createMany
     * @param entities 
     * @returns 
     */
    createMany(entities: TEnity[]) {
        return this._repos.createMany(entities);
    }

    /**
    * update
    * @param TEnity 
    * @returns 
    */
    update(entity: TEnity) {
        return this._repos.update(entity);
    }


    /**
     * updateMany
     * @param entities 
     * @returns 
     */
    updateMany(entities: TEnity[]) {
        return this._repos.updateMany(entities);
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