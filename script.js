$(document).ready(function() {

	//what does this do?
	var convert_value_to_string = function(value) {
		if (value > 10) {
			switch (value) {
				case 11:
				return 'Jack';
				break;
				case 12:
				return 'Queen';
				break;
				case 13:
				return 'King';
				break;
			}
		}
		return value.toString();
	}

	//what does this do?
	var deck = [];
	var suits = ['hearts', 'diamonds', 'spades', 'clubs'];
	for (var i = 0; i<suits.length; i++) {
		var suit = suits[i];
		for (var j = 0; j<13; j++) {
			deck.push({number: j+1, suit: suit});
		}
	}


	
	//what does this do?
	var shuffle = function(array) { 
		var copy = [];
		var n = array.length; 
		var i; 
		while (n) { i = Math.floor(Math.random() * array.length);  
			if (i in array) { 
		 		copy.push(array[i]); 
		 		delete array[i]; 
		 		n--; 
		 	} 
		} 
		return copy; 
	}
	
	//Now call the shuffle function and save the result of what shuffle returns into your deck variable
	deck = shuffle(deck);

	var cards_player_1 = [];
	var cards_player_2 = [];
	// write a function called deal that will evenly divide the deck up between the two players
	var deal = function () {
		for (var i = 0; i < deck.length; i++) {
			if (i % 2 === 0) {
				cards_player_1.push(deck[i]);
			}
			else {
				cards_player_2.push(deck[i]);
			};
		};
	};
	deal();

	
	//create a function (algorithm) called "war" that takes two cards as parameters, compares them and returns a winner. A tie should return false.
	var war = function(card_1, card_2){
		if (card_1 > card_2) {
			return 1;
		}
		else if (card_2 > card_1) {
			return 2;
		}
		else {
			return false;
		};
	};

	var advance = function(){
		//take the top two cards and display them
		if (cards_player_1.length) {
			var card_1 = cards_player_1[0];
			var card_2 = cards_player_2[0];
			$("#opp-card").html(convert_value_to_string(card_1.number)+" "+card_1.suit);
			$("#opp-card-count").html(cards_player_1.length);
			$("#my-card").html(convert_value_to_string(card_2.number)+" "+card_2.suit);
			$("#my-card-count").html(cards_player_2.length);
			
		}
	}
	
	
	//create a play function
		//compare the cards
		//give the winner both cards (at end of deck)
	var play = function(){
		
		var warCard = war(cards_player_1[0].number, cards_player_2[0].number);
			if (1 === warCard) {
				cards_player_1.push(cards_player_1[0], cards_player_2[0]);
				cards_player_1.splice(0, 1);
				cards_player_2.splice(0, 1);
			}
			else if (2 === warCard) { 
				cards_player_2.push(cards_player_2[0], cards_player_1[0]);
				cards_player_2.splice(0, 1);
				cards_player_1.splice(0, 1);
			}
			else {
				// console.log("tie");
				// cards_player_1.push(cards_player_1[0]);
				// cards_player_1.splice(0, 1);
				// cards_player_2.push(cards_player_2[0]);
				// cards_player_2.splice(0, 1);
			 	if (cards_player_1[4].number > cards_player_2[4].number) {
			 		for (var i = 0; i < 5; i++) {
			 			cards_player_1.push(cards_player_1[i]);
			 			cards_player_1.push(cards_player_2[i]);
				 		cards_player_1.splice(0, 1);
				 		cards_player_2.splice(0, 1);
			 		};


			 		// cards_player_1.push(cards_player_1[0, 1, 2, 3, 4], cards_player_2[0, 1, 2, 3, 4]);
			 	}
			 	else if (cards_player_2[4].number > cards_player_1[4].number) {
					for (var i = 0; i < 5; i++) {
						cards_player_2.push(cards_player_2[i]);
						cards_player_2.push(cards_player_1[i]);
						cards_player_2.splice(0, 1);
						cards_player_1.splice(0, 1);
					};




					// cards_player_2.push(cards_player_2[0, 1, 2, 3, 4], cards_player_1[0, 1, 2, 3, 4]);
				}
			 	else {
			 		alert("You broke the game, MORON!!!");


				 	// if (cards_player_1[8].number > cards_player_2[8].number) {
				 	// 	for (var i = 6; i > 5 || i < 9; i++) {
				 	// 		cards_player_1.push(cards_player_1[i]);
				 	// 		cards_player_1.push(cards_player_2[i]);
					 // 		cards_player_1.splice(5, 6);
					 // 		cards_player_2.splice(5, 6);
				 	// 	};


				 	// 	// cards_player_1.push(cards_player_1[0, 4], cards_player_2[0, 1, 2, 3, 4]);
				 	// }
				 	// else if (cards_player_2[8].number > cards_player_1[8].number) {
						// for (var i = 6; i > 5 || i < 9; i++) {
						// 	cards_player_2.push(cards_player_2[i]);
						// 	cards_player_2.push(cards_player_1[i]);
						// 	cards_player_2.splice(5, 6);
						// 	cards_player_1.splice(5, 6);
						// };



				 	// if (cards_player_1[8].number > cards_player_2[8].number) {
				 	// 	cards_player_1.push(cards_player_1[5, 6, 7, 8], cards_player_2[5, 6, 7, 8]);
				 	// 	cards_player_1.splice(5, 9);
				 	// 	cards_player_2.splice(5, 9);

				 	// }
				 	// else if (cards_player_2[8].number > cards_player_1[8].number) {
						// cards_player_2.push(cards_player_2[5, 6, 7, 8], cards_player_1[5, 6, 7, 8]);
						// cards_player_2.splice(5, 9);
						// cards_player_1.splice(5, 9);
				 	// }
				};
			};




			

		 // var blackDiamond = war(false);
		 // 	// var cards_player_1 = cards_player_1.slice(0, 4);
		 // 	// var cards_player_2 = cards_player_2.slice(0, 4);
		 // 	if (cards_player_1[4] > cards_player_2[4]) {


		 // 	}
		 // 	else if (cards_player_2[4]) > cards_player_1[4]) {
		 // 	}
		 // 	else {
		 // 		return false;



		//this function (defined below) will continue to the next turn
		advance();
	}
	

	advance();
	
	$(".btn").click(function() {
		play();
	});
});
