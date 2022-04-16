const { MessageEmbed,MessageButton,MessageActionRow } = require('discord.js');

module.exports = {
    description: 'Shows bot statistics.',
    run: async (client, interaction) => {
  let serverformat=String(client.guilds.cache.size).replace(/(.)(?=(\d{3})+$)/g,'$1,')
  let userformat=String(client.guilds.cache.map((g) => g.memberCount).reduce((a, c) => a + c)).replace(/(.)(?=(\d{3})+$)/g,'$1,')
  let latency=Math.abs(Date.now() - interaction.createdTimestamp)
  let apilatency=Math.round(client.ws.ping)
  let discordJSVersion = require("discord.js").version
  let totalchannel=String(client.channels.cache.size).replace(/(.)(?=(\d{3})+$)/g,'$1,')
  let developer = client.users.fetch(process.env.OWNER_ID);
      console.log(developer,developer.id,developer.username,developer.user.username,developer.member.username,developer.users.uesrname)
const embed = new MessageEmbed()
.addFields(
		{ name: 'Status', value: '**Online**', inline: true },
		{ name: '🌠 Latency', value: `**${latency}**`, inline: true },
		{ name: '⭐ Api Latency', value: `**${apilatency}**`, inline: true },
		{ name: '🌀 Discord.js Version', value: `**${discordJSVersion}**`, inline: true },
		{ name: '🔰 Total Guild', value: `**${serverformat}**`, inline: true },
		{ name: '💠 Total User', value: `**${userformat}**`, inline: true },
		{ name: '💥 Total Channel', value: `**${totalchannel}**`, inline: true },
		{ name: '☄️ Location', value: `**Turkey [TR]**`, inline: true },
		{ name: '✨ Developer', value: `**${developer.username}#${developer.User.discriminator}**`, inline: true },
	)
let servernames=""
  return interaction.reply({embeds:[embed]});
    }
};
