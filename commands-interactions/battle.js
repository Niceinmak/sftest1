const { MessageEmbed,MessageButton,MessageActionRow } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;
module.exports = {
    description: 'Battle with other animals',
  options: [
        {
            name: 'user',
            description: 'Select a user',
            type: 'USER',
            required: false
        },
    ],
    run: async (client, interaction) => {
      await interaction.deferReply();
		await wait(10);
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
  let x = client.db.get(`teamanimals_${interaction.user.id}`);
      let animalcount=0
      let args_user=interaction.options.getUser('user')
      const arrayToObject1 = x.reduce((itemStruct, x1) => {
    itemStruct[x.name] = (itemStruct[x.name] || 0) + 1;
    animalcount++
    return itemStruct;
  }, {});
      if(animalcount!=3) interaction.editReply(`**You must have 3 animals in the team to be able to battle.**`)
      if(!args_user)
        {
        let botanimal1=""
        let botanimal2=""
        let botanimal3=""
        let botanimalcount=0
 const arrayToObject = x.reduce((itemsobj, x) => {
    itemsobj[x.name] = (itemsobj[x.name] || 0) + 1;
    return itemsobj;
  }, {});
  let name=""
  const result = Object.keys(arrayToObject).map(k =>
    name+=` ${k} ${arrayToObject[k]} `
    //embed.addField(`Name: ${k}`, `Quantity:**${arrayToObject[k]}**`, false)
  );
  var argString = name.substring(1).split(' ');
          const embed = new MessageEmbed()
  .setTitle(`${interaction.user.username}'s Team`)
  .setDescription(`**For all animals: \`/zoo\`**`)
  for(let l=0;l<7;l+=3)
    {
      for(let i=0;i<commonanimals.length;i++)
    {
      if(argString[l]==commonanimals[i])
        {
          embed.addField(`Rarities: <:common:949006743428542545>`, `Name: ${argString[l]} Quantity:\` ${argString[l+1]}\` `, false)
          if(botanimalcount==0)
            {
              botanimal1=commonanimals[Math.floor(Math.random() * commonanimals.length)]
            }
          else if(botanimalcount==1)
            {
              botanimal2=commonanimals[Math.floor(Math.random() * commonanimals.length)]
            }
         else if(botanimalcount==3)
            {
              botanimal3=commonanimals[Math.floor(Math.random() * commonanimals.length)]
            }
        }
    }
  for(let i=0;i<uncommonanimals.length;i++)
    {
      if(argString[l]==uncommonanimals[i])
        {
          embed.addField(`Rarities: <:uncommon:949006765696098345>`, `Name: ${argString[l]} Quantity:\` ${argString[l+1]}\` `, false)
          if(botanimalcount==0)
            {
              botanimal1=uncommonanimals[Math.floor(Math.random() * uncommonanimals.length)]
            }
          else if(botanimalcount==1)
            {
              botanimal2=uncommonanimals[Math.floor(Math.random() * uncommonanimals.length)]
            }
         else if(botanimalcount==3)
            {
              botanimal3=uncommonanimals[Math.floor(Math.random() * uncommonanimals.length)]
            }
        }
    }
  for(let i=0;i<rareanimals.length;i++)
    {
      if(argString[l]==rareanimals[i])
        {
         embed.addField(`Rarities: <:rare:949006777519837225>`, `Name: ${argString[l]} Quantity:\` ${argString[l+1]}\` `, false)
          if(botanimalcount==0)
            {
              botanimal1=rareanimals[Math.floor(Math.random() * rareanimals.length)]
            }
          else if(botanimalcount==1)
            {
              botanimal2=rareanimals[Math.floor(Math.random() * rareanimals.length)]
            }
         else if(botanimalcount==3)
            {
              botanimal3=rareanimals[Math.floor(Math.random() * rareanimals.length)]
            }
        }
    }
  for(let i=0;i<epicanimals.length;i++)
    {
      if(argString[l]==epicanimals[i])
        {
         embed.addField(`Rarities: <:epic:949006791201652827>`, `Name: ${argString[l]} Quantity:\` ${argString[l+1]}\` `, false)
          if(botanimalcount==0)
            {
              botanimal1=commonanimals[Math.floor(Math.random() * commonanimals.length)]
            }
          else if(botanimalcount==1)
            {
              botanimal2=commonanimals[Math.floor(Math.random() * commonanimals.length)]
            }
         else if(botanimalcount==3)
            {
              botanimal3=commonanimals[Math.floor(Math.random() * commonanimals.length)]
            }
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
  
  return interaction.editReply({embeds:[embed]});
        }
      else
        {
          
        }
        const embed = new MessageEmbed()
        .setTitle('Test')
        .setDescription(`Test Succesfuly`)
        .setThumbnail(client.user.avatarURL());
        const buton = new MessageButton().setLabel('EcoVerse Website').setStyle('LINK').setURL('http://ecoverse.ml');
        const row = new MessageActionRow().addComponents(buton)
    }
};
