
$(document).ready(init);

var classAdds = ['tasks', 'dates', 'done', 'remove'];
var descr = [];


function init() {
	$('#add').on('click', addItem);
	$('.remove').on('click', removeTask);
}

function addItem() {
	descr[0] = $('#task').val();
	descr[1] = $('#due').val();
	descr[2] = $('<div class="checkbox"><label><input type="checkbox"> Done</label></div>');
	descr[3] = $('<button type="button" class="btn btn-default" aria-label="Left Align"><span class="glyphicon glyphicon-trash" aria-hidden="true"></span></button>');
	appendTask();
}

function appendTask() {
	var tr = $('<tr>');
	$('tbody').append(tr);
	classAdds.forEach(function(val, i) {
		var $td = $('<td>').addClass(val).append(descr[i]);
		$('tbody > tr:last-child').append($td);
	});
}

function removeTask() {
	$this = $(this);
 
}