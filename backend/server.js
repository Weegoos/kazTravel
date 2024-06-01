const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors'); 

const PORT = process.env.PORT || 3000;
const app = express();

const emailRouter = require('./email')

app.use(cors()); 
app.use(express.urlencoded({ extended: true })); 
app.use(express.json());

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'kaztravel',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});


const bcrypt = require('bcrypt');
const saltRounds = 10; 

app.post('/registration', (req, res) => {
    const { user_name, password } = req.body;

    // Проверяем, что длина имени пользователя и пароля удовлетворяет условиям
    if (user_name.length > 3 && password.length > 8) {
        
        const checkUserQuery = `SELECT * FROM user WHERE user_name = ?`;
        pool.query(checkUserQuery, [user_name], (err, results) => {
            if (err) {
                console.error('Ошибка при выполнении SQL-запроса:', err);
                res.status(500).send('Ошибка сервера');
                return;
            }
            if (results.length > 0) {
                res.status(400).send('Пользователь с таким именем уже существует');
                return;
            }

            // Хэшируем пароль
            bcrypt.hash(password, saltRounds, (err, hash) => {
                if (err) {
                    console.error('Ошибка при хэшировании пароля:', err);
                    res.status(500).send('Ошибка сервера');
                    return;
                }

                const insertUserQuery = `INSERT INTO user (id, user_name, password) VALUES (null, ?, ?)`;
                pool.query(insertUserQuery, [user_name, hash], (err, result) => {
                    if (err) {
                        console.error('Ошибка при выполнении SQL-запроса:', err);
                        res.status(500).send('Ошибка сервера');
                        return;
                    }
                    res.status(200).send('Пользователь успешно зарегистрирован');
                });
            });
        });
    } else {
        res.status(400).json({ error: 'Неправильный формат имени пользователя или пароля' });
    }
});


app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const getUserQuery = `SELECT * FROM user WHERE user_name = ?`;
    pool.query(getUserQuery, [username], (err, results) => {
        if (err) {
            console.error('Ошибка при выполнении SQL-запроса:', err);
            res.status(500).send('Ошибка сервера');
            return;
        }

        if (results.length === 0) {
            res.status(401).send('Пользователь с таким именем не найден');
            return;
        }

        const user = results[0];
        const hashedPassword = user.password;

        bcrypt.compare(password, hashedPassword, (err, result) => {
            if (err) {
                console.error('Ошибка при сравнении паролей:', err);
                res.status(500).send('Ошибка сервера');
                return;
            }

            if (result) {
                res.status(200).send('Вход выполнен успешно');
            } else {
                res.status(401).send('Неверные учетные данные');
            }
        });
    });
});


app.post('/bot', (req, res) => {
    const UserMsg = req.body.UserMsg

    const saveUserMsg = `INSERT INTO botmsg (id, text) VALUES (null, ?)`
    pool.query(saveUserMsg, [UserMsg], (err, result) => {
        if (err) {
            console.error('Ошибка при выполнении SQL-запроса:', err);
            res.status(500).send('Ошибка сервера');
            return;
        }
        res.status(200).send('Пользователь успешно зарегистрирован');
    })
})

app.get('/botMsg', (req, res) => {
    const sql = "SELECT * FROM botmsg";

    pool.query(sql, (err, results) => {
        if (err) {
            console.error('Ошибка при выполнении SQL-запроса:', err);
            res.status(500).send('Ошибка сервера');
            return;
        }
        res.json(results);
    });
});

app.get('/test', (req, res) => {
    const sql = "SELECT * FROM user";

    pool.query(sql, (err, results) => {
        if (err) {
            console.error('Ошибка при выполнении SQL-запроса:', err);
            res.status(500).send('Ошибка сервера');
            return;
        }
        res.json(results);
    });
});



app.use(emailRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
