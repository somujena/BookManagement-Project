const express = require('express')
const  app = express()
const mysql = require('mysql');
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db =mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'violet01',
    database: 'rdbms_project'
});

app.post('/create', async  (req,res) => {
    const FName = req.body.FName;
    const LName = req.body.LName;
    const EMAIL = req.body.EMAIL;
    const Password= req.body.Password;

    var sql1 = "INSERT INTO accounts (FirstName, LastName, EMAIL, Password) VALUES (?,?,?,?)";
    var sql2 = "INSERT INTO account_details (EMAIL, Book1, Book2, Book3, Book4, Book5, Book6) VALUES(?,?,?,?,?,?,?)";
    db.query(sql1, [FName, LName, EMAIL, Password], function (err, result){
        if (err) {
            console.log(err+" error in insert1");
        }else {
            console.log("values inserted");
        }
    });
    db.query(sql2, [ EMAIL, null, null, null, null, null, null ], function (err, result){
        if (err) {
            console.log(err+" error in insert2");
        }else {
            console.log("values inserted2");
        }
    });
});

app.post('/bookfetch', async  (req,res) => {
    const user = req.body.USER;
    console.log(user);
    var sql9 = "SELECT Book1, Book2, Book3, Book4, Book5, Book6 FROM account_details WHERE EMAIL = ?";
    db.query(sql9, [user], function (err, result){
        if (err) {
            console.log(err+" error in bookfetch");
        }else {
            console.log(result+" BookFetched");
            res.send(result);
        }
    });
});



app.post('/book1', async  (req,res) => {
    const isbn1 = req.body.isbn1;
    console.log(isbn1);
    var sql10 = "SELECT BookName, BookAuthor, Publisher, Edition FROM cs WHERE ISBN = ?";
      db.query(sql10, [isbn1], function (err, result){
        if (err) {
            console.log(err+" error in book1fetch");
        }else {
            console.log(result+" Book1Fetched");
            res.send(result);
        }
    });
});


app.post('/book2', async  (req,res) => {
    const isbn2 = req.body.isbn2;
    var sql11 = "SELECT BookName, BookAuthor, Publisher, Edition FROM cs WHERE ISBN = ?";
      db.query(sql11, [isbn2], function (err, result){
        if (err) {
            console.log(err+" error in book2fetch");
        }else {
            console.log(result+" Book2Fetched");
            res.send(result);
        }
    });
});


app.post('/book3', async  (req,res) => {
    const isbn3 = req.body.isbn3;
    console.log(isbn3);
    var sql12 = "SELECT BookName, BookAuthor, Publisher, Edition FROM pcm WHERE ISBN = ?";
      db.query(sql12, [isbn3], function (err, result){
        if (err) {
            console.log(err+" error in book3fetch");
        }else {
            console.log(result+" Book3Fetched");
            res.send(result);
        }
    });
});


app.post('/book4', async  (req,res) => {
    const isbn4 = req.body.isbn4;
    console.log(isbn4);
    var sql13 = "SELECT BookName, BookAuthor, Publisher, Edition FROM pcm WHERE ISBN = ?";
      db.query(sql13, [isbn4], function (err, result){
        if (err) {
            console.log(err+" error in book4fetch");
        }else {
            console.log(result+" Book4Fetched");
            res.send(result);
        }
    });
});


app.post('/book5', async  (req,res) => {
    const isbn5 = req.body.isbn5;
    console.log(isbn5);
    var sql14 = "SELECT BookName, BookAuthor, Publisher, Edition FROM pcm WHERE ISBN = ?";
      db.query(sql14, [isbn5], function (err, result){
        if (err) {
            console.log(err+" error in book5fetch");
        }else {
            console.log(result+" Book5Fetched");
            res.send(result);
        }
    });
});


