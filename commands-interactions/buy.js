const { MessageEmbed,MessageButton,MessageActionRow } = require('discord.js');
const moment = require("moment");
let ms = require('ms');
let db = require('quick.db');
module.exports = {
    description: 'Buy Case',
    options: [
    {
      name: "item",
      description: "Select item",
      type: 'STRING',
      required: true,
      choices: [{ name: "Epic Case", value: "epic.case" }, { name: "Rare Case", value: "rare.case" }, { name: "Common Case", value: "common.case" }]
    },
       {
      name: "amount",
      description: "Select amount",
      type: 'INTEGER',
      required: true,
    }
  ],
    run: async (client, interaction) => {
         //--------------------------------------------------------------
            const timeout = 20000;
  const cooldown = await db.fetch(`cooldown_buy_${interaction.user.id}`);
      	if (cooldown !== null && timeout - (Date.now() - cooldown) > 0) {
		const time = ms(timeout - (Date.now() - cooldown));
          return interaction.reply(`**Wait ${time} to message again**`)
	}
    db.set(`cooldown_buy_${interaction.user.id}`, Date.now());
      //---------------------------------------------------------------------------
         interaction.reply("**Checking cases...**").then(msg => {
     setTimeout(function() {
    let userBalance = client.eco.fetchMoney(interaction.user.id);
  if (userBalance.amount < 1)
    return interaction.reply(`**${interaction.user.username} | You don't have enough money :c.**`);
  let item = interaction.options.get("item").value;
  let count = interaction.options.getInteger('amount')
  let count2=1;
  if(count==null) count=1;
  if(item!="epic.case" && item!="rare.case" && item!="common.case" ) return interaction.reply(`**${interaction.user.username} | What are you trying to buy?**`);
 if (count>500) return interaction.reply(`**\`${interaction.user.username}\` | You cannot get more than 500 crates at a time.**`);
  if (!item) return interaction.reply(`**${interaction.user.username} | What are you trying to buy?**`);
  let hasItem = client.shop[item];
  if (!hasItem || hasItem == undefined)
    return interaction.reply(`**${interaction.user.username} | That item doesnt exists lol**`);
   if (!count || isNaN(count))
    return interaction.reply(`**${interaction.user.username} | The amount you type is not a number**`);
  let isBalanceEnough = userBalance.amount >= hasItem.cost*count;
  if (!isBalanceEnough)
    {
      let hasitemformat=String(hasItem.cost*count).replace(/(.)(?=(\d{3})+$)/g,'$1,')
      let userbalanceformat=String(userBalance.amount).replace(/(.)(?=(\d{3})+$)/g,'$1,')
    return interaction.reply(`**${interaction.user.username} | Your balance is insufficient. You need ${hasitemformat}💶 to buy this item.Your current money ${userbalanceformat}💶**`);
    }
  if(count<1) return interaction.reply(`**Remember, you cannot get less than 1 item.**`);
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
  return interaction.editReply(
    `**${interaction.user.username} | You purchased ${item} x${count2-1} for ${hasitemformat2}💶**`
  );
     }, 1000);
   })
  
    }
};
