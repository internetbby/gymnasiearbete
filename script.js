

//button introduction 

var buttonIntroductionPage = document.querySelector("#buttonIntroductionPage");




buttonIntroductionPage.addEventListener("click", ()=>{
    console.log ("click");
    
    let introductionPage = document.getElementById("introductionPage");

    var element = introductionPage.style; 

    element.display = "none";

    
});