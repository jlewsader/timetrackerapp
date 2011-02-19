/* Project Time Tracker */
/* Author - J Lewsader */
/* Copyright 2011 */
/* Version 1.0 Beta 1 */
/* http://www.jlewsader.com */

// Editable Project Title saves into local storage
$(function() {
  
  var edit = document.getElementById('edit');
  
  $(edit).blur(function() {
    localStorage.setItem('todoData', this.innerHTML);
  });
  
  // when the page loads
  if ( localStorage.getItem('todoData') ) {
    edit.innerHTML = localStorage.getItem('todoData');
  }

});
