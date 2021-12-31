// French style cards
const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
const suits = [':spades:', ':diamonds:', ':hearts:', ':clubs:'];

const msgTitle = ':black_joker: **BLACKJACK** :black_joker:';
const MAX_BET = 1000000;
let deck = [];

module.exports = {
	name: 'blackjack',
	aliases: ['21', 'bj'],
	cooldown: 15,
	category: 'casino',
	embed: {
		'title': 'BLACKJACK',
		'description': 'Aliases: `21` `bj`\nUsage: {amount to bet}',
		'color': 1,
		'footer': {
			'icon_url': 'https://cdn.discordapp.com/avatars/368918984717893633/025fef62eec7d01d6f24aaed40ccf7bb.png?size=256',
			'text': '!help blackjack',
		},
		'fields': [
			{
				'name': 'How To Play:',
				'value': 'Try to get a total value of 21 among your cards before the dealer does',
			},
			{
				'name': 'There are 3 ways to win:',
				'value': 'If you get 21, you will win **×5** your bet!' +
						'\nIf you and the dealer both get 21, you will win **×3** your bet!' +
						'\nIf the dealer goes over, and you have less than 21, you will win your bet back!',
			},
		],
	},
	usage: '{amount to bet}',

	async execute(msg, args, uv, cli) {
		cli.logCall(this.name, msg);

		// Generate a deck of 52 cards
		deck = [];
		for (const suit of suits) {
			for (const rank of ranks) {
				deck.push(rank + '' + suit);
			}
		}

		// Get player bet and adjust if not in range
		let bet = parseInt(args.shift());
		if (isNaN(bet) || bet <= 0) bet = 1;
		else if (bet > MAX_BET) bet = MAX_BET;

		// Debit bet from player balance or exit if they broke
		const target = msg.mentions.users.first() || msg.author;
		if (uv.getBalance(target.id) < bet) return msg.reply('**you have insufficient funds.**').then(sentMessage => { sentMessage.delete(6000); });
		else uv.add(target.id, -bet);

		const hand = [], dealerHand = []; // Declare arrays to store hands
		const total = 0, dealerTotal = 0; // Declare vars for storing totals
		let deal = true;
		let round = 1;
		const filter = response => {
			return response.author.id === msg.author.id && (response.content === 'hit' || response.content === 'stand');
		};

		nextTurn(hand, deck, total, dealerHand, dealerTotal); // Call the deal function once

		function nextTurn(h, d, t, dh, dt) {
			// Add new card to hands
			h.push(hit());
			dh.push(hit());

			// Determine value of card and add to sum total (Let A = 1 only if hand goes over 21 if A = 11)
			if (t + updateValue(h[h.length - 1]) > 21 && updateValue(h[h.length - 1]) == 11) t += 1;
			else t += updateValue(h[h.length - 1]);
			if (dt + updateValue(dh[dh.length - 1]) > 21 && updateValue(dh[dh.length - 1]) == 11) dt += 1;
			else dt += updateValue(dh[dh.length - 1]);

			// To display the cards
			const displayDealer = [];
			for (const card of dh) displayDealer.push(card);

			if (t >= 21 || dt >= 21) { return endGame(); } // If either reaches or goes over 21, end the game
			else {
				// Hide dealer's first card
				displayDealer.shift();
				displayDealer.unshift('?:question:');
			}

			if (!deal) {
				msg.channel.send(`${msgTitle}\n\n__**Turn ${round}**__\nDealer's cards:  ${displayDealer}\n**${msg.author.username}'s cards**: **${hand} (${t})**\n\nType \`hit\` or \`stand\``).then(sentMessage => {
					// Wait for user response
					msg.channel.awaitMessages(filter, {	maxMatches : 1,	time : 30000, errors : ['time'] }).then(collected => {
						round++;
						switch(collected.first().content) {
						case 'hit':
							setTimeout(() => nextTurn(h, d, t, dh, dt), 1000); // Call the deal function everytime player types 'hit'
							break;
						case 'stand':
							return setTimeout(() => stand(), 1000); // Call the stand function
						}
					}).catch((err) => {
						console.error(err);
						sentMessage.edit(msgTitle + '\n**No response. Game ended.**');
					});
				}).catch((err) => { console.error(err); });
			}
			else {
				deal = false;
				nextTurn(h, d, t, dh, dt);
			}

			// Player gets no more cards and dealer attempts to get blackjack without going over
			function stand() {
				let under21 = true;
				while (under21) {
					dh.push(hit(d));
					if (dt + updateValue(dh[dh.length - 1]) > 21 && updateValue(dh[dh.length - 1]) == 11) dt += 1;
					else dt += updateValue(dh[dh.length - 1]);

					if (dt >= 21) under21 = false;
				}
				displayDealer.splice(0);
				for (const card of dh) {
					displayDealer.push(card);
				}
				return endGame();
			}

			function endGame() {
				let results;
				let payout = 0;

				if (t === 21 && dt === 21) {
					results = `**Dealer and ${msg.author.username} hit 21!**\nYou won **3x** your bet! ($${bet * 3})`;
					payout = bet * 3;
				}
				else if (t === 21) {
					results = `**${msg.author.username} hit 21!**\nYou won **5x** your bet! ($${bet * 5})`;
					payout = bet * 5;
				}
				else if (dt === 21) {
					results = `**Dealer hit 21!**\nYou lost **$${bet}**.`;
				}
				else if (t < 21 && dt > 21) {
					results = `**Dealer went over!**\nYou won **2x** your bet! ($${bet * 2})`;
					payout = bet * 2;
				}
				else {
					results = `**${msg.author.username} went over...**\nYou lost **$${bet}**`;
				}

				// Update player balance
				uv.add(target.id, payout);

				msg.channel.send(`${msgTitle}\n\n__**Turn ${round}**__\nDealer's cards:  ${displayDealer} (${dt})\n**${msg.author.username}'s cards**: **${hand} (${t})**\n\n${results}`);
			}

		}
	},
};

// Deal another card to player
function hit() {
	const cardToRemove = Math.floor(Math.random() * deck.length); // Randomize which card to remove from deck
	const newCard = deck[cardToRemove]; // Copy that card to send to hand
	deck.splice(cardToRemove, 1); // Remove the card for the deck
	return newCard; // Add the card to player's hand
}

// Check the value of new card
function updateValue(newCard) {
	if ((newCard.toString().substring(0, 2).valueOf()).match('J|Q|K')) return 10;
	else if ((newCard.toString().substring(0, 2).valueOf()).match('A')) return 11;
	else return parseInt(newCard.toString().substring(0, 2).valueOf());
}