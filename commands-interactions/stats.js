const { MessageEmbed,MessageButton,MessageActionRow } = require('discord.js');

module.exports = {
    description: 'Shows bot statistics.',
    run: async (client, interaction) => {
      const packageJSON = require("./package.json");
  let serverformat=String(client.guilds.cache.size).replace(/(.)(?=(\d{3})+$)/g,'$1,')
  let userformat=String(client.guilds.cache.map((g) => g.memberCount).reduce((a, c) => a + c)).replace(/(.)(?=(\d{3})+$)/g,'$1,')
  let latency=Math.abs(Date.now() - interaction.createdTimestamp)
  let apilatency=Math.round(client.ws.ping)
  let discordJSVersion = packageJSON.dependencies["discord.js"];
const embed = new MessageEmbed()
.addFields(
		{ name: '\u200B', value: '\u200B' },
		{ name: '🌠 Latency', value: `${latency}`, inline: true },
		{ name: '⭐ Api Latency', value: `${apilatency}`, inline: true },
		{ name: '🌀 Discord.js Version', value: `${discordJSVersion}`, inline: true },
		{ name: '💠 Total User', value: `${userformat}`, inline: true },
		{ name: '🔰 Total Guild', value: `${serverformat}`, inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
	)
let servernames=""
  return interaction.reply({embeds:[embed]});
    }
};
