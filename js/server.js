// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/contactFormDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Mongoose Schema and Model
const formSchema = new mongoose.Schema({
    name: String,
    email: String
});

const Form = mongoose.model('Form', formSchema);

// Routes
app.post('/submit-form', async (req, res) => {
    const { name, email } = req.body;

    const newForm = new Form({ name, email });

    try {
        await newForm.save();
        res.status(200).send('Form submitted successfully!');
    } catch (error) {
        res.status(500).send('Error submitting form');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
