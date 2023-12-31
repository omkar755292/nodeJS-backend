const errorHandler = require('./middleware/errorHandler');
const express = require('express');
const env = require('dotenv');
const cors = require('cors');
const DBConnect = require('./config/connectionDB');
const blogRouter = require('./routes/blogRoutes');
const projectRouter = require('./routes/projectRoutes');
const contactRouter = require('./routes/contactRoutes');

env.config() //Configuring Hostname and Port from .env file
const hostname = process.env.HOSTNAME || 'localhost';
const port = process.env.PORT || 6000;

//Connecting to MongoDB and Creating Express app
DBConnect();
const app = express();

//Setting up middleware and routes
app.use(express.json());
app.use(cors());
app.use('/api/blog', blogRouter);
app.use('/api/project', projectRouter);
app.use('/api/contact', contactRouter);
app.use(errorHandler);

//Starting a server on port
app.listen(port, (req, res) => {
    console.log(`sever listening on port http://${hostname}:${port}`);
});