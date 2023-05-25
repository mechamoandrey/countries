var fs = require('fs');
const fetch = require("node-fetch");
const handlebars = require('handlebars');


const createFolder = async (path) => {
  fs.mkdir(path, { recursive: true }, (err) => {
    if (err) throw err;
  });
}

const fetchData = async () => {
  const response = await fetch(`https://restcountries.com/v3.1/all`);
  const json = await response.json();

  json.forEach(async data => {
    const pageInformation = {
      title: data.name.common,
      image: data.flags.svg,
      population: data.population,
      region: data.region,
      subregion: data.subregion,
      capital: data.capital,
      nativeName: data.name.official,
      altImage: data.flags.alt
    };

    const path = `${__dirname}/../src/countries/${data.name.common.replace(/ /g, '-').toLowerCase()}`
    
    await createFolder(path)

    fs.readFile(`${__dirname}/template.hbs`, 'utf8', (err, source) => {
      if (err) throw err;
      
      // Compila o template
      const template = handlebars.compile(source);
    
      // Renderiza o template com os dados
      const result = template(pageInformation);
    
      // Escreve o resultado em um novo arquivo
      fs.writeFile(`${path}/index.html`, result, 'utf8', (err) => {
        if (err) throw err;
        console.log('Arquivo criado com sucesso!');
      });
    });
  });
}

fetchData()