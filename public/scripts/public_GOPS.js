$(function() {

  let once = 0;
  let url = window.location.href.slice(27);
  const card_values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  let diamond_card;


  function createBoard(array) {

    let $cards = $("container").addClass("cards");

    for (let x in array) {

      $('#your_cards')
        .append($("<form>").attr("method", "POST").attr("action", `/gops/${url}`).attr("name", `${array[x]}`)
          .append($("<input>").attr('type', 'image').addClass('img-fluid').addClass(`card-${array[x]}`)
            .attr("src", `/images/${array[x]}_of_hearts.svg`).attr("alt", "Responsive image")
          ));
    }

  }

  createBoard(card_values);

  $("form").submit(function(event) {

    event.preventDefault();

    let input = {
      input: this.name,
      diamond_card: diamond_card
    };

    if (once === 0) {
      once++;
      $(".your_card").attr("src", `/images/${this.name}_of_hearts.svg`);
      $(`.card-${input.input}`).hide();
      $.ajax({
        url: `/gops/${url}`,
        type: 'POST',
        data: input,
        success: function(results) {
          // getData(results);
          alert(results);
        }
      });
    }


  });

  function getData(array) {
    diamond_card = array[0];
    let is_tie = array[1];
    let opponent_card = array[2];
    let your_score = array[3];
    let opponent_score = array[4];

    $('.opponent_card').attr("src", `/images/${opponent_card}_of_spades.svg`);

    setTimeout(function() {
      postScore(your_score, opponent_score);
    }, 2000);
    setTimeout(function() {
      clearBoard(is_tie);
    }, 4000);
    setTimeout(function() {
      printDiamond(diamond_card, is_tie);
    }, 5000);

  }

  function printDiamond(diamond_card, tie) {

    if (tie) {
      $('.deck').attr("src", `/images/${diamond_card}_of_diamonds.jpg`);
    } else {
      $('.diamond').attr("src", `/images/${diamond_card}_of_diamonds.jpg`);
    }

    once = 0;

  }

  function clearBoard(tie) {

    if (!tie) {
      $('.diamond').attr("src", "/images/back1.jpg");
    }

    $('.your_card').attr("src", "/images/back1.jpg");
    $('.opponent_card').attr("src", "/images/back1.jpg");
    $('.deck').attr("src", "/images/back1.jpg");

  }

  function postScore(your_score, user2_score) {

    $('.opponent_score').text(user2_score);
    $('.your_score').text(your_score);

  }
});

// window.onbeforeunload = function(evt) {
//   var message = 'Did you remember to download your form?';
//   if (typeof evt == 'undefined') {
//     evt = window.event;
//   }
//   if (evt) {
//     evt.returnValue = message;
//   }

//   return message;
// };


//   return message;
// };
