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

arr = ["Mael","Eric","Randall","James"];
for (var i=0; i < arr.length; i++)
{
  document.writeln(arr[i],"<br>");
}
*/
// Prompt the user for their name
/*
const userName = prompt("Please enter your name:", "");

// Check if they entered a value
if (userName) {
    // Insert the user's name into the header
    document.getElementById('userName').textContent = userName;
} else {
    // If they didn't enter a name, use a default value
    document.getElementById('userName').textContent = "guest";
}
*/
var webmaps =
[
  ["oil spill toolkit", "https://www.glo.texas.gov", "The oil spill toolkit developed by Enterprise Technology Solutions is neat."],
  ["Texas Ecosystems Analytical Mapper", "http://tpwd.texas.gov/gis/team/", "The Texas Parks and Wildlife's Landscape Ecology program is great."]
];


function welcome()
{
let a = "Please enter your name."; let b = "Type your name here.";

// A prompt box is used to prompt users to input a value before entering a page.
user_name = window.prompt(a, b);

message = "<h1>Hello, welcome to my webpage, " + user_name + "!</h1>"

return message
}
document.write(welcome());
/*document.write(message);*/
function webmap_table()
{
  document.write("<table width=100%>");
  for (var row=0; row < webmaps.length; row++)
  {
    document.write("<tr>");
    for (var column=0; column < webmaps[0].length; column++)
    {
      document.write("<td>" + webmaps[row][column] + "</td>");
    }
    document.write("</tr>");
  }
  document.write("</table>");
  return "";
}
