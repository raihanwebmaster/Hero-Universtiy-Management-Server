 import nodemailer from 'nodemailer';
import config from '../config';
 export const sendEmail =  async (to: string, html: string) => {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: config.NODE_ENV === 'production',
        auth: {
          user: config.send_mail_auth_user,
          pass: config.send_mail_auth_pass,
        },
      });
      await transporter.sendMail({
        from: config.send_mail_auth_user, // sender address
        to, // list of receivers
        subject: "Reset your password within 10 mins!!", // Subject line
        text: "", // plain text body
        html, // html body
      });
 }