export class ResponseDto {
    code: string;
    messages: string;
    data: any;
    optionData: any;
    isError: boolean;

    constructor(code: string, messages: string, data: any = [], isError: boolean = false, optionData: any = []) {
        this.code = code;
        this.messages = messages;
        this.data = data;
        this.optionData = optionData;
        this.isError = isError;
    }
}