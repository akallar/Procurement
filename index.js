/*document.addEventListener('DOMContentLoaded',function(){*/

const express = require('express');
const bodyParser =require('body-parser')
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname +'/public'));
const port = 3000;
app.set('view engine','ejs')
app.listen(port,()=>{
    console.log("Server running on port 3000");
});
app.get('/', (req, res) => {

    res.render(__dirname + '/views/index.ejs');
});