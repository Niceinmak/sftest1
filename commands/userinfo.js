const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
  const user = message.mentions.users.first() || message.author;
const Embed1 = new MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Some title')
	.setURL('https://discord.js.org/')
	.setAuthor({ name: 'Some name', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
	.setDescription(`description`)
	.setThumbnail(message.author.displayAvatarURL({ format: 'png' }))
	.addFields(
		{ name: 'Regular field title', value: 'Some value here' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
	)
	.addField('Inline field title', 'Some value here', true)
	.setImage()
	.setTimestamp()
	.setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });

message.channel.send(Embed1);
  
}

exports.help = {
    name: "userinfo",
    aliases: ["USERINFO"],
    usage: `userinfo`
}
