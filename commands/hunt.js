const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
  let user = message.author
  if (!client.config.admins.includes(message.author.id))
    {
      let timecooldown = Math.floor(Math.random() * 200)+50;
    let playtime = await client.eco.work(client.ecoAddUser, timecooldown,{cooldown: 10000});
    const user1 = message.member.user
   if (playtime.onCooldown) return message.reply(`**Take it slow,wait ${playtime.time.seconds} more seconds**`);
    let data2= client.eco.removeMoney(message.author.id, parseInt(timecooldown));
    }
  else
    {
      if(message.author.id!=process.env.OWNER_ID)
    {
      const channel = client.channels.cache.get(process.env.REQUEST_CHANNEL)
      channel.send(`**${user.tag} (${user.id}) used the \`hunt\`\nServer \`${message.guild.name} (${message.guild.id})\`\nChannel \`${message.channel.name} (${message.channel.id})\`**`)
    }
    }
  let xp=0
  let fullname=""
  let fullcost=0
  let lucky = Math.floor(Math.random() * 5);
      let userBalance = client.eco.fetchMoney(message.author.id);
  if(lucky==0) lucky=1
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
  if (userBalance.amount < 3) return message.channel.send(`**You have too little money.**`);
  for(let i=lucky; i>0;i--)
    {
  let lucky1 = Math.floor(Math.random() * 100)+1;
      let commonxp = Math.floor(Math.random() * 100)+1;
      let uncommonxp = Math.floor(Math.random() * 500)+1;
      let rarexp = Math.floor(Math.random() * 1000)+1;
      let epicxp = Math.floor(Math.random() * 5000)+1;
      let legendaryxp = Math.floor(Math.random() * 10000)+1;
  if (userBalance.amount < 3) return message.channel.send(`You found: **${fullname}** for ** ${fullcost}💶
Gained ${xp}xp!**.`);
      let item = ""
      if(lucky1<75)
        {
          client.eco.addMoney(`${message.author.id}12`, parseInt(commonxp));
          xp+=commonxp
  item = commonanimals[Math.floor(Math.random() * commonanimals.length)];
        }
      else if(lucky1<90)
        {
          client.eco.addMoney(`${message.author.id}12`, parseInt(uncommonxp));
          xp+=uncommonxp
  item = uncommonanimals[Math.floor(Math.random() * uncommonanimals.length)];
        }
      else if(lucky1<97)
        {
          client.eco.addMoney(`${message.author.id}12`, parseInt(rarexp));
          xp+=rarexp
  item = rareanimals[Math.floor(Math.random() * rareanimals.length)];
        }
      else if(lucky1<100)
        {
          client.eco.addMoney(`${message.author.id}12`, parseInt(epicxp));
          xp+=epicxp
  item = epicanimals[Math.floor(Math.random() * epicanimals.length)];
        }
      else
        {
          client.eco.addMoney(`${message.author.id}12`, parseInt(legendaryxp));
          xp+=legendaryxp
         item = legendaryanimals[Math.floor(Math.random() * legendaryanimals.length)]; 
        }
  if (!item) return message.channel.send("What are you trying to buy?");
  let hasItem = client.shop[item];
  if (!hasItem || hasItem == undefined) return message.reply("That item doesnt exists lol");
  let isBalanceEnough = (userBalance.amount >= hasItem.cost);
  if (!isBalanceEnough) return message.reply("Your balance is insufficient. You need :dollar: "+hasItem.cost+" to buy this item.");
  let buy = client.eco.removeMoney(message.author.id, hasItem.cost);
  
  let itemStruct = {
    name: item.toLowerCase(),
    prize: hasItem.cost
  };
  
  client.db.push(`animals_${message.author.id}`, itemStruct);
  fullname+=`${item},`
  fullcost+=hasItem.cost
    }
  return message.channel.send(`You found: **${fullname}** for ** ${fullcost}💶
Gained ${xp}xp!**.`);
  
};

exports.help = {
  name: "hunt",
  aliases: ["HUNT","h"],
  usage: `hunt`
};
