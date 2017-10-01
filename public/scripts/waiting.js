$(function() {

  function matchMaking() {

    $.ajax({
      url: "/gops/qwdw",
      type: 'POST',
      data: input,
      success: function(hey) {
        alert(hey);
      }
    });

  }

});
