const express=require('express');
const app = express();
const path=require('path');
const ejs=require('ejs');
const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises',
  headers: {
    'X-RapidAPI-Key': 'b847ae06c5mshbc4bfd1842a74d7p116288jsne999f8f5e930',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.listen(3000,()=>{
    console.log('listening on port 3000');
})

app.get('/', async (req, res)=>{
 await res.render('Navbar');
 
});

app.get('/exercises', async (req, res) => {
    let objectList = {}; // Initialize objectList

    try {
        const response = await axios.request(options);
        objectList = response.data; // Store the fetched data in objectList
    } catch (error) {
        console.error(error);
    }

    console.log(objectList[0]); // Logging the first item for demonstration

    await res.render('cards', { exercises: objectList }); // Render the 'cards' view with exercises data
});

app.get('/chest', async (req, res) => {
    let objectList = {}; // Initialize objectList

    try {
        const response = await axios.request(options);
        objectList = response.data; // Store the fetched data in objectList
    } catch (error) {
        console.error(error);
    }

     // Logging the first item for demonstration

    await res.render('chestt', { exercises: objectList }); // Render the 'cards' view with exercises data
});

app.get('/waist', async (req, res) => {
    let objectList = {}; // Initialize objectList

    try {
        const response = await axios.request(options);
        objectList = response.data; // Store the fetched data in objectList
    } catch (error) {
        console.error(error);
    }

     // Logging the first item for demonstration

    await res.render('waistt', { exercises: objectList }); // Render the 'cards' view with exercises data
});
app.get('/back', async (req, res) => {
    let objectList = {}; // Initialize objectList

    try {
        const response = await axios.request(options);
        objectList = response.data; // Store the fetched data in objectList
    } catch (error) {
        console.error(error);
    }

     // Logging the first item for demonstration

    await res.render('backk', { exercises: objectList }); // Render the 'cards' view with exercises data
});
app.get('/cardio', async (req, res) => {
    let objectList = {}; // Initialize objectList

    try {
        const response = await axios.request(options);
        objectList = response.data; // Store the fetched data in objectList
    } catch (error) {
        console.error(error);
    }

     // Logging the first item for demonstration

    await res.render('cardioo', { exercises: objectList }); // Render the 'cards' view with exercises data
});
app.get('/legs', async (req, res) => {
    let objectList = {}; // Initialize objectList

    try {
        const response = await axios.request(options);
        objectList = response.data; // Store the fetched data in objectList
    } catch (error) {
        console.error(error);
    }

     // Logging the first item for demonstration

    await res.render('upperLegs', { exercises: objectList }); // Render the 'cards' view with exercises data
});
app.get('/arms', async (req, res) => {
    let objectList = {}; // Initialize objectList

    try {
        const response = await axios.request(options);
        objectList = response.data; // Store the fetched data in objectList
    } catch (error) {
        console.error(error);
    }

     // Logging the first item for demonstration

    await res.render('upperArms', { exercises: objectList }); // Render the 'cards' view with exercises data
});