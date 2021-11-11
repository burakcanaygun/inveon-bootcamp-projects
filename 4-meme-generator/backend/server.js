const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const { json } = require('body-parser');
const axios = require("axios");
const createUrl = require('./utils/createUrl');
const app = express();

// allow cors
var whitelist = ["http://localhost:3000"]
var corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}

app.use(cors(corsOptions));

app.use(json());


app.get('/', async (req, res) => {
    // get data from external api
    try {
        const response = await axios.get(`${process.env.IMGFLIP_URL}/get_memes`);
        const { memes } = response.data.data;
        return res.status(200).json(memes);
    } catch {
        return res.status(500).json({ message: 'Something went wrong' });
    }
});



// create meme
app.post('/create', async (req, res) => {
    // extract data from request
    const { id, text0, text1 } = req.body;

    const memeData = {
        template_id: id,
        text0,
        text1
    };

    try {
        const response = await axios.post(createUrl(memeData));
        const { url } = response.data.data;
        return res.status(200).json({ url });
    } catch (e) {
        return res.status(500).json({ message: 'Something went wrong please check your request.' });
    }

})

const PORT = process.env.PORT || 5000;
// start server
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
