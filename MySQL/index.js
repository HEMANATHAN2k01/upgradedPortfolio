const express = require('express')

const app = express()
const DBs = require('./config/dbs')
const Router = require('./routers/GetRouters')

app.use(Router)
DBs;



app.listen(4040, () => {
    console.log(`Server is running on port: http://localhost:4040`);
})

// localhost:4040