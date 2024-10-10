//import express
const express = require('express')
const db = require('./database')

const app = express();

//Set the server to listen on port 3000
const PORT = 3000;




//Set up a basic route
//Interacting with the database
//Performing CRUD functions
//CREATE    
//READ - SELECT
//UPDATE - UPDATE
//DELETE - DELETE

//CREATE TABLES
//PATIENTS TABLE
app.get('/createPatientsTable', (req, res) => {
    const sql = `
    CREATE TABLE IF NOT EXISTS Patients(
        id INT AUTO_INCREMENT PRIMARY KEY,
        first_name VARCHAR(50) NOT NULL,
        last_name VARCHAR(50) NOT NULL,
        email VARCHAR(100) NOT NULL UNIQUE,
        password_hash VARCHAR(255) NOT NULL,
        phone VARCHAR(15),
        date_of_birth DATE,
        gender ENUM('Male', 'Female', 'Other'),
        address TEXT
    )
    `
    db.query(sql, (err) => {
        if(err){
            console.log('Error creating patients table:', err)
            return res.status(500).send('Error creating patients table')
        }

        res.send('patients table created succesfully')
    })
})


//DOCTORS TABLE
app.get('/createDoctorsTable', (req, res) => {
    const sql = `
    CREATE TABLE IF NOT EXISTS Doctors(
        id INT AUTO_INCREMENT PRIMARY KEY,
        first_name VARCHAR(50) NOT NULL,
        last_name VARCHAR(50) NOT NULL,
        specialization VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL UNIQUE,
        phone VARCHAR(15),
        schedule JSON 
    )
    `
    db.query(sql, (err) => {
        if(err){
            console.log('Error creating doctors table:', err)
            return res.status(500).send('Error creating doctors table')
        }

        res.send('doctors table created succesfully')
    })
})

//APPOINTMENTS TABLE







app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})