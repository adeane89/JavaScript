/*
(function() {
    console.log("Hello world");
}());

function add(n1, n2){
    return n1+n2;
}
*/

//problem one
function greater(n1, n2){
    if (n1 > n2) {
        console.log(n1);
    } else {
        console.log(n2);
    };
};

//problem two
function sort(n1, n2, n3) {
    //if ((n1 > n2) && (n1 > n3)
    var greatest = n1;
    if(n2 > greatest)
            {
                greatest = n2;
            }
            if(n3 > greatest)
            {
                greatest = n3;
            };
    alert(greatest);
};
