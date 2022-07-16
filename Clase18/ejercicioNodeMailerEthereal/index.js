import nodemailer from 'nodemailer';

function createSendMail(mailConfig) {
    const transporter = nodemailer.createTransport(mailConfig);

    return function sendEmail({ to, subject, text, html, attachments }) {
        const mailOptions = { from: mailConfig.auth.user, to, subject, text, html, attachments };
        return transporter.sendMail(mailOptions);
    }
}

function createSendMailEthereal() {
    return createSendMail({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'ppa5zzqnldgpvf5a@ethereal.email',
            pass: 'xzJUKeUkhQGexXs7GZ'
        }
    })
}

function createSendMailGmail() {
    return createSendMail({
        service: 'gmail',
        port: 587,
        auth: {
            user: 'alex.pinaida94@gmail.com',
            pass: 'qedfpybiveyeqicc'
        }
    })
}

// const sendMail = createSendMailEthereal();
const sendMail = createSendMailGmail()

const cuentaPrueba = 'ppa5zzqnldgpvf5a@ethereal.email';
const asunto = process.argv[2] || 'sin asunto';
const mensajeHtml = process.argv[3] || 'nada para decir';
const rutaAdjunto = process.argv[4];
const adjuntos = [];

if (rutaAdjunto) {
    adjuntos.push({ path: rutaAdjunto })
}

const info = await sendMail({
    to: cuentaPrueba,
    subject: asunto,
    html: mensajeHtml,
    attachments: adjuntos
});

console.log(info);