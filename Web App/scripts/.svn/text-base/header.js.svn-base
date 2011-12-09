/* Project Time Tracker */
/* Author - J Lewsader */
/* Copyright 2011 */
/* http://www.jlewsader.com */

// Editable Project Title saves into local storage
$(function() {
  
  var projectTitle = document.getElementById('projectTitle');
  var setButton = document.getElementById('set');

  
  $(set).click(function() {
	  if (title.value == ""){
		  alert('No Title Set')
	  }
	  else {		  
    localStorage.setItem('projectName', title.value);
		window.location.href = sURL;
		window.location.replace( sURL );
		window.location.reload( false );
	  }
  });
  
  // when the page loads
  if ( localStorage.getItem('projectName') ) {
    projectTitle.innerHTML = "<h1>" + localStorage.getItem('projectName') + "</h1>";
	setButton.style.display = 'none';
  }

});
