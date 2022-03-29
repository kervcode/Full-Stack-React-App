const express = require('express');
const app = express();

const db = require('./models');


app.use(express.json());


// ROUTERS
const postRouter = require('./routes/Posts');
app.use('/post', postRouter);




db.sequelize.sync().then(() => {

    app.listen('3001', () => { 
        console.log('Server is running on port 3001');
    });
});
