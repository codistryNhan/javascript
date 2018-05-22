const clickParagraph = document.getElementById('click');

clickParagraph.addEventListener('click', () => console.log('click'));
clickParagraph.addEventListener('mousedown', () => console.log('down'));
clickParagraph.addEventListener('mouseup', () => console.log('up'));

const dblclickParagraph = document.getElementById('dblclick');

dblclickParagraph.addEventListener('dblclick', highlight);

const mouseParagraph = document.getElementById('mouse');

mouseParagraph.addEventListener('mouseover', highlight);
mouseParagraph.addEventListener('mouseout', highlight);

addEventListener('keydown', highlight);
addEventListener('keyup', () => { console.log(`You stopped pressing the key on ${new Date}`)});
addEventListener('keypress', (e) => {console.log(`You pressed ${e.key}`)});

addEventListener('keydown', (e) => {
  if(e.key === 'c' && e.ctrlKey){
    console.log('Action cancelled!');
  }
});

const onceParagraph = document.getElementById('once');

onceParagraph.addEventListener('click', remove);

const ulElement = document.getElementById('list');
const liElement = document.querySelector('#list li');

ulElement.addEventListener('click', (e) => {
  console.log('clicked on UL');
}, true);

ulElement.addEventListener('click', highlight);

liElement.addEventListener('click', (e)=>{
  console.log('Cicked on Li');
}, true )



function remove(e){
  console.log('Enjoy this while it lasts!');
  onceParagraph.style.backgroundColor = 'pink';
  onceParagraph.removeEventListener('click', remove);
}

function highlight(e){
   e.target.classList.toggle('highlight');
}
