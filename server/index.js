const express = require('express');
const app = express();
const cors = require("cors");

const db = require('./models');


app.use(express.json());
app.use(cors());


// ROUTERS
const postRouter = require('./routes/Posts');
app.use('/posts', postRouter);




db.sequelize.sync().then(() => {

    app.listen('5000', () => { 
        console.log('Server is running on port 5000');
    });
});
