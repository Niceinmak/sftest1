const { MessageEmbed,MessageButton,MessageActionRow } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;
module.exports = {
    description: 'battlepass command',
    run: async (client, interaction) => {
      await interaction.deferReply();
		await wait(10);
      let levels = []
      for(let i=0;i<=20;i++)
        {
          levels.push(i)
        }
      console.log(levels)
        const embed = new MessageEmbed()
        	.setColor('#0099ff')
	.setTitle('EcoVerse Battle Pass')
        .setDescription(`***Your point:${client.db.get(`battlepass_${interaction.user.id}.point`)}<:ticket:965658088885583892>***`)
	.setThumbnail(interaction.user.displayAvatarURL({ format: 'png' }))
	.addFields(
		{ name: 'Level 1 [10]<:ticket:965658088885583892>', value: `**Prize**;\n***10,000:euro: Cash***` },
	)
	.setTimestamp()
	.setFooter({ text: `${interaction.user.username}`});
       interaction.editReply({
           embeds:[embed],
       })
    }
};
