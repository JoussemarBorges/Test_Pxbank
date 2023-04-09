interface IEmployee {
  id?: number,
  employeeName: string,
  cpf: string,
  wage: number,
  dateOfBirth: Date,
  departmentId?: number,
  department?: {
    departmentId: number,
    departmentName: string,
  },
}

export default IEmployee;