const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors'); 

const PORT = process.env.PORT || 3000;
const app = express();

const emailRouter = require('./email')

app.use(cors()); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'kaztravel',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});


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

            const insertUserQuery = `INSERT INTO user (id, user_name, password) VALUES (null, ?, ?)`;
            pool.query(insertUserQuery, [user_name, password], (err, result) => {
                if (err) {
                    console.error('Ошибка при выполнении SQL-запроса:', err);
                    res.status(500).send('Ошибка сервера');
                    return;
                }
                res.status(200).send('Пользователь успешно зарегистрирован');
            });
        });
    } else {
        res.status(400).json({ error: 'Неправильный формат имени пользователя или пароля' });
    }
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const loginUserQuery = `SELECT * FROM user WHERE user_name = ? AND password = ?`;
    pool.query(loginUserQuery, [username, password], (err, results) => {
        if (err) {
            console.error('Ошибка при выполнении SQL-запроса:', err);
            res.status(500).send('Ошибка сервера');
            return;
        }
        if (results.length > 0) {
            res.status(200).send('Вход выполнен успешно');
        } else {
            res.status(401).send('Неверные учетные данные');
        }
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

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
