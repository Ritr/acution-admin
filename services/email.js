//import { Resend } from 'resend';
const { Resend } = require('resend');
const resend = new Resend('re_5ucgZKJZ_9Ufypcimm9UxQ6gV36LvNqzy');
// export const sendEmail = (to, subject, text) => {
//     console.log(to, subject, text);
//     resend.emails.send({
//         from: 'onboarding@resend.dev',
//         to: to,
//         subject: subject,
//         text: text
//     });
// }

resend.emails.send({
    from: 'auction@resend.dev',
    to: 'http_wenwen@163.com',
    subject: 'Hello World',
    text: '张三测试'
});
