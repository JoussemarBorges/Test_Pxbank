interface IEmployee {
  id?: number,
  employeeName: string,
  cpf: string,
  wage: number,
  dateOfBirth: Date,
  departmentId?: number,
}

export default IEmployee;