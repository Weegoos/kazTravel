let express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();
const mysql = require('mysql2');
const bodyParser = require('body-parser');
// Create a transporter object using the default SMTP transport
router.post('/send-email', (req, res) => {
    
    const transporter = nodemailer.createTransport({
        service:'gmail',
        secure: false, // true для использования SSL
        auth: {
            user: "batyr.ashim2022@gmail.com",
            pass: "cfvg poam cpmn aeon"
        },
        tls: {
            rejectUnauthorized: false // Отключение проверки сертификата
        }
    })
    
    const mailOptions = {
        from: 'batyr.ashim2022@gmail.com',
        to: 'batyrashim058@gmail.com',
        subject: `kaztravel`,
        text: `Здравствуйте, это сообщение сгенерировано автоматически с сайта kazTravel.kz.

        Запросил демо доступ

        Отвечать на сообщение не надо
        `
    }
    transporter.sendMail(mailOptions, (err) => {
        if (err){
            console.log(err);
        }else {
            res.send('Success')
        }
    })
})

module.exports = router
