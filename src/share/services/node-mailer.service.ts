import { Injectable } from "@nestjs/common";
import { APP_CONFIG } from "./configuration.service";
const nodemailer = require("nodemailer");

@Injectable()
export class NodeMailerService {
    private mailbox: any;
    constructor() {
        this.connectAccountEmail();
    }

    async connectAccountEmail() {
        this.mailbox = nodemailer.createTransport({
            host: APP_CONFIG.APPLICATION.EMAIL.HOST,
            port: 587,
            secure: false,
            auth: {
                user: APP_CONFIG.APPLICATION.EMAIL.ACCOUNT,
                pass: APP_CONFIG.APPLICATION.EMAIL.PASSWORD,
            },
        });
    }

    async sendEmail(toMail: string, otp: string) {
        await this.mailbox.sendMail({
            from: APP_CONFIG.SUPPER_ADMIN.USERNAME,
            to: toMail,
            subject: "New Challenge OPT Confirm Create Account",
            html: `<p>Your OTP code is: <strong>${otp}</strong></p>`
        });
    }
}