import express from 'express';
import config from "dotenv";
import userRouter from './routers/user.router';

const PORT = process.env.PORT || 5001;
const app = express();

app.use(express.json())
app.use('/api', userRouter)

app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}...`);
});