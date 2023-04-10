export const changeDate = (date) => {
  const currentDate = new Date(date)

let month = +currentDate.getUTCMonth()+1

month = month < 10 ? '0'+month : month;

return currentDate.getUTCDate()+'-'+month+'-'+currentDate.getUTCFullYear()

}

export const getDate = (date) => {
  const currentDate = new Date(date)
  let month = +currentDate.getUTCMonth()+1
  month = month < 10 ? '0'+month : month;
  return currentDate.getUTCFullYear()+'-'+month+'-'+currentDate.getUTCDate()  
  }
