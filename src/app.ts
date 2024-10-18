import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import router from './routes';

const app = express();

app.use(cors());
app.use(router);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`App listening at http://localhost/${PORT}`);
});