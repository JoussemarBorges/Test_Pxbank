import { Router } from "express";
import DepartmentController from "../Controllers/DepartmentController";

const departmentRoutes = Router();

departmentRoutes.post('/', (req, res) => DepartmentController.create(req, res));

departmentRoutes.get('/', (req, res) => DepartmentController.getAllDepartments(req, res));

export default departmentRoutes;