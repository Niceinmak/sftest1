const { MessageEmbed,MessageButton,MessageActionRow } = require('discord.js');

module.exports = {
    description: 'Add case command, sorry but this is for admins',
    run: async (client, interaction) => {
      if (!client.cfg.admins.includes(interaction.user.id)) return message.reply("**Only bot administrators are authorized to send and set money.**"); // return if author isn't bot owner
   let user = interaction.user
    if (!user) return interaction.reply("Please specify a user!");
  let userBalance = client.eco.fetchMoney(interaction.user.id);
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
};
