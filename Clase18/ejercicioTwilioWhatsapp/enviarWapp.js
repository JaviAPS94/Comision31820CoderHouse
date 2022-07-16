import twilio from "twilio";

const accountSid = 'ACbd348cf8313989404172d42b230bd273';
const authToken = '8378ac609a19cd84ba207f5cf8a8edbd';

const client = twilio(accountSid, authToken);

const numero = process.argv[2];
const mensaje = process.argv[3];

try {
    const message = await client.messages.create({
        body: mensaje,
        from: 'whatsapp:+14155238886',
        to: `whatsapp:${numero}`
    });
    console.log(message.sid);
} catch (error) {
    console.log(error);
}