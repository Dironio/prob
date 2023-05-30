import express from 'express';
import config from "dotenv";
import userRouter from './routers/user.router';
import vacancyRouter from './routers/vacancy.router';

const PORT = process.env.PORT || 5001;
const app = express();

app.use(express.json())
app.use('/api/users', userRouter)
app.use('/api/vacancies', vacancyRouter)

app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}...`);
});