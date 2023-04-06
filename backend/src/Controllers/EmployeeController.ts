import { Request, Response } from "express";
import EmployeeService from "../Services/EmployeeService";

class EmployeeController {

  static async registerEmployee(req: Request, res: Response) {
    const newEmployeeData = req.body;
    
    const newEmployee = await EmployeeService.registerEmployee(newEmployeeData);

    return res.status(201).json(newEmployee);
  }

  static async getAllEmployees(req: Request, res: Response) {
    const allEmployees = await EmployeeService.getAllEmployees();

    return res.status(200).json(allEmployees);
  }
}

export default EmployeeController;