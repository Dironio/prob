import express from 'express';

const PORT = process.env.PORT || 5001;
const app = express();

app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}...`);
});