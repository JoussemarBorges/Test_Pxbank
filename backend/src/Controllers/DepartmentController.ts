import { Request, Response } from "express";
import IDepatarment from "../Interfaces/IDepartament";
import DepartmentService from "../Services/DdepartmentService";


class DepartmentController {
  static async create(req: Request, res: Response): Promise<Response> {
    const newDepartmentData = req.body;

    const departmentCreated = await DepartmentService.create(newDepartmentData);

    return res.status(201).json(departmentCreated);
  }

  static async getAllDepartments(_req: Request, res: Response) {
    const departments = await DepartmentService.getAllDepartments();

    return res.status(200).json(departments);
  }
}

export default DepartmentController;