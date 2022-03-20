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

		await interaction.reply({ content: 'Pong!', components: [row] });
      client.on('interactionCreate', interaction => {
	if (!interaction.isSelectMenu()) return;
	console.log(interaction.values[0]);
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
			.setDescription(`**\`/Zoo\` [Check out your own zoo.]
      \`/Sell\` [Sell your animals and earn money.]
      \`/Team\` [Build your animal team.]
      \`/Hunt\` [Hunt animals.]**`);
		interaction.update({ embeds: [embed], components: [row] });
	}
});
    }
};
