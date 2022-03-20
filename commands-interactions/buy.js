const { MessageEmbed,MessageButton,MessageActionRow } = require('discord.js');

module.exports = {
    description: 'Buy Case',
    options: [
    {
      name: "Cases",
      description: "Select color",
      type: 'STRING',
      required: true,
      choices: [{ name: "Epic Case", value: "epic_case" }, { name: "Rare Case", value: "rare_case" }, { name: "Common Case", value: "common_case" }]
    },
  ],
    run: async (client, interaction) => {
    let userBalance = client.eco.fetchMoney(interaction.user.id);
        let timecooldown = Math.floor(Math.random() * 200)+50;
        let playtime = client.eco.work(client.ecoAddUser, timecooldown,{cooldown: 10000});
    if (playtime.onCooldown) return interaction.reply(`**Take it slow,wait ${playtime.time.seconds} more seconds**`);
  let data2= client.eco.removeMoney(interaction.user.id, parseInt(timecooldown));
  if (userBalance.amount < 1)
    return interaction.reply(`**${interaction.user.username} | You don't have enough money :c.**`);
  let item = args[0];
  let count = args[1];
  let count2=1;
  if(count==null) count=1;
  if(item!="epic.case" && item!="rare.case" && item!="common.case" ) return message.channel.send(`**${interaction.user.username} | What are you trying to buy?**`);
 if (count>100) return interaction.reply(`**\`${interaction.user.username}\` | You cannot get more than 100 crates at a time.**`);
  if (!item) return interaction.reply(`**${interaction.user.username} | What are you trying to buy?**`);
  let hasItem = client.shop[item];
  if (!hasItem || hasItem == undefined)
    return interaction.reply(`**${interaction.user.username} | That item doesnt exists lol**`);
   if (!count || isNaN(count))
    return message.channel.send(`**${interaction.user.username} | The amount you type is not a number**`);
  let isBalanceEnough = userBalance.amount >= hasItem.cost*count;
  if (!isBalanceEnough)
    {
      let hasitemformat=String(hasItem.cost*count).replace(/(.)(?=(\d{3})+$)/g,'$1,')
      let userbalanceformat=String(userBalance.amount).replace(/(.)(?=(\d{3})+$)/g,'$1,')
    return message.channel.send(`**${interaction.user.username} | Your balance is insufficient. You need ${hasitemformat}💶 to buy this item.Your current money ${userbalanceformat}💶**`);
    }
  if(count<1) return message.reply(`**Remember, you cannot get less than 1 item.**`);
  let buy = client.eco.removeMoney(interaction.user.id, hasItem.cost*count);
  let itemStruct = {
    name: item.toLowerCase(),
    prize: hasItem.cost
  };
  while(count2<=count){
 client.db.push(`items_${interaction.user.id}`, itemStruct);
    count2++;
  }
  let hasitemformat2=String(hasItem.cost*(count2-1)).replace(/(.)(?=(\d{3})+$)/g,'$1,')
  return message.channel.send(
    `**${interaction.user.username} | You purchased ${item} x${count2-1} for ${hasitemformat2}💶**`
  );
    }
};
