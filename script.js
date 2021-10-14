

//button introduction 
var buttonIntroductionPage = document.querySelector("#buttonIntroductionPage");
var page1Button = document.querySelector("#pageOneOption1")
var page2Button = document.querySelector("#pageTwoOption1")

//Add button for every new page in this array

let buttonArray = [buttonIntroductionPage, page1Button, page2Button]

//Add page for every button, should be same length as button array 

let introductionPage = document.getElementById("introductionPage");
let page1 = document.getElementById("pageOne");
let page2 = document.getElementById("pageTwo")

let pageArray = [introductionPage, page1, page2]


for (let i = 0 ; i < buttonArray.length; i++){

    var elementNextPage = pageArray[i+1].style;

    elementNextPage.display = "none";

    buttonArray[i].addEventListener("click", ()=>{
        console.log ("click");
    
        var element = pageArray[i].style; 
    
        element.display = "none";

        elementNextPage.display = "block";

        console.log(buttonArray[i])
        
    });

}

