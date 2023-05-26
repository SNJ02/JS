var globals = {
    count: 0,
    createdElements: []
};

/**
 * function to add user chosen HTML Element to document
 */
function addHTMLElement(){
    let element;
    let userInput;
    let addDiv;
    addDiv = document.getElementById("addHere");
    userInput = document.getElementById("userInput");
    element = document.createElement(""+userInput.value);
    element.setAttribute("id", globals.count);
    globals.count ++;
    globals.createdElements.push(element);
    addDiv.appendChild(element);
}

/**
 * function that starts all the other functions
 */
function run(){

}

/**
 * eventlistener that waits for the Dom to load
 */
document.addEventListener("DOMContentLoaded", function() {
    run();
})