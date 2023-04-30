const fs = require('fs');
const handlebars = require('handlebars');

// Dados para o template
const data = {
  title: 'Meu Site',
  heading: 'Bem-vindo ao Meu Site',
  content: 'Este é um exemplo de como escrever arquivos por um template no Node.js.'
};

// Carrega o arquivo de template
fs.readFile('template.hbs', 'utf8', (err, source) => {
  if (err) throw err;
  
  // Compila o template
  const template = handlebars.compile(source);

  // Renderiza o template com os dados
  const result = template(data);

  // Escreve o resultado em um novo arquivo
  fs.writeFile('index.html', result, 'utf8', (err) => {
    if (err) throw err;
    console.log('Arquivo criado com sucesso!');
  });
});