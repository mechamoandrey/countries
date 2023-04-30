import { countryListConstructor } from './constructors'
import { regionFilter } from './modules/regionFilter'
import { toggleTheme } from './modules/toggleTheme';
import { state } from './states'

const getCountryData = async () => {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const jsonData = await response.json();

  countryListConstructor({ countries: jsonData})

  state.allCountries = jsonData
}

getCountryData()

regionFilter()

toggleTheme()