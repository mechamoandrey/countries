import { state } from './../states'

const debounce = (func, timeout = 500) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
}

const saveInput = (event) => {
  const filteredResult = []
  const input = event.target
  let inputValue = input.value

  // Remove caracteres especiais usando expressão regular
  inputValue = inputValue.replace(/[^\D\s]/gi, '')

  // Atualiza o valor do input com o texto filtrado
  input.value = inputValue

  // Filtro
  for (let index = 0; index < state.allCountries.length; index++) {
    const elementCountry = state.allCountries[index];
    const nameLower = elementCountry.name.common.toLowerCase()
    const nameCapitalized = elementCountry.name.common
    
    if(nameLower.includes(inputValue) || nameCapitalized.includes(inputValue)) {
      filteredResult.push(elementCountry)
    }
  }
  state.listResult = filteredResult
}

export const searchStart = () => {
  const searchInput = document.querySelector('._search')

  const processChanges = debounce((e) => saveInput(e))

  searchInput.addEventListener("keydown", processChanges)
}