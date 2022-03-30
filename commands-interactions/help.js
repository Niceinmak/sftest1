const { MessageEmbed,MessageButton,MessageActionRow,MessageSelectMenu } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;
module.exports = {
    description: 'Need help? Just click!',
    run: async (client, interaction) => {
      await interaction.deferReply();
		await wait(10);
      const embed = new MessageEmbed()
			.setColor('#0099ff')
			.setTitle('Help Commands')
			.setURL('https://ecoverse.ml/')
			.setDescription(`**Need help?\nPlease choose menu!**
      
      [**Games💵**](https://http://ecoverse.ml//)
     <:reply:956274844004139018>EcoVerse games...
     [**Bank🏦**](https://http://ecoverse.ml//)
      Do you have saved money, store it!
      [**Animals🐍**](https://http://ecoverse.ml//)
      <:reply:956274844004139018>Zoos are beautiful, but EcoVerse is even more beautiful.
      [**EcoCoin🌿**](https://http://ecoverse.ml//)
      <:reply:956274844004139018>The easiest way to become rich!
      [**Economy💰**](https://http://ecoverse.ml//)
      <:reply:956274844004139018>Main commands, may be needed ^^
      [**Only Admins 🚫**](https://http://ecoverse.ml//)
      <:reply:956274844004139018>Special commands for admins.
      [**Utility🔧**](https://http://ecoverse.ml//)
      <:reply:956274844004139018>Fun and different commands.
                      `);
       const row = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId('select')
					.setPlaceholder('Nothing selected')
					.addOptions([
						{
							label: 'Games💵',
							description: 'Want to look at gambling games?',
							value: 'games',
						},
						{
							label: 'Bank🏦',
							description: 'You can store your money in the bank!',
							value: 'bank',
						},
            {
							label: 'Animals🐍',
							description: 'Do you want to have an animal?',
							value: 'animal',
						},
            {
							label: 'EcoCoin🌿',
							description: 'The fastest way to get rich.',
							value: 'ecocoin',
						},
            {
							label: 'Economy💰',
							description: 'Economy commands, you may need them.',
							value: 'economy',
						},
            {
							label: 'Only Admins 🚫',
							description: 'Commands that admins can access.',
							value: 'admins',
						},
            {
							label: 'Utility🔧',
							description: 'Commands about the bot.',
							value: 'utility',
						},
					]),
			);

		await interaction.editReply({ embeds: [embed], components: [row] });
      client.on('interactionCreate', interaction => {
	if (!interaction.isSelectMenu()) return;
        if (interaction.values[0] === 'games') {
          const embed = new MessageEmbed()
			.setColor('#0099ff')
			.setTitle('Games Commands')
			.setDescription(`**Nice place to play games.**
      
      [**/Beg**](https://http://ecoverse.ml//)
      <:reply:956274844004139018>Money makes you beg. If you're broke, you can try.
      [**/Blackjack**](https://http://ecoverse.ml//)
       <:reply:956274844004139018>Blackjack game.
       [**/Coinflip**](https://http://ecoverse.ml//)
       <:reply:956274844004139018>Coinflip game.
       [**/Daily**](https://http://ecoverse.ml//)
      <:reply:956274844004139018>It allows you to receive your daily money.
      [**/Rob**](https://http://ecoverse.ml//)
      <:reply:956274844004139018>You can steal other users' money.
      [**/Roll**](https://http://ecoverse.ml//)
      <:reply:956274844004139018>Roll game.
     [**/Search**](https://http://ecoverse.ml//)
      <:reply:956274844004139018>Search, maybe you will find money.
      [**/Slots**](https://http://ecoverse.ml//)
     <:reply:956274844004139018>Slots game.
     [**/Spin**](https://http://ecoverse.ml//)
     <:reply:956274844004139018>Roulette game.
     [**/Weekly**](https://http://ecoverse.ml//)
     <:reply:956274844004139018>It allows you to receive your weekly money.`);
		interaction.update({ embeds: [embed], components: [row] });
	}
        if (interaction.values[0] === 'bank') {
          const embed = new MessageEmbed()
			.setColor('#0099ff')
			.setTitle('Bank Commands')
			.setDescription(`**Do you know what the bank is for?**
      
      [**/Bank**](https://http://ecoverse.ml//)
      <:reply:956274844004139018>Shows its own bank account.
      [**/Deposit**](https://http://ecoverse.ml//)
      <:reply:956274844004139018>Deposit into bank account.
      [**/Withdraw**](https://http://ecoverse.ml//)
     <:reply:956274844004139018>Withdraw into bank account.`);
		interaction.update({ embeds: [embed], components: [row] });
	}
            if (interaction.values[0] === 'animal') {
          const embed = new MessageEmbed()
			.setColor('#0099ff')
			.setTitle('Animal Commands')
			.setDescription(`**Build your zoo.**
      
      [**/Zoo**](https://http://ecoverse.ml//)
     <:reply:956274844004139018>Check out your own zoo.
     [**/SellAnimals**](https://http://ecoverse.ml//)
     <:reply:956274844004139018>Sell your animals and earn money.
     [**/Team**](https://http://ecoverse.ml//)
     <:reply:956274844004139018>Build your animal team.
     [**/Hunt**](https://http://ecoverse.ml//)
    <:reply:956274844004139018>Hunt animals.`);
		interaction.update({ embeds: [embed], components: [row] });
	}
    if (interaction.values[0] === 'ecocoin') {
          const embed = new MessageEmbed()
			.setColor('#0099ff')
			.setTitle('EcoCoin Commands')
			.setDescription(`**Do you want to be rich?**
      
       [**/EcoCoin**](https://http://ecoverse.ml//)
      <:reply:956274844004139018>See the price of EcoCoin.
      [**/BuyEco**](https://http://ecoverse.ml//)
      <:reply:956274844004139018>Buy EcoCoin.
      [**/SellEco**](https://http://ecoverse.ml//)
      <:reply:956274844004139018>Sell EcoCoin.
      [**/TransferEco**](https://http://ecoverse.ml//)
     <:reply:956274844004139018>Send EcoCoin.
      [**/EcoInv**](https://http://ecoverse.ml//)
     <:reply:956274844004139018>How many EcoCoins do you have? Do you want to have a look?`);
		interaction.update({ embeds: [embed], components: [row] });
	}
        if (interaction.values[0] === 'economy') {
          const embed = new MessageEmbed()
			.setColor('#0099ff')
			.setTitle('Economy Commands')
			.setDescription(`**This place is important!**
      
      [**/Balance**](https://http://ecoverse.ml//)
      <:reply:956274844004139018>See your money.
      [**/Buy**](https://http://ecoverse.ml//)
      <:reply:956274844004139018>Buy case.
      [**/Help**](https://http://ecoverse.ml//)
      <:reply:956274844004139018>Look commands.
      [**/Inventory**](https://http://ecoverse.ml//)
      <:reply:956274844004139018>Look at their crates.
      [**/Shop**](https://http://ecoverse.ml//)
      <:reply:956274844004139018>Look at the market.
      [**/Transfer**](https://http://ecoverse.ml//)
      <:reply:956274844004139018>Transfer your money.
      [**/Use**](https://http://ecoverse.ml//)
      <:reply:956274844004139018>Use your case and earn money.
      [**/Vote**](https://http://ecoverse.ml//)
      <:reply:956274844004139018>Vote for EcoVerse and earn money.`);
		interaction.update({ embeds: [embed], components: [row] });
	}
        if (interaction.values[0] === 'admins') {
          const embed = new MessageEmbed()
			.setColor('#0099ff')
			.setTitle('Admins Commands')
			.setDescription(`**Entrance is forbidden.**
      
      [**/AddCase**](https://http://ecoverse.ml//)
      <:reply:956274844004139018>Add a case to the user.
      [**/AddMoney**](https://http://ecoverse.ml//)
     <:reply:956274844004139018>Add a money to the user.
     [**/BotInfo**](https://http://ecoverse.ml//)
     <:reply:956274844004139018>Show bot information.
     [**/RemoveMoney**](https://http://ecoverse.ml//)
     <:reply:956274844004139018>Removes money from the user.
     [**/SetMoney**](https://http://ecoverse.ml//)
     <:reply:956274844004139018>Set money from the user.
     [**/Test**](https://http://ecoverse.ml//)
    <:reply:956274844004139018>Test EcoVerse bot.`);
		interaction.update({ embeds: [embed], components: [row] });
	}
        if (interaction.values[0] === 'utility') {
          const embed = new MessageEmbed()
			.setColor('#0099ff')
			.setTitle('Utility Commands')
			.setDescription(`**I think this part is useless ^^**
      
       [**/Ping**](https://http://ecoverse.ml//)
      <:reply:956274844004139018>Pong.
       [**/SupportServer**](https://http://ecoverse.ml//)
      <:reply:956274844004139018>Checkout EcoVerse support server.
       [**/TermsOfService**](https://http://ecoverse.ml//)
     <:reply:956274844004139018>EcoVerse Terms Of Service's.
      [**/Uptime**](https://http://ecoverse.ml//)
     <:reply:956274844004139018>How long has the bot been open?
      [**/UserInfo**](https://http://ecoverse.ml//)
     <:reply:956274844004139018>Show user information.
      [**/Website**](https://http://ecoverse.ml//)
     <:reply:956274844004139018>Have you visited the EcoVerse Website?
      [**/Ticket**](https://http://ecoverse.ml//)
     <:reply:956274844004139018>Need help? Please send us a ticket!
      [**/Clap**](https://http://ecoverse.ml//)
    <:reply:956274844004139018>The message puts applause between them.`);
		interaction.update({ embeds: [embed], components: [row] });
	}
});
    }
};
