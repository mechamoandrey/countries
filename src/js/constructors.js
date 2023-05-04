export const countryListConstructorInDOM = ({ countries }) => {
  const countryList = document.querySelector('._countryList')
  
  countryList.innerHTML = ''

  countries.map(country => {
    const isCapitalExist = country.capital
    const capitalName = isCapitalExist ? country.capital.toString() : 'Not Exist' 
    const image = country.flags.svg
    const descriptionImage = country.flags.alt
    const pageLink = country.name.common.replaceAll(' ', '-').toLowerCase()
  
    const _html = `
      <li class="card">
        <a href="/countries/${pageLink}/index.html">
          <img 
            class="card__image" 
            src="${image}"
            alt="${descriptionImage}" 
          /> 
            
          <div class="card__content">
            <h2 class="card__title">${country.name.common}</h2>
            <p class="card__info">
              <strong>Population:</strong> ${country.population}
            </p>
            <p class="card__info">
              <strong>Region:</strong> ${country.region}
            </p>
            <p class="card__info">
              <strong>Capital:</strong> ${capitalName}
            </p>
          </div>
        </a>
      </li>
    `

    countryList.insertAdjacentHTML("beforeend", _html)
  })
}