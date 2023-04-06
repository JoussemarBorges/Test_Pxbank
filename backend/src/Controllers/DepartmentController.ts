import { Request, Response, NextFunction } from "express";
import IDepatarment from "../Interfaces/IDepartament";
import DepartmentService from "../Services/DdepartmentService";


class DepartmentController {
  static async create(req: Request, res: Response, next: NextFunction) {
    
    try {
      const newDepartmentData = req.body;
      const departmentCreated = await DepartmentService.create(newDepartmentData);      
      return res.status(201).json(departmentCreated);
    } catch (error) {
      next(error);
    };
  }


  static async getAllDepartments(_req: Request, res: Response, next: NextFunction) {
    
    try {
      const departments = await DepartmentService.getAllDepartments();
      return res.status(200).json(departments);
    } catch (error) {
      next(error);
    };
  }
}

export default DepartmentController;