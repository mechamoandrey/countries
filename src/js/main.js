import { countryListConstructor } from './constructors'
import { regionFilter } from './modules/regionFilter'
import { search } from './modules/search';
import { toggleTheme } from './modules/toggleTheme';
import { state } from './states'
import { setStorageObject } from './utils';

(() => {
  const getCountryData = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const jsonData = await response.json();
  
    countryListConstructor({ countries: jsonData})
  
    setStorageObject({ key: 'allCountries', object: jsonData })
  
    state.allCountries = jsonData

    countryListConstructor({ countries: state.allCountries})
  }
  
  getCountryData()
   
  regionFilter()
  
  toggleTheme()
  
  search()

  Object.defineProperty(state, "listResult", {
    set: function(value) {
      countryListConstructor({ countries: value })
    }
  });  
})()
