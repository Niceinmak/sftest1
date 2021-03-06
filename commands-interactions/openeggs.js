const { MessageEmbed,MessageButton,MessageActionRow } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;
const moment = require("moment");
let ms = require('ms');
let db = require('quick.db');
const anyLength = require('any-length');
module.exports = {
    description: 'Hunt animals, but without harm ^^',
    options: [
    {
      name: "select_egg",
      description: "Select a egg",
      type: 'STRING',
      required: true,
      choices: [{ name: "Common Egg", value: "<:eggcommon:964448926671454239>" }, { name: "Rare Egg", value: "<:eggrare:964448940248428604>" }, { name: "Epic Egg", value: "<:eggepic:964448950281183242>" }, { name: "All Eggs", value: "alleggs" }]
    },
    ],
    run: async (client, interaction) => {
      await interaction.deferReply();
		await wait(10);
   //--------------------------------------------------------------
            const timeout = 10000;
  const cooldown = await db.fetch(`cooldown_openeggs_${interaction.user.id}`);
      	if (cooldown !== null && timeout - (Date.now() - cooldown) > 0) {
		const time = ms(timeout - (Date.now() - cooldown));
          return interaction.editReply(`**Wait ${time} to message again**`)
	}
    db.set(`cooldown_openeggs_${interaction.user.id}`, Date.now());
      //---------------------------------------------------------------------------
      let x = client.db.get(`eggs_${interaction.user.id}`);
      let egg = interaction.options.get("select_egg").value;
      if(egg!="alleggs")
        {
      var animal = new Boolean(false)
      let count=0
      let tempcount=0
const arrayToObject = x.reduce((itemStruct, x) => {
    if(x.name==egg)
      {
        count=tempcount
      animal=true
      }
  tempcount++
    itemStruct[x.name] = (itemStruct[x.name] || 0) + 1;
    return itemStruct;
  }, {});
      if(animal==false)
    {
      return interaction.editReply(`**${interaction.user.username} | This egg was not found in your inventory**`);
    }
      x.splice(count,1);
  client.db.set(`eggs_${interaction.user.id}`, x)
       let user = interaction.user
  let xp=0
  let fullname=""
  let fullcost=0
  let lucky = Math.floor(Math.random() * 13);
  if(lucky<7) lucky=7;
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
  for(let i=lucky; i>0;i--)
    {
  let lucky1 = Math.floor(Math.random() * 100)+1;
      let commonxp = Math.floor(Math.random() * 100)+1;
      let uncommonxp = Math.floor(Math.random() * 500)+1;
      let rarexp = Math.floor(Math.random() * 1000)+1;
      let epicxp = Math.floor(Math.random() * 5000)+1;
      let legendaryxp = Math.floor(Math.random() * 10000)+1;
      let item = ""
      if(egg=="<:eggcommon:964448926671454239>")
        {
          if(lucky1>50)
        {
          client.eco.addMoney(`${interaction.user.id}12`, parseInt(commonxp));
          xp+=commonxp
  item = commonanimals[Math.floor(Math.random() * commonanimals.length)];
        }
      else
        {
          client.eco.addMoney(`${interaction.user.id}12`, parseInt(uncommonxp));
          xp+=uncommonxp
         item = uncommonanimals[Math.floor(Math.random() * uncommonanimals.length)];
        }
        }
      else if(egg=="<:eggrare:964448940248428604>")
        {
           if(lucky1>50)
        {
          client.eco.addMoney(`${interaction.user.id}12`, parseInt(uncommonxp));
          xp+=uncommonxp
  item = uncommonanimals[Math.floor(Math.random() * uncommonanimals.length)];
        }
      else
        {
          client.eco.addMoney(`${interaction.user.id}12`, parseInt(rarexp));
          xp+=rarexp
         item = rareanimals[Math.floor(Math.random() * rareanimals.length)];
        } 
        }
      else
        {
             if(lucky1>50)
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
        }
  let hasItem = client.shop[item];
  
  let itemStruct = {
    name: item.toLowerCase(),
    prize: hasItem.cost
  };
  
  client.db.push(`animals_${interaction.user.id}`, itemStruct);
  fullname+=`${item},`
    }
  return interaction.editReply(`**=== Egg Opened ===\nYou found: ${fullname} Eggs!\nGained ${xp}xp!**.`);
        }
      else
        {
  let xp=0
  let fullname=""
          let x = client.db.get(`eggs_${interaction.user.id}`);
          let counter=0
      let items=``
        const arrayToObject = x.reduce((itemStruct, x) => {
     items+=x.name+` `
     counter++
    return itemStruct;
  }, {});
          items=` `+items
          let itemslenght=(anyLength(items))-1
      var argString = items.slice(0,itemslenght).substring(1).split(' ');
          for(let i=0;i<counter;i++)
        {
          egg=argString[i]
           var animal = new Boolean(false)
      let count=0
      let tempcount=0
const arrayToObject = x.reduce((itemStruct, x) => {
    if(x.name==egg)
      {
        count=tempcount
      animal=true
      }
  tempcount++
    itemStruct[x.name] = (itemStruct[x.name] || 0) + 1;
    return itemStruct;
  }, {});
      if(animal==false)
    {
          console.log(egg,i)
      return interaction.editReply(`**${interaction.user.username} | This egg was not found in your inventory**`);
    }
      x.splice(count,1);
  client.db.set(`eggs_${interaction.user.id}`, x)
       let user = interaction.user
  let fullcost=0
  let lucky = Math.floor(Math.random() * 13);
  if(lucky<7) lucky=7;
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
  for(let i=lucky; i>0;i--)
    {
  let lucky1 = Math.floor(Math.random() * 100)+1;
      let commonxp = Math.floor(Math.random() * 100)+1;
      let uncommonxp = Math.floor(Math.random() * 500)+1;
      let rarexp = Math.floor(Math.random() * 1000)+1;
      let epicxp = Math.floor(Math.random() * 5000)+1;
      let legendaryxp = Math.floor(Math.random() * 10000)+1;
      let item = ""
      if(egg=="<:eggcommon:964448926671454239>")
        {
          if(lucky1>50)
        {
          client.eco.addMoney(`${interaction.user.id}12`, parseInt(commonxp));
          xp+=commonxp
  item = commonanimals[Math.floor(Math.random() * commonanimals.length)];
        }
      else
        {
          client.eco.addMoney(`${interaction.user.id}12`, parseInt(uncommonxp));
          xp+=uncommonxp
         item = uncommonanimals[Math.floor(Math.random() * uncommonanimals.length)];
        }
        }
      else if(egg=="<:eggrare:964448940248428604>")
        {
           if(lucky1>50)
        {
          client.eco.addMoney(`${interaction.user.id}12`, parseInt(uncommonxp));
          xp+=uncommonxp
  item = uncommonanimals[Math.floor(Math.random() * uncommonanimals.length)];
        }
      else
        {
          client.eco.addMoney(`${interaction.user.id}12`, parseInt(rarexp));
          xp+=rarexp
         item = rareanimals[Math.floor(Math.random() * rareanimals.length)];
        } 
        }
      else
        {
             if(lucky1>50)
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
        }
  let hasItem = client.shop[item];
  
  let itemStruct = {
    name: item.toLowerCase(),
    prize: hasItem.cost
  };
  
  client.db.push(`animals_${interaction.user.id}`, itemStruct);
  fullname+=`${item},`
    }
        }
          let fullnamelenght=(anyLength(fullname))
          if(fullnamelenght>1500)
            {
  return interaction.editReply(`**=== Eggs Opened ===\nYou found: Too Many Eggs!\nGained ${xp}xp!**.`);  
            }
          else
            {
  return interaction.editReply(`**=== Eggs Opened ===\nYou found: ${fullname} Eggs!\nGained ${xp}xp!**.`);  
            }
        }
    }
};
