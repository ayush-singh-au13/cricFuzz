import express from 'express';

const app = express();

app.use(express.json());

const port = process.env.PORT || 8001;

app.get("/", (req, res) => {
  res.json('Health API is up');
})

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
})
