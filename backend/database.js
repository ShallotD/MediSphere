//import package
const mysql = require('mysql2')

//create connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Amarygroup94$',
    database: 'medisphere'
})

//Connect
db.connect( (err) => {
    if(err){
        console.log('Error connecting to DB: ', err.stack)
    return;
    }

    console.log('Succesfully connected to DB')
    
})

//Export the connection
module.exports = db