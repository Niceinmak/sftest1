const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const client = new Discord.Client()
let db = require('quick.db');
const DBL = require("dblapi.js");
const dbl = new DBL(process.env.TOPGG_TOKEN, + client);
exports.execute = async (client, message, args) => {
  const user = message.mentions.users.first() || message.author;
  let userBalance = client.eco.fetchMoney(user.id);
  let userBalanceformat=String(userBalance.amount).replace(/(.)(?=(\d{3})+$)/g,'$1,')
  let items=0
  let itemsname=``
  let votedtext=`none`
  dbl.hasVoted(user.id).then(voted => {
    if (voted){
      votedtext=`${user.username} vote available :ballot_box_with_check: `
    }
    else if (!voted){
      votedtext=`**${user.username} has voted today**`
    }
    })
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
	.setThumbnail(message.author.displayAvatarURL({ format: 'png' }))
	.addFields(
    { name: '**Money**', value: `**User: ${user.username}\nMoney: ${userBalanceformat}💶\nPosition: ${userBalance.position}**` },
		{ name: '**Items**', value: `${itemsname}` },
    { name: '**Items**', value: `${votedtext}` },
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
