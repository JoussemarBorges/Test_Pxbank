import { Request, Response } from "express";
// import { ModelStatic } from "sequelize";
import EmployeeService from "../Services/EmployeeService";

class EmployeeController {

  static async registerEmployee(req: Request, res: Response) {
    const newEmployeeData = req.body;
    
    const newEmployee = await EmployeeService.registerEmployee(newEmployeeData);

    return res.status(201).json(newEmployee);
  }
}

export default EmployeeController;