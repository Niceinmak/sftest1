const { MessageEmbed,MessageButton,MessageActionRow } = require('discord.js');

module.exports = {
    description: 'EcoVerse Terms Of Service',
    run: async (client, interaction) => {
        const embed = new MessageEmbed()
        .setTitle('Test')
        .setDescription(`Test Succesfuly`)
        .setThumbnail(client.user.avatarURL());
        const buton = new MessageButton().setCustomId('primary').setLabel('I Agree!').setStyle('PRIMARY').setDisabled(false);
        const row = new MessageActionRow().addComponents(buton)
       interaction.reply({
           embeds:[embed],
           components:[row],
       })
   const filter = i => i.customId === 'primary' && i.user.id === interaction.user.id;

const collector = interaction.channel.createMessageComponentCollector({time: 15000 });

collector.on('collect', async i => {
	if (i.customId === 'primary') {
		i.deferUpdate();
    const buton = new MessageButton().setCustomId('primary').setLabel('I Agree!').setStyle('PRIMARY').setDisabled(true);
    const row = new MessageActionRow().addComponents(buton)
    return interaction.editReply({
           components:[row],
       })
	}
});
    }
};
