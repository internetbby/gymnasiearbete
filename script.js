

//button introduction 
var buttonIntroductionPage = document.querySelector("#buttonIntroductionPage");
var page1Button = document.querySelector("#pageOneOption1")
var page2Button = document.querySelector("#pageTwoOption1")

//Add button for every new page in this array

let buttonArray = [buttonIntroductigonPage, page1Button, page2Button]

//Add page for every button, should be same length as button array 

let introductionPage = document.getElementById("introductionPage");
let page1 = document.getElementById("pageOne");
let page2 = document.getElementById("pageTwo");

let pageArray = [introductionPage, page1, page2]

document.addEventListener('click', function (event){
    let pageYouAreOn = 0; 

    console.log("click")

    if(event.target.matches(".hidden")){
        console.log("click")
        pageYouAreOn++;
        page1.classList.Add("shown")
        page1.classList.remove ("hidden");
    }

})


//Issue is that when the code plays on load, the for loops play. it should be while youre clicking it is playing

/*for (let i = 0 ; i < buttonArray.length; i++){


        console.log(buttonArray[i])
    buttonArray[i].addEventListener("click", ()=>{
        console.log ("click");
    
        if(buttonArray[1].style.display != "none"){

            pageArray[i].style.display = "none"; 

            pageArray[i+1].style.display = "block";


        }
        
        
    });*/


