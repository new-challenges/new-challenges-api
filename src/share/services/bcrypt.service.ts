import { Injectable } from "@nestjs/common";
import * as bcrypt from 'bcrypt';

@Injectable()
export class BcryptService {

    /**
     * encrypt
     * @param data 
     */
    async encrypt(data: string) {
        const saltOrRounds = 10;
        const hash = await bcrypt.hash(data, saltOrRounds);
        return hash;
    }

    /**
     * validattionHash
     * @param hash 
     * @param data 
     * @returns 
     */
    async validationHash(hash: string, data: string){
        return await bcrypt.compare(data, hash);
    }
}