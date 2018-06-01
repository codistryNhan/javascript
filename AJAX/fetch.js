let url = 'http://localhost:3000';

fetch(url)
.then( response => {
  let div = document.querySelector('#fetchStatus');
  let html =
  `<ul>
    <li>Response Status: ${response.status} </li>
    <li>Response OK: ${response.ok} </li>
    <li>Status Text: ${response.statusText} </li>
    <li>URL: ${response.url} </li>
    <li>Type: ${response.type} </li>
  </ul>
  `;
  div.innerHTML = html;
})
