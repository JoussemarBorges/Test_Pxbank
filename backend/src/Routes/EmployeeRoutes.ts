import { Router } from "express";
import EmployeeController from "../Controllers/EmployeeController";

const employeesRoutes = Router();

employeesRoutes.post('/', (req, res, next) => EmployeeController.registerEmployee(req, res, next));

employeesRoutes.get('/', (req, res, next) => EmployeeController.getAllEmployees(req, res, next));

employeesRoutes.put('/', (req, res, next) => EmployeeController.updateEmployee(req, res, next));

employeesRoutes.delete('/:id', (req, res, next) => EmployeeController.deleteEmployeeByID(req, res, next));

employeesRoutes.get('/:id', (req, res, next) => EmployeeController.getEmployeeByCpf(req, res, next))

export default employeesRoutes;