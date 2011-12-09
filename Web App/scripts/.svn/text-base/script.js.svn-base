/* Project Time Tracker */
/* Author - J Lewsader */
/* Copyright 2011 */
/* http://www.jlewsader.com */


		var Times = {
			index: window.localStorage.getItem("Times:index"),
			$table: document.getElementById("times-table"),
			$form: document.getElementById("times-form"),
			$button_save: document.getElementById("times-op-save"),
			$button_discard: document.getElementById("times-op-discard"),

			init: function() {
				// initialize storage index
				if (!Times.index) {
					window.localStorage.setItem("Times:index", Times.index = 1);
				}

				// initialize form
				Times.$form.reset();
				Times.$button_discard.addEventListener("click", function(event) {
					Times.$form.reset();
					Times.$form.id_entry.value = 0;
				}, true);
				Times.$form.addEventListener("submit", function(event) {
					var entry = {
						id: parseInt(this.id_entry.value),
						date: this.date.value,
						hours: this.hours.value,
						task: this.task.value
					};
					if (entry.id == 0) { // add
						Times.storeAdd(entry);
						Times.tableAdd(entry);
					}
						window.location.href = sURL;
						window.location.replace( sURL );
						window.location.reload( false );

					this.reset();
					this.id_entry.value = 0;
					event.preventDefault();
				}, true);

				// initialize table
				if (window.localStorage.length - 1) {
					var Times_list = [], i, key;
					for (i = 0; i < window.localStorage.length; i++) {
						key = window.localStorage.key(i);
						if (/Times:\d+/.test(key)) {
							Times_list.push(JSON.parse(window.localStorage.getItem(key)));
						}
					}

					if (Times_list.length) {
						Times_list
							.sort(function(a, b) {
								return a.id < b.id ? -1 : (a.id > b.id ? 1 : 0);
							})
							.forEach(Times.tableAdd);
					}
				}
				Times.$table.addEventListener("click", function(event) {
					var op = event.target.getAttribute("data-op");
						if (/edit|remove/.test(op)) {
						var entry = JSON.parse(window.localStorage.getItem("Times:"+ event.target.getAttribute("data-id")));
						if (op == "edit") {
							Times.$form.date.value = entry.date;
							Times.$form.hours.value = entry.hours;
							Times.$form.task.value = entry.task;
							Times.$form.id_entry.value = entry.id;
						}
						else if (op == "remove") {
							if (confirm('Are you sure you want to remove this entry?')) {
								Times.storeRemove(entry);
								Times.tableRemove(entry);
							}
							window.location.href = sURL;
							window.location.replace( sURL );
							window.location.reload( false );

						}
						event.preventDefault();
					}
				}, true);
			},

			storeAdd: function(entry) {
				entry.id = Times.index;
				window.localStorage.setItem("Times:index", ++Times.index);
				window.localStorage.setItem("Times:"+ entry.id, JSON.stringify(entry));
			},
			storeEdit: function(entry) {
				window.localStorage.setItem("Times:"+ entry.id, JSON.stringify(entry));
			},
			storeRemove: function(entry) {
				window.localStorage.removeItem("Times:"+ entry.id);
			},

			tableAdd: function(entry) {
				var $tr = document.createElement("tr"), $td, key;
				for (key in entry) {
					if (entry.hasOwnProperty(key)) {
						$td = document.createElement("td");
						$td.appendChild(document.createTextNode(entry[key]));
						$tr.appendChild($td);
					}
				}
				$td = document.createElement("td");
				$td.innerHTML = '<a data-op="edit" data-id="'+ entry.id +'">Edit</a> &nbsp;|&nbsp; <a data-op="remove" data-id="'+ entry.id +'">Remove</a>';
				$tr.appendChild($td);
				$tr.setAttribute("id", "entry-"+ entry.id);
				Times.$table.appendChild($tr);
			},
			tableEdit: function(entry) {
				var $tr = document.getElementById("entry-"+ entry.id), $td, key;
				$tr.innerHTML = "";
				for (key in entry) {
					if (entry.hasOwnProperty(key)) {
						$td = document.createElement("td");
						$td.appendChild(document.createTextNode(entry[key]));
						$tr.appendChild($td);
					}
				}
				$td = document.createElement("td");
				$td.innerHTML = '<a data-op="edit" data-id="'+ entry.id +'">Edit</a> | <a data-op="remove" data-id="'+ entry.id +'">Remove</a>';
				$tr.appendChild($td);
			},
			tableRemove: function(entry) {
				Times.$table.removeChild(document.getElementById("entry-"+ entry.id));
			}
								
		};
		

				// Clear Button (Clear localStorage and refresh page to clear table data)
		var sURL = unescape(window.location.pathname);

		function clearstorage()
                                {
                                	localStorage.clear();
									window.location.href = sURL;
									window.location.replace( sURL );
									window.location.reload( false );
                                }

		Times.init();
		
//these will hold the totals
var tot = 0;

//reference the rows you want to add
//this will not include the header row
var rows = $("#times-table tr:gt(0)");
rows.children("td:nth-child(3)").each(function() {
    //each time we add the cell to the total
    tot += parseInt($(this).html());
});

//then output them to the elements
$("#total").html(tot);

		
		