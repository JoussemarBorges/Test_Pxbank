import { Router } from "express";
import EmployeeController from "../Controllers/EmployeeController";

const employeesRoutes = Router();

employeesRoutes.post('/', (req, res) => EmployeeController.registerEmployee(req, res));

export default employeesRoutes;