const form = document.forms['hero'];

form.addEventListener('submit', makeHero, false);

function validate(e){
  const firstLetter = form.heroName.value[0];
  if(firstLetter.toUpperCase() === 'X'){
    event.preventDefault();
    alert('Your name is not allowed to start with X!');
  }
}

function makeHero(e){
  e.preventDefault();

  const hero = {};

  hero.name = form.heroName.value;
  hero.realName = form.realName.value;
  hero.powers = [...form.powers].filter(box => box.checked).map(box => box.value);
  hero.age = form.age.value;
  hero.city = form.city.value;
  hero.origin = form.origin.value;

  alert(JSON.stringify(hero));
  return hero;
}

const label = form.querySelector('label');
const error = document.createElement('div');
error.classList.add('error');
error.textContent = '! your name is not allowed to start with X.';
label.append(error);

form.heroName.addEventListener('keyup', validateInline, false);

function validateInline(){
  const heroName = this.value.toUpperCase();
  if(heroName.startsWith('X')){
    error.style.display = 'block';
  } else {
    error.style.display = 'none';
  }
}

//Input Fields
  //Text
  //<input type="text" >

  //Password
  //Just like input text, but characters are hidden
  //<input type="password"

  //Checkbox
  //<input type="checkbox" name="powers" value="Flight">

  //Radio
  //<input type="radio" name="category" value="Hero">
  //Radio input has a boolean property of checked

  //Hidden input fields
    //Input fields with type="hidden"
    //Not displayed by the browser
    //But have a value attibute that can contain information

  //File Input fields
    //Input fields with type="file"
    //used to upload files
