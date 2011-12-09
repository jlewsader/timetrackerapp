/* Project Time Tracker */
/* Author - J Lewsader */
/* Copyright 2011 */
/* Version 1.0 Beta 1 */
/* http://www.jlewsader.com */

/* About Lightbox */

function displayHideBox(boxNumber)
{
    if(document.getElementById("LightBox"+boxNumber).style.display=="none") {
        document.getElementById("LightBox"+boxNumber).style.display="block";
        document.getElementById("grayBG").style.display="block";
    } else {
        document.getElementById("LightBox"+boxNumber).style.display="none";
        document.getElementById("grayBG").style.display="none";
    }
} 
