//JavaSripty Types

//Number
var number = 10;
var aFloat = 10.0;
var ten = parseInt("10", 10);
var tenFloat = parseFloat("10.0", 10);
var a = + "4";

//String
var s = "dummy";
out(s);
out(s.length);
out(s.charAt(1));
out(s.indexOf("u"));
out(s.lastIndexOf("y"));
out(s.startsWith("d"));
out(s.endsWith("y"));
out(s.includes("m"));


//Boolean
// true or false
// false, 0, empty string "", NaN, null and undefined all represent false.
// everything else is true
var bool = false;
var bool2 = Boolean(false);

//Objects

//Null
//When a value is deliberately empty;

var b = null;

//Undefined
//When a value is not assigned yet;
var c;

function out(string){
  console.log(string);
}
