const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
    if (!client.config.admins.includes(message.author.id)) return message.reply("**Only bot administrators are authorized to send and set money.**"); // return if author isn't bot owner
    let user = message.mentions.users.first();
    if (!user) return message.channel.send("Please specify a user!");
  let userBalance = client.eco.fetchMoney(message.author.id);
  let item = args[0];
  let count = args[1];
  let count2=1;
  if(count==null) count=1;
  if (!item) return message.channel.send(`**${message.author.tag} | What are you trying to buy?**`);
  let hasItem = client.shop[item];
  if (!hasItem || hasItem == undefined)
    return message.channel.send(`**${message.author.tag} | That item doesnt exists lol**`);
   if (!count || isNaN(count))
    return message.channel.send(`**${message.author.tag} | The amount you type is not a number**`);
  if(count<1) return message.reply(`**Remember, you cannot get less than 1 item.**`);
  let buy = client.eco.removeMoney(message.author.id, hasItem.cost*count);
  let itemStruct = {
    name: item.toLowerCase(),
    prize: hasItem.cost
  };
  for (count2 = 1; count2 <= count; count2++) {
  client.db.push(`items_${message.author.id}`, itemStruct);
}
  let hasitemformat2=String(hasItem.cost*(count2-1)).replace(/(.)(?=(\d{3})+$)/g,'$1,')
  return message.channel.send(
    `**${message.author.tag} | You purchased ${item} x${count2-1} for ${hasitemformat2}💶**`
  );
}

exports.help = {
    name: "addmoney",
    aliases: ["addbal","add"],
    usage: `addmoney @user <amount>`
}
