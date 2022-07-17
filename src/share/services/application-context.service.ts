import { Injectable } from "@nestjs/common";
import * as requestContext from 'request-context';

@Injectable()
export class ApplicationContextService {
    private static authUserKey = 'auth_Key';
    private static nameSpace = 'request';
    static setValues(key: string, data: any) {
        requestContext.set(key, data);
    }

    static getValues(key: string,) {
        return requestContext.get(this.getKeyWithNamespace(key));
    }

    static setAuthUser(user: UserContext) {
        requestContext.set(this.authUserKey, user);
    }

    static currentUser() {
        return  requestContext.get(this.authUserKey) as UserContext;
    }

    private static getKeyWithNamespace(key: string){
        return `${this.nameSpace}.${this.authUserKey}`
    }
}

export class UserContext{
    username: string = '';
    roles:string [] = [];
    constructor(username: string, roles:string []){
        this.username = username,
        this.roles = roles;
    }
}