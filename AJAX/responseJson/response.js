let div = document.querySelector('#main');
let url = 'http://localhost:3000/data';

fetch(url)
.then( response => response.json())
.then( data => {
  div.innerHTML = Object.entries(data);
})
.catch( error => div.innerHTML = `There was an error: ${error}`);
