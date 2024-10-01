import express from 'express';
import connectDB from './db/db.js'; // Ensure to include the .js extension
import cors from 'cors';
import bodyParser from 'body-parser';

import postRoutes from './routes/posts.js';

const app = express();

// Connect to the database
connectDB();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes);

// Your other Express app configurations and routes go here

const PORT = process.env.PORT || 3000;
app.get("/try", (req, res) => {
  res.send(" greate you coonected the nodejs with mongo db ");
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});