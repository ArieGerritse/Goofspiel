//For when the window closes, ask if forfight
$(window).on("beforeunload", function() {
  return inFormOrLink ? "Do you really want to close?" : null;
});

window.onbeforeunload = function(evt) {
  var message = 'Did you remember to download your form?';
  if (typeof evt == 'undefined') {
    evt = window.event;
  }
  if (evt) {
    evt.returnValue = message;
  }

  return message;
};



//should only have view function, what it gets back from server
