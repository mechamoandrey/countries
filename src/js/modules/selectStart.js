import { state } from "../states";

const filter = ({ array, filterParam }) => {
  const isStateHaveCurrentRegion = state[filterParam]

  if(isStateHaveCurrentRegion) {
    state.listResult = state[filterParam]
  } else {
    const filteredResult = []

    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      const lowerCaseRegion = element.region.toLowerCase()
  
      if(lowerCaseRegion === filterParam ) {
        filteredResult.push(element)
      }
    }
  
    state[filterParam] = filteredResult

    state.listResult = filteredResult
  }
}

const setTitleOption = (nameValue) => {
  const selectedValue = document.querySelector('._filterSelectedValue')

  selectedValue.innerHTML = nameValue
}

const toggleSelectClassname = () => {
  const filterSelect = document.querySelector('.filter-select')  

  filterSelect.classList.toggle('open')
}

export const selectStart = () => {
  const filterSelect = document.querySelector('._select')  
  const optionsFilter = document.querySelectorAll('._selectOption')

  filterSelect.addEventListener('click', toggleSelectClassname)

  for (let i = 0; i < optionsFilter.length; i++) {
    const option = optionsFilter[i]
    const optionValue = option.innerHTML

    option.addEventListener('click', (e) => {
      e.stopPropagation()

      filter({
        array: state.allCountries, 
        filterParam: option.dataset.region
      })

      setTitleOption(optionValue)
      toggleSelectClassname()
    })
  }
}