const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
  const user = message.mentions.users.first() || message.author;
  let userBalance = client.eco.fetchMoney(user.id);
  let userBalanceformat=String(userBalance.amount).replace(/(.)(?=(\d{3})+$)/g,'$1,')
const Embed1 = new MessageEmbed()
	.setColor('#0099ff')
	.setTitle(user.username)
	.setDescription(`**Total Cash:**`)
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
