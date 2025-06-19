import express from 'express';
import strategistRouter from './routes/strategist.routes';
import { errorHandler } from './customMiddlewares/error.middleware';
//initialize app
const app = express();

app.use(express.json());

//routes
app.use('/api/v1/strategy', strategistRouter);

app.get('/', (_req, res) => {
  res.send('Hello from the startup strategist !');
});

//non existent routes
app.use((_req, res) => {
  res.status(404).json({
    status: 'fail',
    message: 'Route not found',
    data: null,
  });
});

// Global error middleware
app.use(errorHandler);


export default app;