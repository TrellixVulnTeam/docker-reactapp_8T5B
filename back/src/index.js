let express = require('express');
let cors = require('cors')
let serverRouter = require('./routes')
let PORT = 5000
let app = express();

// Middlewares //

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors('*'));
app.use('/api', serverRouter) // Access router from routes
app.get('/', (req, res) => res.send('En la raiz del server'))

app.listen(PORT, () => {
    console.log(`Server working on: http://localhost:${PORT}`)
})



