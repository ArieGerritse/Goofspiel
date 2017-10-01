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
      success: function(hey) {
        if (hey[0]) {
          let game_found = {
            found: hey[0]
          };
          $.ajax({
            url: "/wait",
            type: 'POST',
            data: game_found
          });
        }
      }
    });

  }, 1000);

});
