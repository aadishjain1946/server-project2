const express = require('express');
const userRoute = express.Router();
userRoute.post('/register', (request, response) => {
    var data="";
    request.on('data', (chunk) => {
        data += chunk;
    })
    request.on('end', () => {
        console.log(data);
        json = JSON.parse(data);
        console.log(json);
        const usercrud = require('../db/helpers/usercrud');
        usercrud.add(json, response);
    })

})
userRoute.post('/login', (request, response) => {
    var data="";
    request.on('data', (chunk) => {
        data += chunk;
    })
    request.on('end', () => {
        json = JSON.parse(data);
        const usercrud = require('../db/helpers/usercrud');
        usercrud.search(json, response);
    })
})
userRoute.post('/update', (request, response) => {
    var data="";
    request.on('data', (chunk) => {
        data += chunk;
    })
    request.on('end', () => {
        json = JSON.parse(data);
        const usercrud = require('../db/helpers/usercrud');
        usercrud.update(json, response);
    })
})
userRoute.get('/profile', (request, response) => {

})
module.exports = userRoute;