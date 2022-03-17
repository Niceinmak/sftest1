const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
    if (!client.config.admins.includes(message.author.id)) return message.reply("**Only bot administrators are authorized to send and set money.**"); // return if author isn't bot owner
  if(message.author.id!=process.env.OWNER_ID) return message.reply("**Only special users...**"); // return if author isn't bot owner
   let user = message.mentions.users.first() || message.author;
    if (!user) return message.channel.send("Please specify a user!");
  let userBalance = client.eco.fetchMoney(message.author.id);
  let item = args[1];
  let count = args[2];
  let count2=1;
  if(count==null) count=1;
  if (!item) return message.channel.send(`**${message.author.tag} | What are you trying to buy?**`);
  let hasItem = client.shop[item];
  if (!hasItem || hasItem == undefined)
    return message.channel.send(`**${message.author.tag} | That item doesnt exists lol**`);
   if (!count || isNaN(count))
    return message.channel.send(`**${message.author.tag} | The amount you type is not a number**`);
  if(count<1) return message.reply(`**Remember, you cannot get less than 1 item.**`);
  let itemStruct = {
    name: item.toLowerCase(),
    prize: hasItem.cost
  };
  for (count2 = 1; count2 <= count; count2++) {
  client.db.push(`items_${user.id}`, itemStruct);
}
  return message.channel.send(
    `**${message.author.tag} | ${user.username}** was given **${item} x${count2-1}**`
  );
}

exports.help = {
    name: "addcase",
    aliases: ["ADDCASE"],
    usage: `addcase @user <amount>`
}
