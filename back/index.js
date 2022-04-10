let express = require('express');
let dotenv = require('dotenv');
let cors = require('cors')
let morgan = require('morgan')
let serverRouter = require('./routes')
dotenv.config();
let PORT = 3001
let app = express();

// Middlewares //

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(morgan('dev'));
app.use('/api', serverRouter) // Access router from routes

app.listen(PORT, () => {
    console.log(`Server working on: http://localhost:${PORT}`)
})



