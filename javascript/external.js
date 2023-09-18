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
  ["Oil Spill Toolkit", "https://www.glo.texas.gov"],
  ["The Oil Spill Toolkit developed by Enterprise Technology Solutions of The Texas General Land Office is a decision-support resource. This is where I would write my second sentence about the Oil Spill Toolkit. This is where I would write my third sentence about the Oil Spill Toolkit. This is where I would write my fourth sentence about the Oil Spill Toolkit."],
  ["Texas Ecosystems Analytical Mapper", "http://tpwd.texas.gov/gis/team/"],
  ["The Texas Parks and Wildlife's Landscape Ecology program developed this application to deliver the Ecological Mapping Systems of Texas (EMS) data to Texas citizens. This is where I would write my second sentence about the Texas Ecosystems Analytical Mapper. This is where I would write my third sentence about the Texas Ecosystems Analytical Mapper (TEAM)."]
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
function webmap_table() {
  document.write("<table width=100%>");
  for (var row = 0; row < webmaps.length; row++) {
    document.write("<tr>");
    if (row % 2 == 0) { // For even rows (0-based index)
      for (var column = 0; column < webmaps[row].length; column++) {
        document.write("<td>" + webmaps[row][column] + "</td>");
      }
    } else { // For odd rows
      document.write("<td colspan='2'>" + webmaps[row][0] + "</td>");
    }
    document.write("</tr>");
  }
  document.write("</table>");
  return "";
}

function calculateArea() {
  var length = document.getElementById("length").value;
  var width = document.getElementById("width").value;
  var area = length * width;
  document.getElementById("result").innerText = area;
}
/*
function calculateArea() {
  var length = parseFloat(prompt("Input length of the rectangle:"));
  var width = parseFloat(prompt("Input width of the rectangle:"));

  if (isNaN(length) || isNaN(width)) {
    alert("Please enter valid numbers for both length and width.");
    return;
  }

  var area = length * width;
  document.getElementById("result").innerText = area;
}*/
