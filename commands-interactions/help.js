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
	console.log(interaction.value);
        if (interaction.values === 'games') {
		interaction.update({ content: 'Something was selected!', components: [] });
	}
});
    }
};
