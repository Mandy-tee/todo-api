import { createTransport } from "nodemailer";

export const mailTransporter = createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: "nayork77@gmail.com",
        pass: process.env.SMTP_PASSWORD
    },
    from: "nayork77@gmail.com"
});