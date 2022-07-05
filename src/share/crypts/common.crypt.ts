import { Injectable } from "@nestjs/common";
import * as bcrypt from 'bcrypt';

@Injectable()
export class CommonCrypt {
    constructor() {

    }

    /**
     * Encryption password of user input
     * @param password 
     * @returns 
     */
    async hashPassword(password: string): Promise<string> {
        const saltOrRounds = 10;
        return await bcrypt.hash(password, saltOrRounds);
    }
}