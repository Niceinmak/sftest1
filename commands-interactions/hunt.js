const { MessageEmbed,MessageButton,MessageActionRow } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;
const moment = require("moment");
let ms = require('ms');
let db = require('quick.db');
module.exports = {
    description: 'Hunt animals, but without harm ^^',
    run: async (client, interaction) => {
      await interaction.deferReply();
		await wait(10);
   //--------------------------------------------------------------
            const timeout = 10000;
  const cooldown = await db.fetch(`cooldown_hunt_${interaction.user.id}`);
      	if (cooldown !== null && timeout - (Date.now() - cooldown) > 0) {
		const time = ms(timeout - (Date.now() - cooldown));
          return interaction.editReply(`**Wait ${time} to message again**`)
	}
    db.set(`cooldown_hunt_${interaction.user.id}`, Date.now());
      //---------------------------------------------------------------------------

       let user = interaction.user
  let xp=0
  let fullname=""
  let fullcost=0
  let lucky = Math.floor(Math.random() * 6)+1;
      let userBalance = client.eco.fetchMoney(interaction.user.id);
  let commonanimals = [
        "<:god:948265037313757184>",
        "<:cat1:948265025850724372>",
        "<:fox:948265002492624976>",
        "<:bison:948264912818429962>",
    ];
  let uncommonanimals = [
        "<:tiger:948264974856388639>",
        "<:leopard:948264964597121146>",
        "<:horse:948264952198746112>",
    ];
  let rareanimals = [
        "<:deer:948264928387674213>",
        "<:ox:948264893629480981>",
        "<:pig:948264880417439804>",
        "<:goat:948264872850886687>",
    ];
  let epicanimals = [
        "<:llama:948264865552818196>",
        "<:mouse:948264854551162910>",
        "<:rabbit:948264845520801882>",
        "<:koala:948264836322721862>",
        "<:bear:948264822926094426>",
    ];
  let legendaryanimals = [
        "<:bird:948264810980732988>",
        "<:penguin:948264801698717728>",
        "<:dodo:948264775639519232>",
        "<:trex1:948264765866786907>",
        "<:ant:948264757000040460>",
    ];
  if (userBalance.amount < 3) return interaction.editReply(`**You have too little money.**`);
  for(let i=lucky; i>0;i--)
    {
  let lucky1 = Math.floor(Math.random() * 100)+1;
      let commonxp = Math.floor(Math.random() * 100)+1;
      let uncommonxp = Math.floor(Math.random() * 500)+1;
      let rarexp = Math.floor(Math.random() * 1000)+1;
      let epicxp = Math.floor(Math.random() * 5000)+1;
      let legendaryxp = Math.floor(Math.random() * 10000)+1;
  if (userBalance.amount < 3) return interaction.editReply(`You found: **${fullname}** for ** ${fullcost}💶
Gained ${xp}xp!**.`);
      let item = ""
      if(lucky1<75)
        {
          client.eco.addMoney(`${interaction.user.id}12`, parseInt(commonxp));
          xp+=commonxp
  item = commonanimals[Math.floor(Math.random() * commonanimals.length)];
        }
      else if(lucky1<90)
        {
          client.eco.addMoney(`${interaction.user.id}12`, parseInt(uncommonxp));
          xp+=uncommonxp
  item = uncommonanimals[Math.floor(Math.random() * uncommonanimals.length)];
        }
      else if(lucky1<97)
        {
          client.eco.addMoney(`${interaction.user.id}12`, parseInt(rarexp));
          xp+=rarexp
  item = rareanimals[Math.floor(Math.random() * rareanimals.length)];
        }
      else if(lucky1<100)
        {
          client.eco.addMoney(`${interaction.user.id}12`, parseInt(epicxp));
          xp+=epicxp
  item = epicanimals[Math.floor(Math.random() * epicanimals.length)];
        }
      else
        {
          client.eco.addMoney(`${interaction.user.id}12`, parseInt(legendaryxp));
          xp+=legendaryxp
         item = legendaryanimals[Math.floor(Math.random() * legendaryanimals.length)]; 
        }
  if (!item) return interaction.editReply("What are you trying to buy?");
  let hasItem = client.shop[item];
  if (!hasItem || hasItem == undefined) return interaction.editReply("That item doesnt exists lol");
  let isBalanceEnough = (userBalance.amount >= hasItem.cost);
  if (!isBalanceEnough) return interaction.editReply("Your balance is insufficient. You need :dollar: "+hasItem.cost+" to buy this item.");
  let buy = client.eco.removeMoney(interaction.user.id, hasItem.cost);
  
  let itemStruct = {
    name: item.toLowerCase(),
    prize: hasItem.cost
  };
  
  client.db.push(`animals_${interaction.user.id}`, itemStruct);
  fullname+=`${item},`
  fullcost+=hasItem.cost
    }
      let egglucky=Math.floor(Math.random()* 100)+1;
      if(egglucky>70)
        {
          let egglucky1=Math.floor(Math.random()* 100)+1;
          let egg=""
          if(egglucky1>90)
            {
          egg="<:eggepic:964448950281183242>"; 
            }
          else if(egglucky1>65)
            {
            egg="<:eggrare:964448940248428604>"; 
            }
          else
            {
            egg="<:eggcommon:964448926671454239>"; 
            }
          let hasEgg = client.shop[egg];
          let eggStruct = {
    name: egg.toLowerCase(),
    prize: hasEgg.cost
  };
          client.db.push(`eggs_${interaction.user.id}`, eggStruct);
          return interaction.editReply(`You found: **${fullname}** for ** ${fullcost}💶
Gained ${xp}xp!\nYou are lucky! You have won one egg:${egg}**.`);
        }
  return interaction.editReply(`You found: **${fullname}** for ** ${fullcost}💶
Gained ${xp}xp!**.`);
    }
};
