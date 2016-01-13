
$(document).ready(init);

var classAdds = ['tasks', 'dates', 'done', 'remove'];
var descr = [];

console.log(moment("20160131", "YYYYMMDD").fromNow());

function init() {
	$('#add').on('click', addItem);
}

function addItem() {
	descr[0] = $('#task').val();
	manipulateDate();
	descr[2] = $('<div class="checkbox"><label><input type="checkbox"> Done</label></div>');
	descr[3] = $('<button type="button" class="btn btn-default" aria-label="Left Align"><span class="glyphicon glyphicon-trash" aria-hidden="true"></span></button>');
	evalEntry();
}

function evalEntry() {
	if ($('#task').val() !== "") {
		appendTask();
	} else {
		alert("Enter a task");
	}
}

function manipulateDate() {
	var $due = $('#due');
	var dateString = $due.val().replace(/-/g,"");
	descr[1] = moment(dateString, "YYYYMMDD").fromNow();
}

function appendTask() {
	var tr = $('<tr>');
	$('tbody').append(tr);
	classAdds.forEach(function(val, i) {
		var $td = $('<td>').addClass(val).append(descr[i]);
		$('tbody > tr:last-child').append($td);
	});
	$('.remove > button').on('click', removeTask); // Duplicate invocations
	$('label :checkbox').on('click', toggleCompleteTask); // Duplicate invocations
}

function removeTask() {
 	$(this).parent().parent().remove(); 
}

function toggleCompleteTask() {
	var $this = $(this);
	if ($this.is(':checked')) {
		$this.closest('.done').parent().addClass('success');
	} else {
		$this.closest('.done').parent().removeClass('success');
	}
}