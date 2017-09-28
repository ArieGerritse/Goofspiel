//May not need, can maybe random cards drawn from player hand instead? maybe easier?
// function shuffle_array(array) {
//   for (let i in array) {
//     let j = Math.floor(Math.random() * i);
//     console.log(j);
//     [array[i], array[j]] = [array[j], array[i]];
//   }
// }


$(function() {


  const card_values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];


  function create_cards(array) {

    let $cards = $("container").addClass("cards");

    for (let x in array) {

      console.log(x);
      $('#your_cards').append($("<input>").attr('type', 'image').attr("src", `/images/${array[x]}_of_hearts.svg`)
        .attr("height", 130).attr('width', 83.6));
    }

  }

  $('input').click(function(arg) {
    console.log(arg);
    console.log(this);
  });

  create_cards(card_values);


  //For when the window closes, ask if forfight
  // $(window).on("beforeunload", function() {
  //   return inFormOrLink ? "Do you really want to close?" : null;
  // });

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

});
