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

//problem three
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
function triangle() {
    for(var i=1; i < 6; i++) {
        var output="";
        for(var j=1; j < 6-i; j++) {
            output+=" ";
        }
        for(var k=1; k <= i; k++) {
           output += k;
        }
        for (var m=i-1; m >= 1; m--) {
            output += m;
        }
        console.log(output);
    }
}

//problem eight
function mirror(){
    for(var i=1; i < 6; i++) {
        var output = "";
        for(var j=1; j < 6-i; j++) {
            output +=" ";
        }
        for(var k=1; k <= i; k++) {
           output += k;
        }
        for (var m=i-1; m >= 1; m--) {
            output += m;
        }
        console.log(output);
    }
        for(var i=4; i >=1; i--) {
            var output ="";
            for(var j=3; j > i; j--) {
                output += " ";
            }
            for(var k=4; k >= i; k--) {
                output += k;
            }
            for (var m=i+1; m <= 4; m++) {
                output += m;
            }
             console.log(output);
    }
}


//didnt work
/*
        if (i === 6) {
        for(var r=6; r > 6; r--) {

            output="";
        for(var s=6; s < 6+r; s++) {
            output+=" ";
        }
        for(var t=r-1; t >= r; t--) {
           output += t;
        }
        for (var y=6; y >= 1; y--) {
            output += y;
        }
        }
        }

        */

