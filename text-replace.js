var x_text = jQuery('.tribe-events-event-url-label');
var x_interval = setInterval(function(){
  console.log('Running');

  if (x_text.html() != "Register" && x_text.length !== 0) {
    x_text.html('Register');
  } else {
		clearInterval(x_interval);
    return;
  }
}, 250);
