 $(function() {


   const card_values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];


   function createCards(array) {

     let $cards = $("container").addClass("cards");

     for (let x in array) {

       $('#your_cards').append($("<span>").attr('onclick', THISWORKSFUCKYOUTRAVIS()).append($("<input>").attr('type', 'image').attr("src", `/images/${array[x]}_of_hearts.svg`)
         .attr("height", 130).attr('width', 83.6)));
     }

   }

   function THISWORKSFUCKYOUTRAVIS() {
     console.log('regergregre');
   }

   $('span').click(function(arg) {
     console.log(arg);
     console.log(this);
     console.log('WOOOOOOOOOOOO');
   });

   createCards(card_values);


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
