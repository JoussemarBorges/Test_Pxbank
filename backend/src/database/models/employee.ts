import { Model, DataTypes } from 'sequelize';
import db from '.'
import Department from './department';


  class Employee extends Model {}
  Employee.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    employeeName: DataTypes.STRING,
    cpf: DataTypes.STRING,
    wage: DataTypes.DECIMAL(7,2),
    dateOfBirth: DataTypes.DATE,
    departmentId: DataTypes.INTEGER,
  }, {
    sequelize: db,
    modelName: 'Employee',
    underscored: true,
    timestamps: false
  });

  Employee.belongsTo(Department, {foreignKey: 'departmentId', as: 'department' })
  Department.hasMany(Employee, {foreignKey: 'departmentId', as: 'employees' })

  export default Employee;