app.post('/book6', async  (req,res) => {
    const isbn6 = req.body.isbn6;
    console.log(isbn6);
    var sql15 = "SELECT BookName, BookAuthor, Publisher, Edition FROM others WHERE ISBN = ?";
      db.query(sql15, [isbn6], function (err, result){
        if (err) {
            console.log(err+" error in book6fetch");
        }else {
            console.log(result+" Book6Fetched");
            res.send(result);
        }
    });
});




app.put('/updateCS1', async (req,res) =>{
    const user = req.body.USER;
    const book = req.body.BOOK;
    console.log(user + book);
    var sql3 = "UPDATE account_details SET Book1 = ? WHERE EMAIL = ?";
    db.query(sql3, [book, user], function (err, result){
        if (err) {
            console.log(err+" error in updateCS1");
        }else {
            console.log("UpdatedCS1");
        }
    });
});
app.put('/updateCS2', async (req,res) =>{
    const user = req.body.USER;
    const book = req.body.BOOK;
    console.log(user + book);
    var sql4 = "UPDATE account_details SET Book2 = ? WHERE EMAIL = ?";
    db.query(sql4, [book, user], function (err, result){
        if (err) {
            console.log(err+" error in updateCS2");
        }else {
            console.log("UpdatedCS2");
        }
    });
});



app.put('/updatePCM1', async (req,res) =>{
    const user = req.body.USER;
    const book = req.body.BOOK;
    console.log(user + book);
    var sql5 = "UPDATE account_details SET Book3 = ? WHERE EMAIL = ?";
    db.query(sql5, [book, user], function (err, result){
        if (err) {
            console.log(err+" error in updatePCM1");
        }else {
            console.log("UpdatedPCM1");
        }
    });
});
app.put('/updatePCM2', async (req,res) =>{
    const user = req.body.USER;
    const book = req.body.BOOK;
    console.log(user + book);
    var sql6 = "UPDATE account_details SET Book4 = ? WHERE EMAIL = ?";
    db.query(sql6, [book, user], function (err, result){
        if (err) {
            console.log(err+" error in updatePCM2");
        }else {
            console.log("UpdatedPCM2");
        }
    });
});
app.put('/updatePCM3', async (req,res) =>{
    const user = req.body.USER;
    const book = req.body.BOOK;
    console.log(user + book);
    var sql7 = "UPDATE account_details SET Book5 = ? WHERE EMAIL = ?";
    db.query(sql7, [book, user], function (err, result){
        if (err) {
            console.log(err+" error in updatePCM3");
        }else {
            console.log("UpdatedPCM3");
        }
    });
});


app.put('/updateOthers', async (req,res) =>{
    const user = req.body.USER;
    const book = req.body.BOOK;
    console.log(user + book);
    var sql8 = "UPDATE account_details SET Book6 = ? WHERE EMAIL = ?";
    db.query(sql8, [book, user], function (err, result){
        if (err) {
            console.log(err+" error in updateothers");
        }else {
            console.log("UpdatedOthers");
        }
    });
});


app.put('/setbook', async (req,res) =>{
    const user = req.body.USER;
    console.log(user);
    var sql16 = "UPDATE account_details SET Book1 = '', Book2 = '', Book3 = '', Book4 = '', Book5 = '', Book6 = '' WHERE EMAIL = ?";
    db.query(sql16, [ user ], function (err, result){
        if (err) {
            console.log(err+" error in setting book 0");
        }else {
            console.log("book setted 0");
        }
    });
});



app.post('/check', async  (req,res) => {
    const EMAIL1 = req.body.EMAIL1;
    console.log(EMAIL1);
    var sql17 ="SELECT FirstName, LastName, EMAIL, Password FROM accounts WHERE EMAIL = ?"; 
      db.query(sql17,[ EMAIL1 ], function (err, result){
        if (err) {
            console.log(err+" error in checking");
        }else {
            console.log(result+" checked");
            res.send(result);
        }
    });
});

app.listen(3001, ()=>{
    console.log("yeah baby! sever is 3001");
});