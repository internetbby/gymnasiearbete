//button introduction
let introductionPage = document.getElementById("introductionPage");


var form = document.getElementById("theForm")

var firstPage = document.getElementById("pageOne");
var secondPage = document.getElementById("pageTwo");

firstPage.style.display = "none";
secondPage.style.display = "none";
form.style.display = "none";



function clockTimer(pageToHide, pageToShow){//hide clock timer 
  var seconds_left = 10;
var interval = setInterval(function() {
    document.getElementById('clock').innerHTML = --seconds_left;

    if (seconds_left <= 0)
    {
        pageToHide.style.display = "none";
        pageToShow.style.display = "block";
        clearInterval(interval);

    }
}, 1000);


}



introductionPage.addEventListener("click", () => {
  console.log("click");
 
  introductionPage.style.display = "none";

  firstPage.style.display = "block";
  form.style.display = "block";
  
  clockTimer(firstPage,secondPage);

});

firstPage.addEventListener("click", () => {
  console.log("click");

  firstPage.style.display = "none";


  secondPage.style.display = "block";
});


