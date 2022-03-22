const { MessageEmbed,MessageButton,MessageActionRow,MessageSelectMenu } = require('discord.js');

module.exports = {
    description: 'Need help? Just click!',
    run: async (client, interaction) => {
      const embed = new MessageEmbed()
			.setColor('#0099ff')
			.setTitle('Help Commands')
			.setURL('https://ecoverse.ml/')
			.setDescription('**Need help?\nPlease choose menu!**');
       const row = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId('select')
					.setPlaceholder('Nothing selected')
					.addOptions([
						{
							label: 'Games',
							description: 'Want to look at gambling games?',
							value: 'games',
						},
						{
							label: 'Bank',
							description: 'You can store your money in the bank!',
							value: 'bank',
						},
            {
							label: 'Animals',
							description: 'Do you want to have an animal?',
							value: 'animal',
						},
            {
							label: 'EcoCoin',
							description: 'The fastest way to get rich.',
							value: 'ecocoin',
						},
            {
							label: 'Economy',
							description: 'Economy commands, you may need them.',
							value: 'economy',
						},
            {
							label: 'Only Admins',
							description: 'Commands that admins can access.',
							value: 'admins',
						},
            {
							label: 'Utility',
							description: 'Commands about the bot.',
							value: 'utility',
						},
					]),
			);

		await interaction.reply({ embeds: [embed], components: [row] });
      client.on('interactionCreate', interaction => {
	if (!interaction.isSelectMenu()) return;
        if (interaction.values[0] === 'games') {
          const embed = new MessageEmbed()
			.setColor('#0099ff')
			.setTitle('Games Commands')
			.setDescription(`**Nice place to play games.
      
      \`/Beg\` [Money makes you beg. If you're broke, you can try.]
      \`/Blackjack\` [Blackjack game.]
      \`/Coinflip\` [Coinflip game.]
      \`/Daily\` [It allows you to receive your daily money.]
      \`/Rob\` [You can steal other users' money.]
      \`/Roll\` [Roll game.]
      \`/Search\` [Search, maybe you will find money.]
      \`/Slots\` [Slots game.]
      \`/Spin\` [Roulette game.]
      \`/Weekly\` [It allows you to receive your weekly money.]**`);
		interaction.update({ embeds: [embed], components: [row] });
	}
        if (interaction.values[0] === 'bank') {
          const embed = new MessageEmbed()
			.setColor('#0099ff')
			.setTitle('Bank Commands')
			.setDescription(`**Do you know what the bank is for?
      
      \`/Bank\` [Shows its own bank account.]
      \`/Deposit\` [Deposit into bank account.]
      \`/Withdraw\` [Withdraw into bank account.]**`);
		interaction.update({ embeds: [embed], components: [row] });
	}
            if (interaction.values[0] === 'animal') {
          const embed = new MessageEmbed()
			.setColor('#0099ff')
			.setTitle('Animal Commands')
			.setDescription(`**Build your zoo.
      
      \`/Zoo\` [Check out your own zoo.]
      \`/SellAnimals\` [Sell your animals and earn money.]
      \`/Team\` [Build your animal team.]
      \`/Hunt\` [Hunt animals.]**`);
		interaction.update({ embeds: [embed], components: [row] });
	}
    if (interaction.values[0] === 'ecocoin') {
          const embed = new MessageEmbed()
			.setColor('#0099ff')
			.setTitle('EcoCoin Commands')
			.setDescription(`**Do you want to be rich?
      
      \`/EcoCoin\` [See the price of EcoCoin.]
      \`/BuyEco\` [Buy EcoCoin.]
      \`/SellEco\` [Sell EcoCoin.]
      \`/TransferEco\` [Send EcoCoin.]
      \`/EcoInv\` [How many EcoCoins do you have? Do you want to have a look?]**`);
		interaction.update({ embeds: [embed], components: [row] });
	}
        if (interaction.values[0] === 'economy') {
          const embed = new MessageEmbed()
			.setColor('#0099ff')
			.setTitle('Economy Commands')
			.setDescription(`**This place is important!
      
      \`/Balance\` [See your money.]
      \`/Buy\` [Buy case.]
      \`/Help\` [Look commands.]
      \`/Inventory\` [Look at their crates.]
      \`/Shop\` [Look at the market.]
      \`/Transfer\` [Transfer your money.]
      \`/Use\` [Use your case and earn money.]
      \`/Vote\` [Vote for EcoVerse and earn money.]**`);
		interaction.update({ embeds: [embed], components: [row] });
	}
        if (interaction.values[0] === 'admins') {
          const embed = new MessageEmbed()
			.setColor('#0099ff')
			.setTitle('Admins Commands')
			.setDescription(`**Entrance is forbidden.
      
      \`/Addcase\` [Adds a case to the user.]
      \`/Addmoney\` [Add a money to the user.]
      \`/Botinfo\` [Show bot information.]
      \`/Removemoney\` [Removes money from the user.]
      \`/Setmoney\` [Set money from the user.]
      \`/Test\` [Test EcoVerse bot.]**`);
		interaction.update({ embeds: [embed], components: [row] });
	}
        if (interaction.values[0] === 'utility') {
          const embed = new MessageEmbed()
			.setColor('#0099ff')
			.setTitle('Utility Commands')
			.setDescription(`**I think this part is useless ^^
      
      \`/Ping\` [Pong.]
      \`/SupportServer\` [Checkout EcoVerse support server.]
      \`/TermsOfService\` [EcoVerse Terms Of Service's.]
      \`/Uptime\` [How long has the bot been open?]
      \`/UserInfo\` [Show user information.]
      \`/Website\` [Have you visited the EcoVerse Website?]**
      \`/Ticket\` [Need help? Please send us a ticket!]**
      \`/Clap\` [The message puts applause between them.]**`);
		interaction.update({ embeds: [embed], components: [row] });
	}
});
    }
};
