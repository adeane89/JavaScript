//problem one
function greater(n1, n2){
    if (n1 > n2) {
        console.log(n1);
    } else {
        console.log(n2);
    }
}

//problem two
function sort(num1, num2, num3) {
            if(num1 > num2 && num2 > num3)
            {
                alert(num1 + ", " + num2 + ", " + num3);
            }
            else if (num2 > num1 && num1 > num3)
            {
                alert(num2 + ", " + num1 + ", "+ num3);
            }
            else if  (num2 > num3 && num3 > num1)
            {
                alert(num2 + ", "+ num3 + ", "+  num1);
            }
            else if  (num3 > num1 && num1 > num2)
            {
                alert(num3 + ", "  +num1 + ", " + num2);
            }
            else if  (num3 > num2 && num2 > num1)
            {
                alert(num3 + ", "+ num2 + ", " +num1);
            }
            else {
                alert(num1 + ", " +num3 + ", "+  num2);
            }
}
//problem two better
//numbers = [a,b,c];
//numbers = numbers.sort()
//alert(numbers);
//need helper function

//problem three
function greatest(n1, n2, n3, n4, n5) {
    var greatest = n1;
        if(n2 > greatest) {
                greatest = n2;
            }
        if(n3 > greatest) {
                greatest = n3;
            }
        if(n4 > greatest) {
                greatest = n4;
            }
        if(n5 > greatest) {
                greatest = n5;
            }
    alert(greatest);
}

//problem four
function oddEvenLoop(){
  for (var i = 0; i <= 15; i++) {
      if (i%2 === 0) {
          console.log(i + " even");
      } else  {
          console.log(i + " odd");
      }
  }
}

//problem five
function fizzBuzz(){
            for (var i = 1; i <= 100; i++) {
                if (i % 15 === 0) {
                     console.log("FizzBuzz");
                } else if
                    (i % 5 === 0) {
                     console.log("Buzz");
                } else if
                    (i % 3 === 0) {
                    console.log("Fizz");
                } else {
                    console.log(i);
                }
    }
}

//problem six
function thousand(upperBound){
    if(upperBound === undefined){
        upperBound = 1000;
    }

    var count = 0;
    for (var i = 1; i <= upperBound; i++){
        if (i % 3 == 0) {
            count++;
        }
    }
    console.log(count);
}

//problem seven
function triangle(maxWidth) {
    if (!maxWidth){
        maxWidth = 5;
    }
    for(var i=1; i <= maxWidth; i++) {
        var output="";
        for(var j=0; j < maxWidth-i; j++) {
            output+=" ";
        }
        for(var k=1; k < i; k++) {
           output += k;
        }
        for (var m=i; m >= 1; m--) {
            output += m;
        }
        console.log(output);
    }
}

//problem eight
function mirror(maxWidth){
    if (!maxWidth){
        maxWidth = 5;
    }
    for(var i=1; i <= maxWidth; i++) {
        var output = "";
        for(var j=0; j < maxWidth-i; j++) {
            output +=" ";
        }
        for(var k=1; k < i; k++) {
           output += k;
        }
        for (var m=i; m >= 1; m--) {
            output += m;
        }
        console.log(output);
    }
    //only need to change the outer loop to decrement
        for(var i=maxWidth-1; i > 0; i--) {
              var output = "";
            for(var j=0; j < maxWidth-i; j++) {
                output +=" ";
            }
            for(var k=1; k < i; k++) {
               output += k;
            }
            for (var m=i; m >= 1; m--) {
                output += m;
            }
                 console.log(output);
    }
}

/*
var randomPerson = {
    name: "Jess",
    age: 31,
    gender: "female"
}

var employee = {
    name: "Jess",
    idnumber: 0,
    title: "Teacher",
    login: function() {this.idnumber = this.idnumber + this.name;}
}

var serializedEmployee = JSON.stringify(employee)
var deserializedEmployee = JSON.parse(serializedEmployee);

var req = new XMLHttpRequest();
req.onload = function(event) {
		deserializedEmployee = JSON.parse(event.currentTarget.response);
		console.log('employee loaded') }

req.open("GET", employee.json);
req.send()
*/

document.onkeypress = function() {
    console.log("Key pressed");
    if (document.getElementsByTagName("body")[0].style.backgroundColor === "red") {
       document.getElementsByTagName("body")[0].style.backgroundColor = "green";
  } else {
      document.getElementsByTagName("body")[0].style.backgroundColor = "red";
  } if (document.getElementsByTagName("h1")[0].style.color === "white") {
       document.getElementsByTagName("h1")[0].style.color = "yellow";
  } else {
      document.getElementsByTagName("h1")[0].style.color = "white";
  }
}

//codewars problem
function abbrevName(name){
  return name.split(" ").pop().join(".");
}










