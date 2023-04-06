import { Router } from "express";
import DepartmentController from "../Controllers/DepartmentController";

const departmentRoutes = Router();

departmentRoutes.post('/', (req, res, next) => DepartmentController.create(req, res, next));

departmentRoutes.get('/', (req, res, next) => DepartmentController.getAllDepartments(req, res, next))

export default departmentRoutes;