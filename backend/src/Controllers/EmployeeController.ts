import { NextFunction, Request, Response } from "express";
import IBadRequestError from "../Interfaces/IErrors";
import EmployeeService from "../Services/EmployeeService";

class EmployeeController {
  
  static async getEmployeeByCpf(req: Request, res: Response, _next: NextFunction) {
    const {cpf} = req.body

    const checkCpfAlreadyExists = EmployeeService.getEmployeeByCpf(cpf)

    return res.status(200).json(checkCpfAlreadyExists)
  }

  static async registerEmployee(req: Request, res: Response, next: NextFunction) {
    const newEmployeeData = req.body;
    
    try {
      const employeeWasregistered = await EmployeeService.registerEmployee(newEmployeeData) as IBadRequestError;

      if(employeeWasregistered?.message) return res.status(409).json(employeeWasregistered);

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