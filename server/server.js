

const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'root123',
    database: 'hackathon'

});

//select all from database
app.get('/', (req,res) => {
    const sql = "Select * from table_name";
    db.query(sql,(err,data)=>{
        if(err) return res.json("Error");
        return res.json(data);
    })
})




app.listen(8081, ()=> {
    console.log("Listening");
})
