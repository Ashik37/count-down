// function myFunction(){
//     var text;
//     var time = 10754474774;
//     if (time < 10){
//         alert("Hello! I am an alert box!!");
//     }else{
//         alert("Hello! I am an alert box 333");
//     }
//     document.getElementById("demo").innerHTML = greeting;
// }

// function myFunction(){
//     var al = alert("Hello! I am an alert box 333");
//     if (click){
//     var tt = al;
//     }
//     document.getElementById("demo").innerHTML = greeting;
// }

// function btn(){
//     var text;
//     var myBtn = alert("Hello!");
//     if (click){
//     //text = myBtn;
//     }
// }

var myVar = document.querySelector("h1");

myVar.addEventListener("mouseover", function () {

    myVar.classList.add("my-style");

});
myVar.addEventListener("mouseout", function () {

    myVar.classList.remove("my-style");

});