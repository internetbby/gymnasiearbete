

//button introduction 
var buttonIntroductionPage = document.getElementById("buttonIntroductionPage");
var firstPage = document.getElementById("pageOne"); 

firstPage.style.display= "none";

buttonIntroductionPage.addEventListener("click", ()=>{
    console.log ("click");
    
    let introductionPage = document.getElementById("introductionPage");

    var element = introductionPage.style; 

    element.display = "none";
    firstPage.style.display = "block";

    
});




firstPage.addEventListener("click", ()=>{
    console.log ("click");
    
    let firstPageButtonOne = document.getElementById("pageOneOption1");

    var element = firstPageButtonOne.style; 

    element.display = "none";

    
});

