const { MessageEmbed,MessageButton,MessageActionRow } = require('discord.js');

module.exports = {
    description: 'Shows bot statistics.',
    run: async (client, interaction) => {
  let serverformat=String(client.guilds.cache.size).replace(/(.)(?=(\d{3})+$)/g,'$1,')
  let userformat=String(client.guilds.cache.map((g) => g.memberCount).reduce((a, c) => a + c)).replace(/(.)(?=(\d{3})+$)/g,'$1,')
const embed = new MessageEmbed()
.addFields(
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Inline field title', value: Math.abs(Date.now() - interaction.createdTimestamp), inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
	)
let servernames=""
  return interaction.reply({embeds:[embed]});
    }
};
