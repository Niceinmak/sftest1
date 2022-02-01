const { MessageEmbed } = require("discord.js");
const moment = require("moment");
exports.execute = async (client, message, args) => {
  const user = message.mentions.users.first() || message.author;
  let userBalance = client.eco.fetchMoney(user.id);
  let userBalanceformat=String(userBalance.amount).replace(/(.)(?=(\d{3})+$)/g,'$1,')
  let items=0
  let created=moment(new Date(user.createdTimestamp)).format("DD/MM/YY")
  let admin=``
  if (!client.config.admins.includes(user.id)) admin=`No`
  else admin=`Yes`
  let itemsname=``
   const x = client.db.get(`items_${user.id}`);
  if (!x) {
    items=0
    itemsname+=`None`
  }
  else 
    {
  const arrayToObject = x.reduce((itemsobj, x) => {
    itemsobj[x.name] = (itemsobj[x.name] || 0) + 1;
    return itemsobj;
  }, {});
  const result = Object.keys(arrayToObject).map(k =>
    items++
  );
      const result2 = Object.keys(arrayToObject).map(k =>
    itemsname+=`Name: **${k}** Amount: **${arrayToObject[k]}**\n`
  );
      }
const Embed1 = new MessageEmbed()
	.setColor('#0099ff')
	.setTitle(user.username)
	.setDescription(`**Total Cash\n${userBalanceformat}💶\n\nTotal Item:${items} **`)
	.setThumbnail(user.displayAvatarURL({ format: 'png' }))
	.addFields(
    { name: '**Money**', value: `**User: ${user.username}\nMoney: ${userBalanceformat}💶\nPosition: ${userBalance.position}**` },
		{ name: '**Items**', value: `${itemsname}` },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'User ID', value: user.id, inline: true },
    { name: 'Created Account', value: created, inline: true },
    { name: 'Admin?', value: admin, inline: true },
	)

message.channel.send(Embed1);
  
}

exports.help = {
    name: "userinfo",
    aliases: ["USERINFO"],
    usage: `userinfo <name>`
}
