import { Request, Response } from "express";
import EmployeeService from "../Services/EmployeeService";

class EmployeeController {

  static async registerEmployee(req: Request, res: Response) {
    const newEmployeeData = req.body;
    
    const newEmployee = await EmployeeService.registerEmployee(newEmployeeData);

    return res.status(201).json(newEmployee);
  }

  static async getAllEmployees(_req: Request, res: Response) {
    const allEmployees = await EmployeeService.getAllEmployees();

    return res.status(200).json(allEmployees);
  }

  static async updateEmployee(req: Request, res: Response) {
    const employeeData = req.body;
    
    const result = await EmployeeService.updateEmployee(employeeData);

    return res.status(200).json(result);
  }

  static async deleteEmployeeByID(req: Request, res: Response) {
    const {id} = req.params;

    const isEmployeeDeleted = await EmployeeService.deleteEmployeeByID(+id);

    return res.status(200).json(isEmployeeDeleted);
  }
}

export default EmployeeController;