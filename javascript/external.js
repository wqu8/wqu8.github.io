/*
document.write("Where is my JS code?");
//add external.js
window.alert(5 + 6);
//show up windows alert 11
window.alert('5 + 6');
//show up windows alert 5+6
document.write('<h1>A heading</h1>');
document.write('<p>A sentence.</p>');
//show the content in the corresponding format as h1 and p
const x = "web";
const y = "mapping";
const out = x + y;
document.write(out);
//show webmapping below
// A prompt box is used to prompt users to input a value before entering a page.
user_name = window.prompt("Please enter your name", "Type your name here");
document.write(user_name);
//start caculate
a = 22;
const b = 33;
document.writeln(a + b);
document.writeln("<br>");
document.writeln(a += b);
document.writeln("<br>");
document.writeln(a += b);

document.writeln("<button onclick='condition()'>Conditional Test</button>")
function condition()
{
  x = confirm("Are you sure you want to proceed?");
  if(x)
  {
    document.writeln("You chose Okay!");
  }
  else
  {
    document.writeln("You chose Cancel!");
  }
}
*/
arr = ["Mael","Eric","Randall","James"];
for (var i=0; i < arr.length; i++)
{
  document.writeln(arr[i],"<br>");
}
