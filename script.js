//button introduction
let introductionPage = document.getElementById("introductionPage");


var form = document.getElementById("theForm")

var firstPage = document.getElementById("pageOne");
var secondPage = document.getElementById("pageTwo");

firstPage.style.display = "none";
secondPage.style.display = "none";
form.style.display = "none";


introductionPage.addEventListener("click", () => {
  console.log("click");
 
  introductionPage.style.display = "none";

  firstPage.style.display = "block";
  form.style.display = "block";
});

firstPage.addEventListener("click", () => {
  console.log("click");

  firstPage.style.display = "none";


  secondPage.style.display = "block";
});
