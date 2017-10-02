$(function() {

  let add_to_matchmaking = {

    player: $('.player_id').text()

  };

  $.ajax({
    url: "/wait",
    type: 'POST',
    data: add_to_matchmaking,
    success: function(oldTweets) {}
  });

});
