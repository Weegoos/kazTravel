const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();
const bodyParser = require('body-parser');

// Middleware to parse form data
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.post('/contact', (req, res) => {
    const { email, phone, collab } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        secure: true, // true for SSL
        auth: {
            user: "batyr.ashim2022@gmail.com",
            pass: "cfvg poam cpmn aeon"
        },
        tls: {
            rejectUnauthorized: false // Disable certificate verification
        }
    });

    const mailOptions = {
        from: 'batyr.ashim2022@gmail.com',
        to: 'batyrashim058@gmail.com',
        subject: 'kaztravel',
        text: `Здравствуйте, это сообщение сгенерировано автоматически с сайта kazTravel.kz.

        Запросил демо доступ

        Почта: ${email}
        Номер телефона: ${phone}
        Тип сотрудничества: ${collab}

        Отвечать на сообщение не надо`
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err);
            res.status(500).send('Error sending email');
        } else {
            res.send('Success');
        }
    });
});

module.exports = router;
