const mysql = require('mysql2');
const process = require('process');

const connection = mysql.createConnection({
    host:process.env.DB_HOST||'localhost',
    user:process.env.DB_USER||'shiraz',
    password:process.env.DB_PASSWORD||'shiraz2017',
    database:process.env.DB_DATABASE||'devinscribedb',

});


connection.connect((error)=>{
    if(error){
        console.log('Error connecting to database');
    }

    else{
        console.log('Succesfully connected to database');
    }
});

module.exports = connection;