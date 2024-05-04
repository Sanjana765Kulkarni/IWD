const notesContainer2 = document.querySelector(".notes-container2");//the things inside the parentheses
const createBtn = document.querySelector(".btn");//btn is ntg but the button and the class name of button in event file
let sticky = document.querySelectorAll(".input-box2");// this is will select all the notes realted to the input-box2 class 

//so the functiton here is to store the data typed by the user in the local storage
function saveSticky(){
    localStorage.setItem("sticky", notesContainer2.innerHTML); //it says that the data in the notesContainer.innerHtml is being stored in the name called the sticky
}//dont get comfused with sticky as it is the name under which the data is stored and sticky is also the name under which the data is being fetched into

createBtn.addEventListener("click", ()=>{
    let inputBox2 = document.createElement("p");//here inputBox is like the variable storing the content which is gonna be written in p
    let img = document.createElement("img");// same as the above
    inputBox2.className = "input-box2"; //you can see that the p tag with this class name "input-box2" is commented in the events.html as we need tht to appear when we click the create button.... so here we are initializing the variable inputBox to the class input-box2 
    inputBox2.setAttribute("contenteditable","true");//contenteditable is an attribute ussed in the commented section of the p tag in events.html -- true says that the content can be editable
    img.src = "assets/delete.png"; // the img variable is loading the image from the source
    notesContainer2.appendChild(inputBox2).appendChild(img);//append child tells us where to append or make this appear
    // in the above code the its creating the para section which we call sticky notes is being created along with the delete image
})

notesContainer2.addEventListener("click",function(del){ //del is like a 3rd party variable
    if(del.target.tagName==="IMG"){ //if the target element named img is clicked 
        del.target.parentElement.remove();
        saveSticky(); // it should remove the parent element meaning the para tag it is created in 
    }
    else if(del.target.tagName === "P"){
            sticky = document.querySelectorAll(".input-box2");// selects all the things written inside the class input-box2
            sticky.forEach(nt => {   //up here is a 3rd var  // as we need it store each and every word in the para 
                nt.onkeyup = function(){ //the on key up is just simply referred to the event when u r taking ur hand off key and it comes up
                    saveSticky();
                }
            })   
    }
})
function showSticky(){
    notesContainer2.innerHTML = localStorage.getItem("sticky");
}
showSticky();
// localStorage.clear();
//localStorage.clear(); is the function used to clear the local storage 
//I found a another glitch 😂😅 in this code too so had to come out with a way to clear out the local storage in ourder to reset the output....

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

/*const notesContainer2 = document.querySelector(".notes-container2");//the things inside the parentheses
const createBtn = document.querySelector(".btn");//btn is ntg but the button and the class name of button in event file
let notes = document.querySelectorAll(".input-box2");// this is will select all the notes realted to the input-box2 class 

createBtn.addEventListener("click", ()=>{
    let inputBox2 = document.createElement("p");//here inputBox is like the variable storing the content which is gonna be written in p
    let img = document.createElement("img");// same as the above
    inputBox2.className = "input-box2"; //you can see that the p tag with this class name "input-box2" is commented in the events.html as we need tht to appear when we click the create button.... so here we are initializing the variable inputBox to the class input-box2 
    inputBox2.setAttribute("contenteditable","true");//contenteditable is an attribute ussed in the commented section of the p tag in events.html -- true says that the content can be editable
    img.src = "assets/delete.png"; // the img variable is loading the image from the source
    notesContainer2.appendChild(inputBox2).appendChild(img);//append child tells us where to append or make this appear
    // in the above code the its creating the para section which we call sticky notes is being created along with the delete image
})*/ 

 /* => is know as a hashrocket or equals greater symbol
 basically used to define a function in javascript
 we can also directly use define keyword at the beginning and define the function
 
 the functions created using the => is called the arrow function*/

 //the code below was a trial to give the line break attribute - to go to next line when the enter key is entered 
 //rather than to do the default function of the enter key to to do its task
 //but mine default key function of enter was no into play so dint add any extra snippet
 /*document.addEventListener("keydown",event => {
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
}) */