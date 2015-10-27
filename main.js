$(document).ready(function(){

var dataURL = 'http://json-data.herokuapp.com/forms';

$.ajax({
  url: dataURL,
  method: 'get',
  dataType: 'json',
}).then (function (formData) {

var data = formData.map(function(item){
		return {
			fieldType: item.type,
			fieldLabel: item.label,
	    fieldId: item.id,
			fieldIcon: item.icon
		};
		});

	var fieldData = {
		formData: data
	};

	var formTemplate = $("#formTemplate").text();
	var formHTML = Mustache.render(formTemplate, fieldData);
	$("#form").html(formHTML);


  });

});
