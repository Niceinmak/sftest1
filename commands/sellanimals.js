const { MessageEmbed } = require("discord.js");
const anyLength = require('any-length');
exports.execute = async (client, message, args) => {
  let timecooldown = Math.floor(Math.random() * 200)+50;
    let playtime = await client.eco.work(client.ecoAddUser, timecooldown,{cooldown: 10000});
    const user1 = message.member.user
   if (playtime.onCooldown) return message.reply(`**Take it slow,wait ${playtime.time.seconds} more seconds**`);
    let data2= client.eco.removeMoney(message.author.id, parseInt(timecooldown));
  let userBalance = client.eco.fetchMoney(message.author.id);
  let itemname=" "
  let item = args[0];
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
   if(item=="god-1" || item=="god1" || item=="god") item="<:god:948265037313757184>"
   if(item=="cat" || item=="cat1") item="<:cat1:948265025850724372>"
   if(item=="fox-1" || item=="fox1" || item=="fox") item="<:fox:948265002492624976>"
   if(item=="bison-1" || item=="bison1" || item=="bison") item="<:bison:948264912818429962>"
   if(item=="tiger-1" || item=="tiger1" || item=="tiger") item="<:tiger:948264974856388639>"
   if(item=="leopard-1" || item=="leopard1" || item=="leopard") item="<:leopard:948264964597121146>"
   if(item=="horse-1" || item=="horse1" || item=="horse") item="<:horse:948264952198746112>"
   if(item=="deer-1" || item=="deer1" || item=="deer") item="<:deer:948264928387674213>"
   if(item=="ox-1" || item=="ox1" || item=="ox") item="<:ox:948264893629480981>"
   if(item=="pig-1" || item=="pig1" || item=="pig") item="<:pig:948264880417439804>"
   if(item=="goat-1" || item=="goat1" || item=="goat") item="<:goat:948264872850886687>"
   if(item=="llama-1" || item=="llama1" || item=="llama") item="<:llama:948264865552818196>"
   if(item=="mouse-1" || item=="mouse1" || item=="mouse") item="<:mouse:948264854551162910>"
   if(item=="rabbit-1" || item=="rabbit1" || item=="rabbit") item="<:rabbit:948264845520801882>"
   if(item=="koala-1" || item=="koala1" || item=="koala") item="<:koala:948264836322721862>"
   if(item=="bear-1" || item=="bear1" || item=="bear") item="<:bear:948264822926094426>"
   if(item=="bird-1" || item=="bird1" || item=="bird") item="<:bird:948264810980732988>"
  if(item=="penguin-1" || item=="penguin1" || item=="penguin") item="<:penguin:948264801698717728>"
  if(item=="dodo-1" || item=="dodo1" || item=="dodo") item="<:dodo:948264775639519232>"
  if(item=="trex-1" || item=="trex1" || item=="trex") item="<:trex1:948264765866786907>"
  if(item=="ant-1" || item=="ant1" || item=="ant") item="<:ant:948264757000040460>"
  if(!item)
    {
    const embed = new MessageEmbed()
        .setTitle(`Animal Sell`)
        .setDescription(`**Usage: \`q sellanimal <animal name>\`\nHover over the emoji to find the name of the animal.**`)
  .setThumbnail("https://i.imgur.com/r8EFIV8.png")
  return message.channel.send(embed);
    }
       let xp=0
  let earnmoney=0
  var word = new Boolean(false)
  var animal = new Boolean(false)
  let commonxp = Math.floor(Math.random() * 100) + 1;
  let uncommonxp = Math.floor(Math.random() * 500) + 1;
  let rarexp = Math.floor(Math.random() * 1000) + 1;
  let epicxp = Math.floor(Math.random() * 5000) + 1;
  let legendaryxp = Math.floor(Math.random() * 10000) + 1;
  let commonmoney = Math.floor(Math.random() * 30) + 1;
  let uncommonmoney = Math.floor(Math.random() * 50) + 1;
  let raremoney = Math.floor(Math.random() * 100) + 1;
  let epicmoney = Math.floor(Math.random() * 1000) + 1;
  let legendarymoney = Math.floor(Math.random() * 100000) + 1;
  let counter=0
  if(item=="all")
    {
      let x = client.db.get(`animals_${message.author.id}`);
      let items=``
        const arrayToObject = x.reduce((itemStruct, x) => {
     items+=x.name+` `
     counter++
    itemStruct[x.name] = (itemStruct[x.name] || 0) + 1;
    return itemStruct;
  }, {});
      let itemslenght=(anyLength(items))-1
      items="<"+items
      var argString = items.slice(0,itemslenght).substring(1).split(' ');
      for(let i=0;i<counter;i++)
        {
          
          item=argString[i]
          for(let i=0;i<commonanimals.length;i++)
    {
      if(item==commonanimals[i])
        {
          word=true
          xp+=commonxp
          earnmoney+=commonmoney
        }
    }
  for(let i=0;i<uncommonanimals.length;i++)
    {
      if(item==uncommonanimals[i])
        {
          word=true
          xp+=uncommonxp
          earnmoney+=uncommonmoney
        }
    }
  for(let i=0;i<rareanimals.length;i++)
    {
      if(item==rareanimals[i])
        {
          word=true
          xp+=rarexp
          earnmoney+=raremoney
        }
    }
  for(let i=0;i<epicanimals.length;i++)
    {
      if(item==epicanimals[i])
        {
          word=true
          xp+=epicxp
          earnmoney+=epicmoney
        }
    }
  for(let i=0;i<legendaryanimals.length;i++)
    {
      if(item==legendaryanimals[i])
        {
          word=true
          xp+=legendaryxp
          earnmoney+=legendarymoney
        }
    }
  let tempcount=0
  let count=0
  const arrayToObject = x.reduce((itemStruct, x) => {
    if(x.name==item)
      {
      count=tempcount
      animal=true
      }
    itemStruct[x.name] = (itemStruct[x.name] || 0) + 1;
    tempcount++
    return itemStruct;
  }, {});
  x.splice(count,1);
  client.db.set(`animals_${message.author.id}`, x)
    let amount = Math.floor(Math.random() * 200)+50;
        }
      item="All Animals"
    }
  else
  {
  for(let i=0;i<commonanimals.length;i++)
    {
      if(item==commonanimals[i])
        {
          word=true
          xp+=commonxp
          earnmoney+=commonmoney
        }
    }
  for(let i=0;i<uncommonanimals.length;i++)
    {
      if(item==uncommonanimals[i])
        {
          word=true
          xp+=uncommonxp
          earnmoney+=uncommonmoney
        }
    }
  for(let i=0;i<rareanimals.length;i++)
    {
      if(item==rareanimals[i])
        {
          word=true
          xp+=rarexp
          earnmoney+=raremoney
        }
    }
  for(let i=0;i<epicanimals.length;i++)
    {
      if(item==epicanimals[i])
        {
          word=true
          xp+=epicxp
          earnmoney+=epicmoney
        }
    }
  for(let i=0;i<legendaryanimals.length;i++)
    {
      if(item==legendaryanimals[i])
        {
          word=true
          xp+=legendaryxp
          earnmoney+=legendarymoney
        }
    }
  if(xp==0) return message.channel.send(`**${message.author.tag} | Animals not found**`);
  let test=""
  let x = client.db.get(`animals_${message.author.id}`);
    if (!x) {
    return message.channel.send(`${message.author.tag} | Animals not found`);
  }
  let tempcount=0
  let count=0
  const arrayToObject = x.reduce((itemStruct, x) => {
    if(x.name==item)
      {
      count=tempcount
      animal=true
      }
    itemStruct[x.name] = (itemStruct[x.name] || 0) + 1;
    tempcount++
    return itemStruct;
  }, {});
  if(animal==false)
    {
      return message.channel.send(`**${message.author.tag} | Animals not found**`);
    }
  const result = Object.keys(arrayToObject).map(k =>
       itemname+=k+" "+arrayToObject[k]+" "
  //   message.channel.send(`**${k} Kasasını Sattın ve ${randomcash},${quantity*randomcash}💶 kazandın.${quantity}$,${count1},${itemname},,,${agr1},,,${agr2},,,${agr3}**`)
  );
  var argString = x.toString().substring(1).split(",");
//  console.log(arrayToObject.slice(0).join(' '))
  
  x.splice(count,1);
  client.db.set(`animals_${message.author.id}`, x)
  var keyToDelete = '<:cat1:948265025850724372>';
    let amount = Math.floor(Math.random() * 200)+50;
    let amount3 = args[0]
  }
  
let userBalanceformat1=String(item).replace(/(.)(?=(\d{3})+$)/g,'$1,')
let userBalanceformat2=String(earnmoney).replace(/(.)(?=(\d{3})+$)/g,'$1,')
    client.eco.addMoney(`${message.author.id}12`, parseInt(xp));
  client.eco.addMoney(message.author.id, parseInt(earnmoney)); 
  message.channel.send(`**The sale was successful!\nSold:${userBalanceformat1}\nMoney earned:${userBalanceformat2}\nXP earned:${xp}**`);
  
}

exports.help = {
    name: "sellanimals",
    aliases: ["sellanimal","sellanimals","SELLANIMALS","SELLANIMAL"],
    usage: `sellanimals <animal>`
}
