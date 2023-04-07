import { NextFunction, Request, Response } from "express";
import EmployeeService from "../Services/EmployeeService";

class EmployeeController {

  static async registerEmployee(req: Request, res: Response, next: NextFunction) {
    const newEmployeeData = req.body;
    
    try {
      const employeeWasregistered = await EmployeeService.registerEmployee(newEmployeeData);
  
      if(!employeeWasregistered) return res.status(400).json({message: 'O id do departamento não é válido'});
      return res.status(201).json(employeeWasregistered);
      
    } catch (error) {
      next(error);
    };
  }


  static async getAllEmployees(_req: Request, res: Response, next: NextFunction) {
    
    try {
      const allEmployees = await EmployeeService.getAllEmployees();
      return res.status(200).json(allEmployees);
      
    } catch (error) {
      next(error);
    };
  }


  static async updateEmployee(req: Request, res: Response, next: NextFunction) {

    try {
      const employeeData = req.body;
      const isEmployeeUpdated = await EmployeeService.updateEmployee(employeeData);
  
      if(isEmployeeUpdated !== 1) return res.status(200).json(isEmployeeUpdated);
      return res.status(200).json({message: 'Dados atualizados com sucesso!' });
      
    } catch (error) {
      next(error);
    };
  }

  
  static async deleteEmployeeByID(req: Request, res: Response, next: NextFunction) {
    
    try {
      const {id} = req.params;
      const isEmployeeDeleted = await EmployeeService.deleteEmployeeByID(+id);
  
      if(isEmployeeDeleted === 1) return res.status(200).json({message: 'Funcionário deletado com sucesso!'});
      return res.status(404).json({message: 'Id não encontrado'});
      
    } catch (error) {
      next(error);
    };
  }
}

export default EmployeeController;