let textButton = document.getElementById('number');
let apiButton = document.getElementById('chuck');
let outputDiv = document.getElementById('output');

let textURL = 'http://numbersapi.com/random';
let apiURL = 'https://api.chucknorris.io/jokes/random';

textButton.addEventListener('click', () => {
  fetch(textURL)
  .then( response => {
    outputDiv.innerHTML = 'Waiting for response...';
    if(response.ok) {
      return response;
    }
    throw Error(response.statusText);
  })
  .then( response => response.text() )
  .then( text => outputDiv.innerText = text )
  .catch( error => console.log('There was an error:', error))
}, false);

apiButton.addEventListener('click', () => {
  fetch(apiURL)
  .then( response => {
    outputDiv.innerText = 'Waiting for response...';
    if(response.ok) {
      return response;
    }
    throw Error(response.statusText);
  })
  .then( response => response.json() )
  .then( data => outputDiv.innerText = data.value )
  .catch( error => console.log('There was an error:', error) )
}, false);
