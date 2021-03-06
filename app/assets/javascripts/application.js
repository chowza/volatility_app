// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery-1.9.1.min
//= require jquery_ujs
//= require jquery.numeric
//= require skrollr
//= require bootstrap

function add_fields(link, association, content) {
  var new_id = new Date().getTime();
  var regexp = new RegExp("new_" + association, "g")
  $(link).parent().before(content.replace(regexp, new_id));
  $(".positive").numeric({ negative: false }, function() { alert("No negative values"); this.value = ""; this.focus(); });
}

function remove_fields(link) {
  $(link).prev("input[type=hidden]").val("1");
  $(link).closest(".assetinputfields").hide();
}

$(document).ready(function(){
	$(document).click(function(event) {
    $("#overlay").css("visibility","hidden"); 
});
});

$(document).ready(function(){
	$("#create-new-port-button").click(function(event) {
   	$("#overlay").css("visibility","visible"); 
   	event.stopPropagation();
});
});

$(document).ready(function(){
  $("#overlay >*").click(function(event) {
    event.stopPropagation();
});
});