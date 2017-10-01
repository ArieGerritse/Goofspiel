$(function() {


  const card_values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];


  function createBoard(array) {

    let $cards = $("container").addClass("cards");

    for (let x in array) {

      $('#your_cards')
        .append($("<form>").attr("method", "POST").attr("action", "/gops/qwdw").attr("name", `${array[x]}`)
          .append($("<input>").attr('type', 'image').addClass('img-fluid')
            .attr("src", `/images/${array[x]}_of_hearts.svg`).attr("alt", "Responsive image")
          ));
    }

  }

  createBoard(card_values);

  $("form").submit(function(event) {

    // console.log(this.name);
    event.preventDefault();
    // var arr = JSON.stringify({
    //   input: this.name
    // });

    let input = {
      input: this.name
    };

    $.ajax({
      url: "/gops/qwdw",
      type: 'POST',
      data: input,
      // contentType: "application/json",
      // dataType: "JSON",
      success: function(hey) {
        alert(hey);
      }
    });


  });

  // function getData()


});

// //Send Value of Card to Server
// function clickboard(card_value) {
//   // event.preventDefault();
//   console.log(card_value);

//   $.ajax({
//     type: 'POST',
//     url: `/GOPS/wqdijwq`,
//     data: card_value,
//     success: function(hey) {
//       console.log('WORKED!');
//     }
//   });

//   //req.params.id
// }




function printDiamond(diamond_card, tie) {

}

function printOpponentCard(user2_card) {

}

function postScore(your_score, user2_score) {

}

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
