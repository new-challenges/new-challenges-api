import { Injectable } from "@nestjs/common";

@Injectable()
export class CommonService{
    generateOTP(){
        return String(Math.floor(100000 + Math.random() * 900000));
    }
}