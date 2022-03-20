const { MessageEmbed,MessageButton,MessageActionRow } = require('discord.js');
const btcValue = require('btc-value');
const moment = require("moment");
let ms = require('ms');
let db = require('quick.db');
module.exports = {
    description: 'Check User Information',
    options: [
        {
            name: 'user',
            description: 'Select a user',
            type: 'USER',
            required: false
        },
    ],
    run: async (client, interaction) => {
            const timeout = 5000;
  const cooldown = await db.fetch(`cooldown_Command-Name_${interaction.user.id}`);
      	if (cooldown !== null && timeout - (Date.now() - cooldown) > 0) {
		const time = ms(timeout - (Date.now() - cooldown));
          return interaction.reply(`**Wait ${time} to message again**`)
	}
      //---------------------------------------------------------------------------
            let userid=""
            let user=""
      let args_user=interaction.options.getUser('user')
        if(!args_user)
  {
    userid = interaction.user.id;
    user = interaction.user;
  }
  else
  {
    userid = args_user.id;
    user = args_user;
  } 
     // console.log(interaction.user.guild)
  //let userguild = interaction.guild.members.fetch()
  let userBalance = client.eco.fetchMoney(user.id);
  let bankBalance = client.eco.fetchMoney(`${user.id}10`);
  let ecoBalance = client.eco.fetchMoney(`${user.id}11`);
  let userBalanceformat=String(userBalance.amount).replace(/(.)(?=(\d{3})+$)/g,'$1,')
  let bankBalanceformat=String(bankBalance.amount).replace(/(.)(?=(\d{3})+$)/g,'$1,')
  let ecoBalanceformat=String(ecoBalance.amount).replace(/(.)(?=(\d{3})+$)/g,'$1,')
  let items=0
  let created=moment(new Date(user.createdTimestamp)).format("DD/MM/YY")
  let joined=moment.utc(user.joinedAt).format('DD/MM/YY')
  let admin=``
  if (!client.cfg.admins.includes(user.id)) admin=`No`
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

return interaction.reply({
           embeds:[Embed1],
       })
  });
       
    }
};
