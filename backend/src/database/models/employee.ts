import { Model, DataTypes } from 'sequelize';
import db from '.'
import Departament from './departament';


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
    wage: DataTypes.DECIMAL(4,2),
    date_of_birth: DataTypes.DATE,
    departament_id: DataTypes.INTEGER,
  }, {
    sequelize: db,
    modelName: 'Employee',
    underscored: true,
  });

  Employee.belongsTo(Departament, {foreignKey: 'departamentId', as: 'departament' })
  Departament.hasMany(Employee, {foreignKey: 'departamentId', as: 'employees' })

  export default Employee;