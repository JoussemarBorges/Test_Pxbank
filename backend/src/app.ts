import express from 'express';
import departmentRoutes from './Routes/DepartmentRoutes';
import employeesRoutes from './Routes/EmployeeRoutes';
import loginRoutes from './Routes/LoginRoutes';
import cors from 'cors';

const app = express();

app.use(cors())

app.use(express.json());

app.use('/employees', employeesRoutes);

app.use('/departments', departmentRoutes);

app.use('/login', loginRoutes);


export default app;