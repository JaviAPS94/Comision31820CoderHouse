import { createTransport } from "nodemailer";

const TEST_EMAIL = 'ppa5zzqnldgpvf5a@ethereal.email';

const transporter = createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: TEST_EMAIL,
        pass: 'xzJUKeUkhQGexXs7GZ'
    }
});

const mailOptions = {
    from: 'Servidor Node.js',
    to: TEST_EMAIL,
    subject: 'Mail de prueba desde Node.js',
    html: '<h1 style="color: blue;">Contenido de prueba desde <span style="color: green">Node js</span></h1>'
};

try {
    const info = await transporter.sendMail(mailOptions)
    console.log(info);
} catch (error) {
    console.log(error);
}

