const { MessageEmbed,MessageButton,MessageActionRow } = require('discord.js');

module.exports = {
    description: 'Add animals to your team',
      options: [
       {
            name: 'process',
            description: 'Select a process',
            type: 'STRING',
            required: false,
         choices: [
   {
     name: "Add Animal",
     value: "add",
   },
   {
     name: "Remove Animal",
     value: "remove",
   }
]
        },
        {
            name: 'select_animal',
            description: 'Select animal',
            type: 'STRING',
            required: false,
            choices: [
   {
     name: "God",
     value: "god",
   },
   {
     name: "Cat",
     value: "cat",
   },
   {
     name: "Fox",
     value: "fox",
   },
   {
     name: "Bison",
     value: "bison",
   },
   {
     name: "Tiger",
     value: "tiger",
   },
   {
     name: "Leopard",
     value: "leopard",
   },
   {
     name: "Horse",
     value: "horse",
   },
   {
     name: "Deer",
     value: "deer",
   },
   {
     name: "Ox",
     value: "ox",
   },
   {
     name: "Pig",
     value: "pig",
   },
   {
     name: "Goat",
     value: "goat",
   },
   {
     name: "Llama",
     value: "llama",
   },
   {
     name: "Mouse",
     value: "mouse",
   },
   
   {
     name: "Rabbit",
     value: "rabbit",
   },
   {
     name: "Koala",
     value: "koala",
   },
   {
     name: "Bear",
     value: "bear",
   },
   {
     name: "Bird",
     value: "bird",
   },
   {
     name: "Penguin",
     value: "penguin",
   },
   {
     name: "Dodo",
     value: "dodo",
   },
   {
     name: "T-Rex",
     value: "trex",
   },
   {
     name: "Ant",
     value: "ant",
   },
   
]
        },
    ],
  
    run: async (client, interaction) => {
       let user = interaction.user;
  let userBalance = client.eco.fetchMoney(interaction.user.id);
  let itemname=" "
  let event=""
  let item=""
  if(!interaction.options.get("process"))
    {
    event=""
    }
      else
        {
   event = interaction.options.get("process").value;
        }
      if(!interaction.options.get("select_animal"))
    {
     item=""
    }
      else
        {
   item = interaction.options.get("select_animal").value;
        }
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
  let x = client.db.get(`animals_${interaction.user.id}`);
  let x1 = client.db.get(`teamanimals_${interaction.user.id}`);
  if(event=="add")
    {
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
      var word = new Boolean(false)
      var animal = new Boolean(false)
      for(let i=0;i<commonanimals.length;i++)
    {
      if(item==commonanimals[i])
        {
          word=true
        }
    }
  for(let i=0;i<uncommonanimals.length;i++)
    {
      if(item==uncommonanimals[i])
        {
          word=true
        }
    }
  for(let i=0;i<rareanimals.length;i++)
    {
      if(item==rareanimals[i])
        {
          word=true
        }
    }
  for(let i=0;i<epicanimals.length;i++)
    {
      if(item==epicanimals[i])
        {
          word=true
        }
    }
  for(let i=0;i<legendaryanimals.length;i++)
    {
      if(item==legendaryanimals[i])
        {
          word=true
        }
    }
     if(word==false)
       {
         return interaction.reply(`**${interaction.user.username} | Animals not found**`);
       }
      let tempcount=0
      let tempcount2=0
  let count=0
  const arrayToObject = x.reduce((itemStruct, x) => {
    if(x.name==item)
      {
      count=tempcount2
      animal=true
      }
    tempcount2++
    itemStruct[x.name] = (itemStruct[x.name] || 0) + 1;
    return itemStruct;
  }, {});
      if (!x1) {
      }
      else
        {
      const arrayToObject1 = x1.reduce((itemStruct, x1) => {
    itemStruct[x.name] = (itemStruct[x.name] || 0) + 1;
    tempcount++
    return itemStruct;
  }, {});
        }
      if(tempcount==3)
        {
          return interaction.reply(`**No more animals can be added to the team.**`)
        }
      if(animal==false)
    {
      return interaction.reply(`**${interaction.user.username} | Animals not found**`);
    }
      var argString = x.toString().substring(1).split(",");
//  console.log(arrayToObject.slice(0).join(' '))
      let hasItem = client.shop[item];
  if (!hasItem || hasItem == undefined) return interaction.reply("That item doesnt exists lol");
  let itemStruct = {
    name: item.toLowerCase(),
    prize: hasItem.cost
  };
  x.splice(count,1);
  client.db.set(`animals_${interaction.user.id}`, x)
  client.db.push(`teamanimals_${interaction.user.id}`, itemStruct);
  return interaction.reply("The animal has been added to the team!")
    }
  else if(event=="remove")
    {
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
      var word = new Boolean(false)
      var animal = new Boolean(false)
      for(let i=0;i<commonanimals.length;i++)
    {
      if(item==commonanimals[i])
        {
          word=true
        }
    }
  for(let i=0;i<uncommonanimals.length;i++)
    {
      if(item==uncommonanimals[i])
        {
          word=true
        }
    }
  for(let i=0;i<rareanimals.length;i++)
    {
      if(item==rareanimals[i])
        {
          word=true
        }
    }
  for(let i=0;i<epicanimals.length;i++)
    {
      if(item==epicanimals[i])
        {
          word=true
        }
    }
  for(let i=0;i<legendaryanimals.length;i++)
    {
      if(item==legendaryanimals[i])
        {
          word=true
        }
    }
      if(word==false)
       {
         return interaction.reply(`**${interaction.user.username} | Animals not found**`);
       }
       if (!x1) {
    return interaction.reply(`${interaction.user.username} | Animals not found`);
  }
      let tempcount=0
      let tempcount2=0
  let count=0
  const arrayToObject = x1.reduce((itemStruct, x1) => {
    if(x1.name==item)
      {
      count=tempcount2
      animal=true
      }
    //console.log(x1.name,item,tempcount2,count)
    tempcount2++
    itemStruct[x.name] = (itemStruct[x.name] || 0) + 1;
    tempcount++
    return itemStruct;
  }, {});
      if(animal==false || tempcount==0)
    {
      return interaction.reply(`**${interaction.user.username} | Animals not found**`);
    }
            let hasItem = client.shop[item];
  if (!hasItem || hasItem == undefined) return interaction.reply("That item doesnt exists lol");
  let itemStruct = {
    name: item.toLowerCase(),
    prize: hasItem.cost
  };
      var argString = x1.toString().substring(1).split(",");
      x1.splice(count,1);
  client.db.set(`teamanimals_${interaction.user.id}`, x1)
  client.db.push(`animals_${interaction.user.id}`, itemStruct);
      return interaction.reply(`**The animal has been removed to the team!**`);
    }
      if (!x) {
    const embed = new MessageEmbed()
        .setTitle(`Team No Found`)
    .setDescription(`**Team not found\nTo add animals to the team: \`q team add\`\nTo delete animal from team: \`q team remove\`**`)
  return interaction.reply({embeds:[embed]});
  }
    if (!x1) {
    const embed = new MessageEmbed()
        .setTitle(`Team No Found`)
    .setDescription(`**Team not found\nTo add animals to the team: \`q team add\`\nTo delete animal from team: \`q team remove\`**`)
  return interaction.reply({embeds:[embed]});
  }
  let tempcount=0
  const arrayToObject = x1.reduce((itemsobj, x1) => {
    itemsobj[x1.name] = (itemsobj[x1.name] || 0) + 1;
    tempcount++
    return itemsobj;
  }, {});
     if (tempcount==0) {
    const embed = new MessageEmbed()
        .setTitle(`Team No Found`)
    .setDescription(`**Team not found\nTo add animals to the team: \`q team add\`\nTo delete animal from team: \`q team remove\`**`)
  return interaction.reply({embeds:[embed]});
  }
  let name=""
  const result = Object.keys(arrayToObject).map(k =>
    name+=` ${k} ${arrayToObject[k]} `
    //embed.addField(`Name: ${k}`, `Quantity:**${arrayToObject[k]}**`, false)
  );
  var argString = name.substring(1).split(' ');
  const embed = new MessageEmbed()
  .setTitle(`${user.username}'s Team`)
  .setDescription(`**For all animals: \`/zoo\`**`)
  for(let l=0;l<7;l+=3)
    {
      for(let i=0;i<commonanimals.length;i++)
    {
      if(argString[l]==commonanimals[i])
        {
          embed.addField(`Rarities: <:common:949006743428542545>`, `Name: ${argString[l]} Quantity:\` ${argString[l+1]}\` `, false)
        }
    }
  for(let i=0;i<uncommonanimals.length;i++)
    {
      if(argString[l]==uncommonanimals[i])
        {
          embed.addField(`Rarities: <:uncommon:949006765696098345>`, `Name: ${argString[l]} Quantity:\` ${argString[l+1]}\` `, false)
        }
    }
  for(let i=0;i<rareanimals.length;i++)
    {
      if(argString[l]==rareanimals[i])
        {
         embed.addField(`Rarities: <:rare:949006777519837225>`, `Name: ${argString[l]} Quantity:\` ${argString[l+1]}\` `, false)
        }
    }
  for(let i=0;i<epicanimals.length;i++)
    {
      if(argString[l]==epicanimals[i])
        {
         embed.addField(`Rarities: <:epic:949006791201652827>`, `Name: ${argString[l]} Quantity:\` ${argString[l+1]}\` `, false)
        }
    }
  for(let i=0;i<legendaryanimals.length;i++)
    {
      if(argString[l]==legendaryanimals[i])
        {
         embed.addField(`Rarities: <:legendary:949006805646864404>`, `Name: ${argString[l]} Quantity:\` ${argString[l+1]}\` `, false)
        }
    }
    }
  
  return interaction.reply({embeds:[embed]});
    }
};
