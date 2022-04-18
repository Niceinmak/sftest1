const { MessageEmbed,MessageButton,MessageActionRow } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;
module.exports = {
    description: 'battlepass command',
    run: async (client, interaction) => {
      await interaction.deferReply();
		await wait(10);
        const embed = new MessageEmbed()
        	.setColor('#0099ff')
	.setTitle('EcoVerse Battle Pass')
        .setDescription(`***Your point:${client.db.get(`battlepass_${interaction.user.id}.point`)}🎫***`)
	.setThumbnail(interaction.user.displayAvatarURL({ format: 'png' }))
	.addFields(
		{ name: 'Level 1 [10]🎫', value: 'Some value here' },
	)
	.addField('Inline field title', 'Some value here', true)
	.setImage('https://i.imgur.com/AfFp7pu.png')
	.setTimestamp()
	.setFooter({ text: `${interaction.user.username}`});
       interaction.editReply({
           embeds:[embed],
       })
    }
};
