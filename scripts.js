/*
    File: scripts.js
    Author: Casey Chin

    Creates classes in create.html and displays them in main.html
*/

// allowdrop, prevents default browser action
function allowDrop(ev) {
    ev.preventDefault();
  }

// drag function to transfer id
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
// drop function, intakes transferred data and appends object into parent
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }

function showDescription() {
    

}