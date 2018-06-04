//An example of a request object
let url = "http://localhost:3000/data";
let obj = {
  method: 'GET',
  mode: 'cors',
  redirect: 'follow',
  cache: 'no-cache'
};

let request = new Request(url, obj);

fetch(request)
.then( response => {
  let div = document.querySelector('#main');
  div.innerHTML = `Status: ${response.status} ${response.ok} ${response.statusText}`;
});
