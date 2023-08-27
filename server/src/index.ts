import express from 'express';
import cors from 'cors';
import router from './routes/index';
import * as mongoose from 'mongoose';
import dotenv from 'dotenv';
import { errorHandling } from './middleware/errorHandling';


dotenv.config({path: __dirname + '/.env'});

const app = express();
const PORT: number = 5000;
const DBConnetction: string = String(process.env.DB_CONNECTION_STRING);

app.use(cors());
app.use(express.json());
app.use('/api', router);
app.use(errorHandling);

const start = (): void => {
    try {
      mongoose.connect(DBConnetction)
        .then(() => { console.log('MongoDB connected') })
        .catch((error) => { console.log(`MongoDB connection error: ${error}`) })
      app.listen(PORT, () => { return console.log(`Express is listening at http://localhost:${PORT}`); });
    } catch (error) {
      console.log(error);
    }
}

start();