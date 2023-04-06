import express from 'express';
// import Employee from './database/models/employee';
import routes from './Routes/Routes';

const app = express();

app.use(express.json());

app.use('/', routes);


export default app;