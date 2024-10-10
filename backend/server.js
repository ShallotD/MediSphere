// Import express
const express = require('express')

const app = express();


// Set up the different routes using app.get() i.e.
// Landing page (home)
// About us page
// Signup page 
// Login page
// Our Services page
// Appointments page
// Patients page
// Doctor page
// Contact Us page
// Admin page

app.get('/', (req, res) => {
    res.status(200).send('Welcome to the Home Page.')
})

app.get('/about', (req, res) => {
    res.status(200).send('Welcome to the About Us Page.')
})

app.get('/signup', (req, res) => {
    res.status(200).send('Welcome to the Sign Up Page.')
})

app.get('/login', (req, res) => {
    res.status(200).send('Welcome to the Login Page.')
})

app.get('/services', (req, res) => {
    res.status(200).send('Welcome to the Services Page.')
})

app.get('/appointments', (req, res) => {
    res.status(200).send('Welcome to the Appointments Page.')
})

app.get('/patients', (req, res) => {
    res.status(200).send('Welcome to the Patients Page.')
})

app.get('/doctor', (req, res) => {
    res.status(200).send('Welcome to the Doctors Page.')
})

app.get('/contact', (req, res) => {
    res.status(200).send('Welcome to the Contact Us Page.')
})


//Admin route with access control
app.get('/admin', (req, res) => {
    //Example of a placeholder for admin access check
    const isAdmin = true;
    if(isAdmin) {
        res.status(200).send('Welcome to the Admin Page.')
    } else {
        res.status(403).send('Access Denied.')
    }
})


//Handle 404 for any unknown routes
app.use((req, res) => {
    res.status(404).send('Page not found.')
})

// Set the server to listen on port 3000
const port = 3000;

// Correct the PORT in the listen function
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})
