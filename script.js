//here we have to create variables for input field and button
// i,e of id=input-box

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

//the function is to be performed when the user clicks on the add button
function addTask(){
    if(inputBox.value === ''){
        alert("brethren ur list is empty like your brain");
    }
    else{
        let li = document.createElement("li");//it is creating the html ele li with tag name li and storing it in the var name li
        li.innerHTML = inputBox.value;//innerHTML is the text inside the li
        listContainer.appendChild(li);//it tells where this should be displayed so here under the ul class nameed as list-container
        let span = document.createElement("span");// it will create the html ele span with tag name span and store it the var named span
        span.innerHTML="\u00d7";//to print the cross mark
        li.appendChild(span);//this will tell were it should be printed
    }
    inputBox.value="";//works with '' also
    dataSave();
}

//to delete the list when clicked on the cross 
// and also to check the list when the user thinks its done
listContainer.addEventListener("click",function(eraseOrCheck){
    if(eraseOrCheck.target.tagName === "LI"){ //the li and span should be in caps to work
        eraseOrCheck.target.classList.toggle("checked");//the toggle itself says it when it is not sticked and box-checked it will make the box checked 
        dataSave();
    }
    else if(eraseOrCheck.target.tagName === "SPAN"){
        eraseOrCheck.target.parentElement.remove();// parent element is li
        dataSave();
    }
},false);

//this function is to save the contents or the data entered by the user to the local storage of the webpage
function dataSave(){
    localStorage.setItem("data",  listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();