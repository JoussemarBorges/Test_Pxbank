const priceToString = (value) => {

  let parseString = Number(value)
    .toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})

  const index = parseString.indexOf('$')+1

  const newString = parseString.trim().substring(index)

  return newString

}

export default priceToString