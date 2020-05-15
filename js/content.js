$.ajaxSetup({async:false});

var getfile = function(filepath) {
  var out_response = "";
  
  $.when( $.get(filepath, $.noop(), "json").done( function(this_response) {
    out_response = this_response;
  }));

  return out_response
}

