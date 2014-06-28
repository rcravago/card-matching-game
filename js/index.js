//keep track of: anything you want to keep track of and change will probably be a variable
// - # moves
// - # of cards picked
// - game status
// - cards
// - # of matches
// var cards = $('.card');



//clicks/functions:
// - shuffle cards

// - click on card => will trigger function
// - start game
// - reset game
// - when 2 cards clicked => check match
// - if less than 2 cards clicked, allow another card click...
// - enable cheat mode

$(document).ready(function(){
	$( ".back1" ).click(function() {
  		$( ".back1" ).toggle();
	});

	$( ".back2" ).click(function() {
  		$( ".back2" ).toggle();
	});

	$( ".back3" ).click(function() {
  		$( ".back3" ).toggle();
	});

	$( ".back4" ).click(function() {
  		$( ".back4" ).toggle();
	});
});
