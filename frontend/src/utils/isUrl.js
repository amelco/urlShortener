function isUrl(url) {
  // simples verificação de validade de URL.
  // inserir um algoritmo melhor caso necessário
  let numberOfDots = 0
  let slashPresence = false
  let doubleSlash = false
  for (let i=0; i<url.length; i++) {
    if (url[i] === '.') numberOfDots++
    if (url[i] === '/') {
      slashPresence = true
      if(url[i+1] === '/' && numberOfDots === 0) {
        doubleSlash = true
        i++
      } 
    } 

    if (slashPresence && !doubleSlash) return false
    if (numberOfDots === 2) return true;
  }
  return false;
}

export default isUrl