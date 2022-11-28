const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mssql = require('mssql');
const cors = require('cors');


const sql = require('mssql/msnodesqlv8');
var config = {
    user : '',
    password :'',
    server:'DEEJA',
    database:'Restaurant',
    driver:'msnodesqlv8',
    options:{
        trustedConnection:true
    }
};

sql.connect(config,function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("connected to database");
    }
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));


app.post("/api/insert",(req,res) =>{
    
    UserName = req.body.UserName;
    PassWord = req.body.PassWord;


    const sqlInsert =`INSERT INTO LOGDATA ( UserName, PassWord) VALUES ( '${UserName}','${PassWord}' )`;

    sql.query(sqlInsert, function(err,recordSet){
       console.log(recordSet);
    });   
   
});


app.listen(3001, ()=>{
   console.log("Server started on port 3001")
});