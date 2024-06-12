//import { Resend } from 'resend';
const { Resend } = require('resend');
// const resend = new Resend('re_HYPAb9fw_5dmWbvoSgeQJqDfe2EqMKS7e');
const resend = new Resend('re_UmnFehqi_97QFPuuWc7yofFjvvzYaCzAn');

export const sendEmail = (to, subject, text) => {
    console.log(to, subject, text);
    resend.emails.send({
        from: 'propbidtech@propbidhk.com',
        to: to,
        subject: subject,
        text: text
    });
}

// resend.emails.send({
//     from: 'auction@ritr.site',
//     to: '337634268@qq.com',
//     subject: 'Hello World',
//     text: '张三测试'
// });
