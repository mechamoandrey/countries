import { state } from "../states";

const countryRegionFilter = ({ array, filterParam }) => {
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

const setSelectedFilterValue = (nameValue) => {
  const selectedValue = document.querySelector('._filterSelectedValue')

  selectedValue.innerHTML = nameValue
}

const toggleFilterClassname = () => {
  const filterSelect = document.querySelector('.filter-select')  

  filterSelect.classList.toggle('open')
}

export const regionFilter = () => {
  const filterSelect = document.querySelector('.filter-select')  
  const optionsFilter = document.querySelectorAll('._filterSelect')

  filterSelect.addEventListener('click', toggleFilterClassname)

  for (let i = 0; i < optionsFilter.length; i++) {
    const option = optionsFilter[i]
    const optionValue = option.innerHTML

    option.addEventListener('click', (e) => {
      e.stopPropagation()

      countryRegionFilter({
        array: state.allCountries, 
        filterParam: option.dataset.region
      })

      setSelectedFilterValue(optionValue)
      toggleFilterClassname()
    })
  }
}