console.log('Renderizando desde el mismo servidor de la API')

const unFetch = () => {
  fetch('/users')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
}
