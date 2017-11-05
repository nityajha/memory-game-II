$('.card').click(function (e) {
	  $(this).toggleClass('show');
	});

var clicked_cards = [];
var counter = 0;
var moves = 0;
var clicked_card_id = 0;
var firstId = 0;
var secondId = 0;
var score = 0;
var card_array = [".fa fa-diamond", ".fa fa-paper-plane-o", ".fa fa-anchor", ".fa fa-bolt", ".fa fa-cube", ".fa fa-leaf", ".fa fa-bicycle", ".fa fa-bomb"];

function store_id(){
	first_id = $(this).attr("id") ;
}

function store_in_array(first_id){
	for(counter = 0; counter<2; counter++){
		clicked_cards.push(first_id);
	}
}

function check(){
if(clicked_cards.length == 2){
	if (clicked_cards[0] == clicked_cards[1]){
		clicked_cards[0].addClass('match');
		clicked_cards[1].addClass('match');
		score = score + 5;
		pairs = pairs + 1;
		check_win();
	}else{
		clicked_cards.pop();
		clicked_cards.pop();
		score = score - 1;
	}
}
}

function check_win(pairs){
	if (pairs === 8){
		alert("You have won the game with" +moves+" moves. Press restart symbol to play again.");
	}
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

$('.restart').click(reset_game());
function reset_game(){
	pairs = 0;
	clicked_cards = [];
	moves = 0;
	clicked_card_id = 0;
	score = 0;
	firstId = 0;
	secondId = 0;
	shuffle(card_array);
}
