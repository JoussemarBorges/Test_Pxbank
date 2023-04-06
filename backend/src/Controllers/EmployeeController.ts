import { Request, Response } from "express";
import EmployeeService from "../Services/EmployeeService";

class EmployeeController {

  static async registerEmployee(req: Request, res: Response) {
    const newEmployeeData = req.body;
    
    const employeeWasregistered = await EmployeeService.registerEmployee(newEmployeeData);

    if(!employeeWasregistered) return res.status(400).json({message: 'O id do departamento não é válido'})
    return res.status(201).json(employeeWasregistered);
  }

  static async getAllEmployees(_req: Request, res: Response) {
    const allEmployees = await EmployeeService.getAllEmployees();

    return res.status(200).json(allEmployees);
  }

  static async updateEmployee(req: Request, res: Response) {
    const employeeData = req.body;
    
    const isEmployeeUpdated = await EmployeeService.updateEmployee(employeeData);

    if(isEmployeeUpdated !== 1) return res.status(404).json(isEmployeeUpdated)

    return res.status(200).json({message: 'Dados atualizados com sucesso!' });
  }

  static async deleteEmployeeByID(req: Request, res: Response) {
    const {id} = req.params;

    const isEmployeeDeleted = await EmployeeService.deleteEmployeeByID(+id);

    if(isEmployeeDeleted === 1) return res.status(200).json({message: 'Funcionário deletado com sucesso!'});

    return res.status(404).json({message: 'Id não encontrado'})
  }
}

export default EmployeeController;