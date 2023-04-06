interface IEmployee {
  id?: number,
  employeeName: string,
  cpf: string,
  wage: number,
  dateOfBirth: Date,
  departamentId?: number,
}

export default IEmployee;