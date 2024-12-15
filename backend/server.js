import express from 'express';
import cors from 'cors';
import connectDb from './lib/connectDb.js';
import traiteurRouter from './routes/traiteur.route.js';

const app = express();
app.use(cors(process.env.CLIENT_URL));
app.use(express.json());
app.use('/', traiteurRouter);


app.listen(3000, () => {
    console.log('Server is running on port 3000');
    connectDb()
    });