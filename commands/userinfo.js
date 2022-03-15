const { MessageEmbed } = require("discord.js");
const btcValue = require('btc-value');
const moment = require("moment");
exports.execute = async (client, message, args) => {
  let timecooldown = Math.floor(Math.random() * 200)+50;
    let playtime = await client.eco.beg(client.ecoAddUser, timecooldown,{cooldown: 10000});
    if (playtime.onCooldown) return message.reply(`**Take it slow,wait ${playtime.time.seconds} more seconds**`);
   let data2= client.eco.removeMoney(message.author.id, parseInt(timecooldown));
  //--------------------------------------------
  let userguild = message.guild.member(message.mentions.users.first() || message.author)
  const user = message.mentions.users.first() || message.author;
  let userBalance = client.eco.fetchMoney(user.id);
  let bankBalance = client.eco.fetchMoney(`${user.id}10`);
  let ecoBalance = client.eco.fetchMoney(`${user.id}11`);
  let userBalanceformat=String(userBalance.amount).replace(/(.)(?=(\d{3})+$)/g,'$1,')
  let bankBalanceformat=String(bankBalance.amount).replace(/(.)(?=(\d{3})+$)/g,'$1,')
  let ecoBalanceformat=String(ecoBalance.amount).replace(/(.)(?=(\d{3})+$)/g,'$1,')
  let items=0
  let created=moment(new Date(user.createdTimestamp)).format("DD/MM/YY")
  let joined=moment.utc(userguild.joinedAt).format('DD/MM/YY')
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
  btcValue().then(value => {
    value=value.toString().slice(0,3);
    let allBalanceformat=String(userBalance.amount+bankBalance.amount+(ecoBalance.amount*value)).replace(/(.)(?=(\d{3})+$)/g,'$1,')
const Embed1 = new MessageEmbed()
	.setColor('#0099ff')
	.setTitle(user.username)
	.setDescription(`**Discord Tag: ${user.tag}\nNow Total Cash: ${allBalanceformat}💶\nJoined Server: ${joined}**`)
	.setThumbnail(user.displayAvatarURL({ format: 'png' }))
	.addFields(
    { name: '**Money**', value: `**User: ${user.username}\nMoney: ${userBalanceformat}💶\nPosition: ${userBalance.position}**` },
    { name: '**Bank**', value: `**User: ${user.username}\nMoney: ${bankBalanceformat}🏦\nPosition: ${bankBalance.position}**` },
    { name: '**EcoCoin**', value: `**User: ${user.username}\nMoney: ${ecoBalanceformat}🌿\nPosition: ${ecoBalance.position}**` },
		{ name: '**Items**', value: `${itemsname}` },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'User ID', value: user.id, inline: true },
    { name: 'Created Account', value: created, inline: true },
    { name: 'Admin?', value: admin, inline: true },
	)

message.channel.send(Embed1);
  });
}
const { MessageButton,MessageActionRow } = require('discord.js');

module.exports = {
    description: 'Yardım Menüsü',
    run: async (client, interaction) => {
        const embed = new MessageEmbed()
        .setTitle('Gweep Creative Çekiliş Botu Yardım Menüsü')
        .setDescription(`Botta (Slash) komutlar mevcuttur. Bu komutlar üzrinden işlemleirini yapabilirsiniz.`)
        .addField('`/başlat`','Çekiliş Başlatır',false)
        .addField('`/bitir`','Var olan çekilişi bitirir',false)
        .addField('`/drop`','drop çekiliş başlatır',false)
        .addField('`/yenile`','Sonlanmış çekilişin kazananını yeniden belirler',false)
        .addField('`/durdur`','Devam eden çekilişi durdurur',false)
        .addField('`/devam`','Durmuş çekilişi başlatır',false)
        .setFooter(`Developed by Gweep Creative 💖`)
        .setThumbnail(client.user.avatarURL());
        const buton = new MessageButton().setLabel('Gweep Creative Youtube').setStyle('LINK').setURL('http://gweepcreative.com');
        const row = new MessageActionRow().addComponents(buton)
       interaction.reply({
           embeds:[embed],
           components:[row],
       })
    }
};
exports.help = {
    name: "userinfo",
    aliases: ["USERINFO"],
    usage: `userinfo <name>`
}
