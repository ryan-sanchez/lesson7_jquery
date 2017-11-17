/*
Program Name: Recipe Display Application
Author: Ryan Sanchez
Date: November 17, 2017
Filename: script.js
*/
/* global $ */

//displays the next element after the current target
function display(event) {
 $(event.currentTarget).next().fadeIn();
}//end of display

//attach event listener to h3 elements to invoke display function when clicked
$("h3").click(display);

