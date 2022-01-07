const { MessageEmbed } = require("discord.js");
const { MessageActionRow, MessageButton } = require('discord.js');
exports.execute = async (client, message, args) => {
   	const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('primary')
					.setLabel('Primary')
					.setStyle('PRIMARY'),
			);
    const embed = new MessageEmbed()
        .setAuthor("Privacy Policy")
        .setTitle("EcoVerse Privacy Policy")
     //   .setURL("https://www.youtube.com/channel/UCF9E-xef9jL9QgziZRDHKKQ")
        .setDescription(`**What information is stored?**
If you have any money, your user ID is stored. Your user ID can be stored multiple times for money..
Money data, market data, user id and similar things are stored on our servers.

**Who gets this data?**
Badge data is publically available. All other data is only available to Quacky Administrators.

**Third Party Data Sharing**
Money data is public. All other data is only available to Quacky Administrators..

**Questions and Concerns.**
You can come to our discord server to learn more: https://discord.gg/2n9Zg9BGgY

**How to Remove your data.**
If you wish to delete your data, please contact us: https://discord.gg/2n9Zg9BGgY

*Note: We reserve the right to change this without notifying our users.*

*From the moment you add this bot to the server, you are deemed to have accepted the privacy policy .*
\`This policy was last updated January 6th, 2022.\``)
        .setColor("BLURPLE")
        .setTimestamp()
        .setThumbnail(client.user.displayAvatarURL)
        .setFooter(message.author.tag, message.author.displayAvatarURL);
    return message.channel.send(embed,row);
}

exports.help = {
    name: "privacy",
    aliases: [],
    usage: `privacy`
}
