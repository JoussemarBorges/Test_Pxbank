interface IEmployee {
  id?: number,
  employeeName: string,
  cpf: string,
  departament: string,
  wage: number,
  birthDate: Date,
  departamentId?: number,
}

export default IEmployee;