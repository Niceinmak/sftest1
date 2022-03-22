const { MessageEmbed,MessageButton,MessageActionRow } = require('discord.js');

module.exports = {
    description: 'Add case command, sorry but this is for admins',
  options: [
        {
            name: 'user',
            description: 'Select a user',
            type: 'USER',
            required: true
        },
    {
      name: "item",
      description: "Select item",
      type: 'STRING',
      required: true,
      choices: [{ name: "Epic Case", value: "epic.case" }, { name: "Rare Case", value: "rare.case" }, { name: "Common Case", value: "common.case" }]
    },
    {
      
            name: 'amount',
            description: 'Select amount',
            type: 'INTEGER',
            required: true
        },
    ],
    run: async (client, interaction) => {
      if (!client.cfg.admins.includes(interaction.user.id)) return interaction.reply("**Only bot administrators are authorized to send and set money.**"); // return if author isn't bot owner
   let user = interaction.options.getUser('user')
    if (!user) return interaction.reply("Please specify a user!");
  let userBalance = client.eco.fetchMoney(interaction.user.id);
  let item = interaction.options.get("item").value;
  let count = interaction.options.getInteger('amount')
  let count2=1;
  if(count==null) count=1;
  if (!item) return interaction.reply(`**${interaction.user.username} | What are you trying to buy?**`);
  let hasItem = client.shop[item];
  if (!hasItem || hasItem == undefined)
    return interaction.reply(`**${interaction.user.username} | That item doesnt exists lol**`);
   if (!count || isNaN(count))
    return interaction.reply(`**${interaction.user.username} | The amount you type is not a number**`);
  if(count<1) return interaction.reply(`**Remember, you cannot get less than 1 item.**`);
  let itemStruct = {
    name: item.toLowerCase(),
    prize: hasItem.cost
  };
  for (count2 = 1; count2 <= count; count2++) {
  client.db.push(`items_${user.id}`, itemStruct);
}
  return interaction.reply(
    `**${interaction.user.username} | ${user.username}** was given **${item} x${count2-1}**`
  );
    }
};
