import nodemailer from 'nodemailer';
export default async function handler(req, res) {
    if(req.method === 'POST') {
        const username = process.env.NEXT_PUBLIC_EMAIL_USERNAME;
        const password = process.env.NEXT_PUBLIC_EMAIL_PASSWORD;
        const barber = process.env.NEXT_PUBLIC_EMAIL_TO;

        const body =  req.body;
        const data = JSON.parse(body)

        const transporter = nodemailer.createTransport({
            host: 'mail.infomaniak.com',
            port: 465,
            tls: {
                ciphers: 'SSLv3',
                rejectUnauthorized: false,
            },

            auth: {
                user: username,
                pass: password,
            },
        });

        try {
            const mail = await transporter.sendMail({
                from: username,
                to: barber,
                subject: `${data.name} - ezenardr.dev`,
                html: `
            <h1 style="text-align : center">Formulaire de contact</h1>
            <p>Nom : ${data.name}</p>
            <p>Mail : ${data.email}</p>
            <p>${data.message}</p>
            `,
            });

            return res.status(200).send({ message: 'Success: email was sent' });
        } catch (error) {
            console.log(error);
            return res.status(500).send({ message: 'COULD NOT SEND MESSAGE' })
        }
    }
}