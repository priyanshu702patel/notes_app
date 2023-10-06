let createbtn = document.querySelector("#btn");
let notescontainer = document.querySelector(".notes-container");
let notes = document.querySelectorAll(".input-box");


function updatestorage() {
    localStorage.setItem("notes", notescontainer.innerHTML);
}

createbtn.addEventListener("click", ()=>
{
    let inputbox = document.createElement("p");
    let img = document.createElement("img");
    
    inputbox.className = "input-box";
    inputbox.setAttribute("contenteditable", "true");
    
    img.className = "delete-btn";
    img.src = "delete.png";
    
    notescontainer.appendChild(inputbox).appendChild(img);
    // The appendChild() method in JavaScript is used to append a new child
    // element at the end of a parent element
    // so img inputbox mei append hoga and inputbox notescontainer mei
    
})


notescontainer.addEventListener("click", function(e) {
    if(e.target.tagName === "IMG")
    {
        e.target.parentElement.remove();
        localStorage.removeItem("notes"); // this will delete from local storage also 
        updatestorage();
    }

    else if(e.target.tagName === "P")
    {
        notes = document.querySelectorAll(".input-box");
        notes.forEach (nt => {
            nt.onkeyup = function (){
                updatestorage();
            }
        })
    }
})

/*  explanation of above code 
This code adds an event listener to an HTML element with the id or class name "notescontainer."
It listens for the "click" event on any child elements within the "notescontainer."
When a click event occurs, it executes the provided function.

Here's a step-by-step explanation of the code:

1. notescontainer.addEventListener("click", function(e) { ... }): This line attaches a
"click" event listener to the HTML element with the id or class name "notescontainer."
When a click event happens inside this container, the function inside the second argument
is executed.

2. function(e) { ... }: This is an anonymous function (a function without a name) that
takes an event object e as its parameter. The e object contains information about the click
event.

3. if (e.target.tagName === "IMG") { ... }: Inside the function, it checks if the target of
the click event (e.target) is an HTML <img> element. It does this by comparing the tag name
of the target element to the string "IMG."

4. e.target.parentElement.remove();: If the clicked element is an <img>, it proceeds to
remove its parent element. This effectively removes the entire container or element that wraps
the image. It assumes that the parent of the image contains the element you want to remove.

5. In summary, this code listens for clicks inside the "notescontainer." If a click occurs
on an <img> element inside the container, it removes the parent element (which likely
contains the <img>). This is a common way to implement functionality to delete or remove
elements in a web page interface, such as removing a note when an image (possibly a delete button)
within the note is clicked. */

/*
// explanation of onkeyup event hander  **********************************
    nt.onkeyup = function () { ... }: For each "input-box" element, it assigns an "onkeyup"
    event handler. This means that when a user releases a key after typing in one of these 
    input boxes, the function specified in the callback will be executed.
*/


// to show the data when ever you reload the page
function showdata()
{
    notescontainer.innerHTML = localStorage.getItem("notes");
}
showdata();
