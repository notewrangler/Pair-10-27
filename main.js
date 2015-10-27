$(document).ready(function(){

var dataURL = 'http://json-data.herokuapp.com/forms';

$.ajax({
  url: dataURL,
  method: 'get'
  dataType: 'json',
}).then (function (formData) {

	var fieldData = {
		formData: formData
	};

	var formTemplate = $("#formTemplate").text();
	var formHTML = Mustache.render(formTemplate, forData);


});