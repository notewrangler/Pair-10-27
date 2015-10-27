$(document).ready(function(){

var dataURL = 'http://json-data.herokuapp.com/forms';

$.ajax({
  url: dataURL,
  method: 'get',
  dataType: 'json',
}).then (function (formData) {

// var data = formData.map(function(item){
// 		return {
// 			type: item.type,
// 			label: item.label,
// 	    id: item.id,
// 			icon: item.icon,
//       options: item.options,
//       value: item.options.value,
//       optionLabel: item.options.label
// 		};
// 		});

	var fieldData = {
		formData: formData
	};

	var formTemplate = $("#formTemplate").text();
	var formHTML = Mustache.render(formTemplate, fieldData);
	$("#form").html(formHTML);


  });

});
