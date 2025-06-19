import express from 'express';

//initialize app
const app = express();

app.use(express.json());

app.get('/', (_req, res) => {
  res.send('Hello from Express + TypeScript!');
});

export default app;