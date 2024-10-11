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

        res.send('Patients table created successfully.')
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

        res.send('Doctors table created successfully.')
    })
})

//APPOINTMENTS TABLE
app.get('/createAppointmentsTable', (req, res) => {
    const sql = `
    CREATE TABLE IF NOT EXISTS Appointments(
        id INT AUTO_INCREMENT PRIMARY KEY,
        patient_id INT,
        doctor_id INT,
        appointment_date DATE,
        appointment_time TIME,
        status ENUM('scheduled', 'completed', 'canceled'),
        FOREIGN KEY (patient_id) REFERENCES Patients(id),
        FOREIGN KEY (doctor_id) REFERENCES Doctors(id)
    )
    `
    db.query(sql, (err) => {
        if(err){
            console.log('Error creating appointments table:', err)
            return res.status(500).send('Error creating appointments table')
        }

        res.send('Appointments table created successfully.')
    })
})

//ADMIN TABLE
app.get('/createAdminTable', (req, res) => {
    const sql = `
    CREATE TABLE IF NOT EXISTS Admin(
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(50) NOT NULL UNIQUE,
        password_hash VARCHAR(255) NOT NULL,
        role ENUM('admin') NOT NULL
    )
    `
    db.query(sql, (err) => {
        if(err){
            console.log('Error creating admin table:', err)
            return res.status(500).send('Error creating admin table')
        }

        res.send('Admin table created successfully.')
    })
})


//POPULATING EACH TABLE WITH SAMPLE DATA
//SAMPLE DATA FOR PATIENTS
//CREATE PATIENT
app.get('/createPatients', (req, res) => {
    const sql = `
    INSERT INTO Patients (first_name, last_name, email, password_hash, phone, date_of_birth, gender, address) VALUES ('Tasha', 'Wright', 'tashawright@example.com', 'hashed_password1', '1234567890', '1990-01-01', 'Female', '456 Miami'),
    ('Larry', 'Smiles', 'larrysmiles@example.com', 'hashed_password2', '0987654321', '1992-02-02', 'Male', '123 Palm St')
    `
    db.query(sql, (err) => {
        if(err){
            console.log('Error creating patients record', err)
            return res.status(500).send('Error creating patients record')
        }

        res.send('Patients record created successfully.')
    })
})


//CREATE DOCTOR
app.get('/createDoctors', (req, res) => {
    const sql = `
    INSERT INTO Doctors (first_name, last_name, specialization, email, phone, schedule) VALUES ('Dr. Alice', 'Johnson', 'Cardiology', 'alicejohnson@example.com', '5551234567', '{"Monday": ["9:00", "17:00"], "Tuesday": ["9:00", "17:00"]}'),
    ('Dr. Bob', 'Williams', 'Neurology', 'bobwilliam@example.com', '5559876543', '{"Wednesday": ["10:00", "18:00"], "Thursday": ["10:00", "18:00"]}')
    `
    db.query(sql, (err) => {
        if(err){
            console.log('Error creating doctors record:', err)
            return res.status(500).send('Error creating doctors record')
        }

        res.send('Doctors record created successfully.')
    }) 
})


//CREATE APPOINTMENT
app.get('/createAppointments', (req, res) => {
    const sql = `
    INSERT INTO Appointments (patient_id, doctor_id, appointment_date, appointment_time, status) VALUES (1,1, '2024-10-16', '10:00:00', 'scheduled'),
    (2,2, '2024-10-17', '11:00:00', 'scheduled')
    `
    db.query(sql, (err) => {
        if(err){
            console.log('Error creating appointments record:', err)
            return res.status(500).send('Error creating appointments record')
        }

        res.send('Appointments record created successfully.')
    })
})


//CREATE ADMIN
app.get('/createAdmin', (req, res) => {
    const sql = `
    INSERT INTO Admin (username, password_hash, role) VALUES ('adminUser', 'hashed_password_admin', 'admin')
    `

    db.query(sql, (err) => {
        if(err){
            console.log('Error creating admin record:', err)
            return res.status(500).send('Error creating admin record')
        }

        res.send('Admin record created successfully.')
    })
})










app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})