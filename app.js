const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use('/',require("./routes/user/user"));
app.use('/src/register', require("./api/userAPI"));
app.use('/src/login', require("./api/userAPI"));
app.use('/src/user', require("./api/userAPI"));
// app.use('/src',require("./api/productAPI"));









app.listen(process.env.Port || 4560, (err) => {
    if (err) {
        console.log("Server error");
        throw err;
    }
    else {
        console.log("server started!!!");
    }
})