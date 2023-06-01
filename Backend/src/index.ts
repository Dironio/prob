import express from 'express';
import config from "dotenv";
import userRouter from './routers/user.router';
import vacancyRouter from './routers/vacancy.router';
import busynessRouter from './routers/busyness.router';
import experienceRouter from './routers/experience.router';
import cors from 'cors';

const PORT = process.env.PORT || 5001;
const app = express();

app.use(express.json())
app.use(cors());
app.use('/api/users', userRouter)
app.use('/api/vacancies', vacancyRouter)
app.use('/api/busyness', busynessRouter)
app.use('/api/experience', experienceRouter)

app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}...`);
});