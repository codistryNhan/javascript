var out = function(string){
  console.log(string);
}

var today = new Date();

out(today);
out("Today's date:" + today.getDate());
out("This month: " + today.getMonth());
out("Year: " + today.getFullYear());

//Calculating elapsed time
var start = Date.now();

for(var i = 0; i<1000000; i++);

var end = Date.now();

var elapsed = end - start;
out(elapsed);
