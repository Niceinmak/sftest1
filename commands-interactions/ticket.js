const { MessageEmbed,MessageButton,MessageActionRow } = require('discord.js');

module.exports = {
    description: 'Have a question? Submit a request to the support team!',
  options: [
        {
            name: 'title',
            description: 'Write a title',
            type: 'STRING',
            required: true
        },
    {
            name: 'description',
            description: 'Write a description',
            type: 'STRING',
            required: true
        },
    ],
    run: async (client, interaction) => {
        const embed = new MessageEmbed()
        console.log(interaction.user)
        .setTitle(`${interaction.options.getString('title')}`)
        .setDescription(`${interaction.options.getString('description')}`)
        .setThumbnail(interaction.user.avatarURL())
        .addFields(
		{ name: 'Guild Name:', value: `\`${interaction.guild.name}\`` },
    { name: 'Channel Name:', value: `\`${interaction.channel.name}\`` },
    { name: 'User Name:', value: `\`${interaction.channel.name}\`` },
	)
        const channel = client.channels.cache.get(process.env.SUPPORT_CHANNEL)
       channel.send({
           embeds:[embed],
       })
    }
};
