 const masks = {
   cpf (value) {
    return value
      .replace(/\D/g, '') 
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1')
   },
   wage(value){
    return value.replace(/\D/g,'')
    .replace(/(\d)(\d)/,'$1.$2')
    .replace(/(\d{3})(\d)/,'$1,$2')
    .replace(/^(\d)\.(\d)(\d)(\d),(\d)(\d)(\d)$/,'$1$2.$3$4$5,$6$7')
    .replace(/^(\d)\.(\d)(\d)(\d),(\d)(\d)(\d)\d+?$/,'$1$2.$3$4$5,$6$7')
    }
 };



 export default masks