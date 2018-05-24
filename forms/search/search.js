//Accessing Forms
  //Use document.forms
  //Returns all forms in a document in an array
  const form = document.forms[0];

  //Or
  const form1 = document.forms.search;
  const form2 = document.forms['search'];

  //A form object has a method 'element' that returns all form control elements of the form
  const [input, button] = form.elements;

  //We can also access elements through their attribute name
  //const input1 = form['searchInput'];

//Form Properties and Methods
  //Submit Reset Action

  //Submit
    //Will not trigger 'submit' event
    //form.submit()

  //Or use button or input element
    //<button type="submit">Submit</button>
    //<input type="submit" value="Submit" />
    //<input type="image" src="button.jpg "/>

  //Reset
    //form.reset();
    //or
    //<button type="reset">Reset</button>

  //Action
    //form.action to set acton for form

//Form Events
  //Focus
  //focus event occurs when an element is focused on, when you click on the element.
  //input.addEventListener('focus', () => { alert('focused'); }, false);

  //Blur
  //blur event occurs when you focus away from the element
  //input.addEventListener('blur', () => { alert('blurred'); }, false);

  //Change
  //Change occurs when your blur the element but also change its value
  //input.addEventListener('change', () => { alert('changed'); }, false);

//Form Submit and value property
  form.addEventListener('submit', search, false);

  //use the value property to show element's values
  input.value = 'Search Here';

  input.addEventListener('focus', function(){
    if(input.value === 'Search Here'){
      input.value = '';
    }
  }, false);

  input.addEventListener('blur', function(){
    if(input.value === ''){
      input.value = 'Search Here';
    }
  }, false);

  function search(e){
    alert(`Input: ${input.value}`);
    e.preventDefault();
  }

  //Form Control
