var path = require('path')
const express = require('express')
const bodyParser = require("body-parser");
const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv');
const axios = require('axios')
dotenv.config();

const app = express()

app.use(express.static('dist'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('dist/index.html'))
})
console.log(`Your API key is ${process.env.API_KEY}`);
// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.post('/test', async function (req, res) {
    const API_URL = "https://api.meaningcloud.com/sentiment-2.1?key="
    API_KEY = process.env.API_KEY
    const url = req.body.formText
    console.log(url)
    const response = await axios.post(encodeURI(API_URL + API_KEY +'&text=""&lang=en'+ `&url=${url}`))
    console.log(API_URL + API_KEY + `& url =${url}`)
    try {
        const result = JSON.stringify(response.data)
        console.log(result)
        res.send(result)
      }
      catch (error) {
        console.log('error', error)
      }
})
