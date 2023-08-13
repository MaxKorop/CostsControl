import express from 'express';
import cors from 'cors';
import router from './routes/index';
import * as mongoose from 'mongoose';
import dotenv from 'dotenv';


dotenv.config({path: __dirname + '/.env'});

const app = express();
const PORT: number = 3000;
const DBConnetction: string = String(process.env.DB_CONNECTION_STRING);

app.use(cors());
app.use(express.json());
app.use('/api', router);

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