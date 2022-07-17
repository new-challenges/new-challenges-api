import { Controller } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { TransactionService } from "../services/transaction.service";
import { CONTROLLER_CONSTANTS } from "../share/constants/api.const";

@Controller(CONTROLLER_CONSTANTS.TRANSACTION.NAME)
@ApiTags(CONTROLLER_CONSTANTS.TRANSACTION.API_TAG)
export class TransactionController{
    constructor(
        private transactionService: TransactionService
    ){
        
    }
}