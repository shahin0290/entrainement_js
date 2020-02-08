//Statement 
document.getElementById("demotest").innerHTML = "Hello Dolly.";

//Varable
var price1 = 5;
var price2 = 6;
var total = price1 + price2;
document.getElementById("demoVariable").innerHTML =
"The total is: " + total;

//Variable2
var carName = "Volvo";
document.getElementById("variables").innerHTML = carName; 

//operator
var txt1 = "John";
var txt2 = "Doe";
document.getElementById("operator").innerHTML = txt1 + " " + txt2;

//operator +=
txt1 = "What a very ";
txt1 += "nice day";
document.getElementById("operator1").innerHTML = txt1;

//Object
var person = {
  firstName : "John",
  lastName  : "Doe",
  age     : 50,
  eyeColor  : "blue"
};

document.getElementById("object").innerHTML =
person.firstName + " is " + person.age + " years old and " + person.eyeColor + " eyes." ;

//Functions
var x = myFunction(4, 3);
var y = myFunction1(4, 3);

document.getElementById("functionTest").innerHTML = x;
document.getElementById("functionTest1").innerHTML = y;

function myFunction(a, b) {
    return a * b;
}

function myFunction1(a, b) {
    return a + b;
}