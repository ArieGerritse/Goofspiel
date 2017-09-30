$(function() {


  const card_values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];


  function createCards(array) {

    let $cards = $("container").addClass("cards");

    for (let x in array) {

      $('#your_cards').append($("<input>").attr('type', 'image').addClass('img-fluid')
        .attr("src", `/images/${array[x]}_of_hearts.svg`).attr("alt", "Responsive image")
        .attr("onClick", `clickCard(${array[x]})`));
    }

  }

  createCards(card_values);
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

function clickCard(card_value) {
  console.log(card_value);
  //req.params.id
}
