// import { ModelStatic } from "sequelize";
import Department from "../database/models/department";
import Employee from "../database/models/employee";
import IBadRequestError from "../Interfaces/IErrors";

import IEmployee from "../Interfaces/IEmployee";

class EmployeeService {

  static async getEmployeeByCpf(cpf: string) {
    const cpfAlreadExists = await Employee.findOne({where: {cpf: cpf}})

    console.log(cpfAlreadExists?.dataValues);
    
    
    return cpfAlreadExists?.dataValues
  }

  static async registerEmployee(newEmployeeData: IEmployee): Promise<IEmployee | IBadRequestError | null > {

    const {departmentId, cpf} = newEmployeeData;

    const isDepatmentExists = await Department.findByPk(departmentId);
    if(!isDepatmentExists) return {message: 'O departamento é inválido'};

    const cpfAlreadExists = await Employee.findOne({where: {cpf: cpf}})
    if(cpfAlreadExists?.dataValues.cpf) return {message: 'CPF já cadastrado.'}

    const {dataValues} = await Employee.create({...newEmployeeData});
    const employeeRegistered = dataValues;
    return employeeRegistered
  }

  static async getAllEmployees(){
    const allEmployees = await Employee.findAll({
      include: [
        {model: Department, as: 'department'}
      ]
    });

    return allEmployees;
  }

  static async updateEmployee(employeeData: IEmployee): Promise<number | IBadRequestError>{
    const {id, departmentId} = employeeData;


    const isValidId = await Employee.findByPk(id);    
    if(!isValidId) return {message: 'O id do funcionário informado é inválido'}

    const isDepatmentExists = await Department.findByPk(departmentId);
    if(!isDepatmentExists) return {message: 'O Id do departamento informado é inválido'}

    const {id: _, ...employeeDt} = employeeData
    const [affectedCount] = await Employee.update({...employeeDt}, {where: {id: employeeData.id}});

    if(affectedCount === 0) return {message: 'Nenhum dado foi atualizado'}

    return affectedCount;
  }

  static async deleteEmployeeByID(id: number): Promise<number | null> {
    const result = await Employee.destroy({where: {id}});

    return result;
  }
}

export default EmployeeService;
