const { MessageEmbed,MessageButton,MessageActionRow } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;
module.exports = {
    description: 'battlepass command',
    run: async (client, interaction) => {
      await interaction.deferReply();
		await wait(10);
        const embed = new MessageEmbed()
        .setTitle('Test')
        .setDescription(`${client.db.get(`battlepass_${interaction.user.id}.point`)}`)
        .setThumbnail(client.user.avatarURL());
       interaction.editReply({
           embeds:[embed],
       })
    }
};
