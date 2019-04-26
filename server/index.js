const express = require('express'); 
const bodyParser = require('body-parser');
const cors = require('cors'); 
const morgan = require('morgan'); 
const path = require('path'); 
const app = express(); 
const router = ('./router.js');
require('dotenv').config(); 

app.use(morgan('dev')); 
app.use(bodyParser.json()); 
app.use(express.static(path.join(__dirname, '../public/'))); 
app.use(cors()); 
app.use(router); 

const port = process.env.PORT || 3000; 
app.listen(port, console.log(`Server listening on port ${port}`));