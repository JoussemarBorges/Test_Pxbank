import express from 'express';
import Employee from './database/models/employee';

const app = express();

app.use(express.json());

app.get('/', async (_req, res) => {
  const result = await Employee.findAll();
  res.status(200).json(result);
})


export default app;