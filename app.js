/*
(function() {
    console.log("Hello world");
}());

function add(n1, n2){
    return n1+n2;
}
*/

//problem one
//solved
function greater(n1, n2){
    if (n1 > n2) {
        console.log(n1);
    } else {
        console.log(n2);
    }
}

//greater();
//problem two
//not solved
function sort(num1, num2, num3) {
            if((num1> num2) && (num2 > num3))
            {
                alert(num1, num2, num3);
            }
            else if ((num2 > num1) && (num1 > num3))
            {
                alert(num2, num1, num3);
            }
            else if  ((num2 > num3) && (num3 > num1))
            {
                alert(num2, num3, num1);
            }
            else if  ((num3 > num1) && (num1 > num2))
            {
                alert(num3, num1, num2);
            }
            else if  ((num3 > num2) && (num2 > num1))
            {
                alert(num3, num2, num1);
            }
            else {
                alert(num1, num3, num2);
            }
}
//sort();
//problem three
//solved
function greatest(n1, n2, n3, n4, n5) {
    var greatest = n1;
    if(n2 > greatest)
            {
                greatest = n2;
            }
            if(n3 > greatest)
            {
                greatest = n3;
            }
        if(n4 > greatest)
            {
                greatest = n4;
            }
        if(n5 > greatest)
            {
                greatest = n5;
            }
    alert(greatest);
}
//greatest();

//problem four
//solved
function oddEvenLoop(){
  for (var i = 0; i <= 15; i++) {
      if (i%2 === 0) {
          console.log(i + " even");
      } else  {
          console.log(i + " odd");
      }
  }
}

//oddEvenLoop();

//problem five
//solved
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
//solved
function thousand(){
    var count = 0;
    for (var i = 1; i <= 1000; i++){
        if (i % 3 === 0) {
            count++;
        }
    }
    console.log(count);
}

//problem seven
/*
function triangle(){
    for (var i = 1; i <= 5; i++) {
        var num = "";
        for (var j = 1; j <= 5-i; j++) {
            num += " ";
        } for (var k = 1; k <= i; k++) {
            num += j;
        }
        console.log(num);
    }
}
*/

function generatePyramid() {
  let number = '';

  for (let i = 1; i <= 5; i++) {
    console.log(number += i +(number));
  }
}










