import { Router } from "express";
import EmployeeController from "../Controllers/EmployeeController";

const routes = Router();

routes.post('/', (req, res) => EmployeeController.registerEmployee(req, res));

export default routes;