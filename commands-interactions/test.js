const { MessageEmbed,MessageButton,MessageActionRow } = require('discord.js');

module.exports = {
    description: 'Test',
    run: async (client, interaction) => {
      if (!client.cfg.admins.includes(interaction.user.id)) return interaction.reply("**Only bot administrators are authorized to send and set money.**"); // return if author isn't bot owner
      client.db.delete(`items_${interaction.user.id}`);
        const embed = new MessageEmbed()
        	.setColor('#0099ff')
	.setTitle('Some title')
	.setURL('https://discord.js.org/')
	.setAuthor({ name: 'Some name', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
	.setDescription('Some description here')
	.setThumbnail('https://i.imgur.com/AfFp7pu.png')
	.addFields(
		{ name: 'Regular field title', value: 'Some value here' },
	)
      .addFields(
		{ name: 'Regular field title', value: 'Some value here' },
	)  
	.setImage('https://i.imgur.com/AfFp7pu.png')
	.setTimestamp()
	.setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });
        const buton = new MessageButton().setLabel('EcoVerse Website').setStyle('LINK').setURL('http://ecoverse.ml');
        const row = new MessageActionRow().addComponents(buton)
       interaction.reply({
           embeds:[embed],
           components:[row],
       })
    }
};
