$(function() {

  let add_to_matchmaking = {

    player: 10

  };

  let player = $('.player_id').text();

  $.ajax({
    url: "/wait",
    type: 'POST',
    data: add_to_matchmaking
  });



  setInterval(function() {

    $.ajax({
      url: "/wait",
      type: 'POST',
      success: function(hey) {}
    });

  }, 1000);

});
