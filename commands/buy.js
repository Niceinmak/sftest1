const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
  let userBalance = client.eco.fetchMoney(message.author.id);
        let timecooldown = Math.floor(Math.random() * 200)+50;
        let playtime = client.eco.work(client.ecoAddUser, timecooldown,{cooldown: 10000});
    if (playtime.onCooldown) return message.reply(`**Take it slow,wait ${playtime.time.seconds} more seconds**`);
  let data2= client.eco.removeMoney(message.author.id, parseInt(timecooldown));
  if (userBalance.amount < 1)
    return message.channel.send(`**${message.author.tag} | You don't have enough money :c.**`);
  let item = args[0];
  let count = args[1];
  let count2=1;
  if(count==null) count=1;
  if(item!="epic.case" && item!="rare.case" && item!="common.case" ) return message.channel.send(`**${message.author.tag} | What are you trying to buy?**`);
 if (count>100) return message.channel.send(`**\`${message.author.tag}\` | You cannot get more than 100 crates at a time.**`);
  if (!item) return message.channel.send(`**${message.author.tag} | What are you trying to buy?**`);
  let hasItem = client.shop[item];
  if (!hasItem || hasItem == undefined)
    return message.channel.send(`**${message.author.tag} | That item doesnt exists lol**`);
   if (!count || isNaN(count))
    return message.channel.send(`**${message.author.tag} | The amount you type is not a number**`);
  let isBalanceEnough = userBalance.amount >= hasItem.cost*count;
  if (!isBalanceEnough)
    {
      let hasitemformat=String(hasItem.cost*count).replace(/(.)(?=(\d{3})+$)/g,'$1,')
      let userbalanceformat=String(userBalance.amount).replace(/(.)(?=(\d{3})+$)/g,'$1,')
    return message.channel.send(`**${message.author.tag} | Your balance is insufficient. You need ${hasitemformat}💶 to buy this item.Your current money ${userbalanceformat}💶**`);
    }
  if(count<1) return message.reply(`**Remember, you cannot get less than 1 item.**`);
  let buy = client.eco.removeMoney(message.author.id, hasItem.cost*count);
  let itemStruct = {
    name: item.toLowerCase(),
    prize: hasItem.cost
  };
  while(count2<=count){
 client.db.push(`items_${message.author.id}`, itemStruct);
    count2++;
  }
  let hasitemformat2=String(hasItem.cost*(count2-1)).replace(/(.)(?=(\d{3})+$)/g,'$1,')
  return message.channel.send(
    `**${message.author.tag} | You purchased ${item} x${count2-1} for ${hasitemformat2}💶**`
  );
};

exports.help = {
  name: "buy",
  aliases: ["BUY"],
  usage: `buy <item>`
};
