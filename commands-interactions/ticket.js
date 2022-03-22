const { MessageEmbed,MessageButton,MessageActionRow } = require('discord.js');
const moment = require("moment");
let ms = require('ms');
let db = require('quick.db');
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
       //--------------------------------------------------------------
            const timeout = 7200000;
  const cooldown = await db.fetch(`cooldown_ticket_${interaction.user.id}`);
      	if (cooldown !== null && timeout - (Date.now() - cooldown) > 0) {
		const time = ms(timeout - (Date.now() - cooldown));
          return interaction.reply(`**Wait ${time} to message again**`)
	}
    db.set(`ooldown_ticket_${interaction.user.id}`, Date.now());
      //---------------------------------------------------------------------------
        const embed = new MessageEmbed()
        .setTitle(`${interaction.options.getString('title')}`)
        .setDescription(`${interaction.options.getString('description')}`)
        .setThumbnail(interaction.user.avatarURL())
        .addFields(
		{ name: 'Guild Name:', value: `\`${interaction.guild.name}\`` },
    { name: 'Channel Name:', value: `\`${interaction.channel.name}\`` },
    { name: 'User Name:', value: `\`${interaction.user.username}#${interaction.user.discriminator}\`` },
    { name: 'User ID:', value: `\`${interaction.user.id}\`` },
	)
        const channel = client.channels.cache.get(process.env.SUPPORT_CHANNEL)
       channel.send({
           embeds:[embed],
       })
      interaction.reply(`**Your \`ticket\` has been taken! You can be sure that we will get back to you as soon as possible!**`)
    }
};
