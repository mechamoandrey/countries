import { countryListConstructorInDOM } from './../constructors'
import { selectStart } from './../modules/selectStart'
import { searchStart } from './../modules/searchStart';
import { toggleTheme } from './../modules/toggleTheme';
import { state } from './../states'
import { getStorageObject, setStorageObject } from './../utils';

(() => {

  const isAllCountriesEmpty = !getStorageObject('allCountries')

  const getCountryData = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const jsonData = await response.json();
  
    countryListConstructorInDOM({ countries: jsonData})

    setStorageObject('allCountries', jsonData)
  
    state.allCountries = jsonData
  }

  if(isAllCountriesEmpty) {
    getCountryData()
  } else {
    countryListConstructorInDOM({countries: getStorageObject('allCountries')})
  }
   
  selectStart()
  searchStart()
  
  toggleTheme()
  
  Object.defineProperty(state, "listResult", {
    set: function(value) {
      countryListConstructorInDOM({ countries: value })
    }
  })

  console.log(state)
})()
