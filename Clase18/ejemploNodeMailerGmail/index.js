import { createTransport } from "nodemailer";

const TEST_EMAIL = 'ppa5zzqnldgpvf5a@ethereal.email';
const HOST = 'alex.pinaida94@gmail.com';

const transporter = createTransport({
    service: 'gmail',
    port: 587,
    auth: {
        user: HOST,
        pass: 'qedfpybiveyeqicc'
    }
});

const mailOptions = {
    from: 'Servidor Node.js',
    to: TEST_EMAIL,
    subject: 'Mail de prueba desde Node.js con gmail',
    html: '<h1 style="color: blue;">Contenido de prueba desde <span style="color: green">Node js</span></h1>',
    attachments: [
        {
            path: new URL('./nodemailer.png', import.meta.url).pathname
        }
    ]
};

try {
    const info = await transporter.sendMail(mailOptions)
    console.log(info);
} catch (error) {
    console.log(error);
}