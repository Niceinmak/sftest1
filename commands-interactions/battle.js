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
  let useranimals=""
  let botanimals="  "
  let battlexpbot=0
  let battlexpuser=0
  var argString = name.substring(1).split(' ');
          const embed = new MessageEmbed()
  .setTitle(`${interaction.user.username} VS Bot`)
           .setColor("GREEN")
  for(let l=0;l<7;l+=3)
    {
      for(let i=0;i<commonanimals.length;i++)
    {
      if(argString[l]==commonanimals[i])
        {
          for(let i=0;i<argString[l+1];i++)
            {
          useranimals+=`Common ${argString[l]}\n\`50 HP\`\n` 
          battlexpuser+=50
          let lucky = Math.floor(Math.random() * 2);
            if(lucky==0)
              {
              commoncard();
              }
              else
                {
                uncommoncard();
                }
           
            }
          //embed.addField(`Rarities: <:common:949006743428542545>`, `Name: ${argString[l]} Quantity:\` ${argString[l+1]}\` `, false)
         
        }
    }
  for(let i=0;i<uncommonanimals.length;i++)
    {
      if(argString[l]==uncommonanimals[i])
        {
          for(let i=0;i<argString[l+1];i++)
            {
          useranimals+=`Uncommon ${argString[l]}\n\`50 HP\`\n` 
          battlexpuser+=100
            }
          let lucky = Math.floor(Math.random() * 3);
          //embed.addField(`Rarities: <:uncommon:949006765696098345>`, `Name: ${argString[l]} Quantity:\` ${argString[l+1]}\` `, false)
          if(lucky==0)
            {
           commoncard();
            }
          else if(lucky==1)
            {
            uncommoncard();
            }
          else
            {
           rarecard();
            }
          
        }
    }
  for(let i=0;i<rareanimals.length;i++)
    {
      if(argString[l]==rareanimals[i])
        {
          for(let i=0;i<argString[l+1];i++)
            {
          useranimals+=`Rare ${argString[l]}\n\`50 HP\`\n` 
          battlexpuser+=150
          let lucky = Math.floor(Math.random() * 3);
              if(lucky==0)
                {
            uncommoncard();
                }
              else if(lucky==1)
                {
              rarecard();
                }
              else
                {
               epiccard();
                }
           
            }
         //embed.addField(`Rarities: <:rare:949006777519837225>`, `Name: ${argString[l]} Quantity:\` ${argString[l+1]}\` `, false)
         
        }
    }
  for(let i=0;i<epicanimals.length;i++)
    {
      if(argString[l]==epicanimals[i])
        {
          for(let i=0;i<argString[l+1];i++)
            {
          useranimals+=`Epic ${argString[l]}\n\`50 HP\`\n` 
          battlexpuser+=200
          let lucky = Math.floor(Math.random() * 3);
              if(lucky==0)
                {
              rarecard();
                }
              else if(lucky==1)
                {
              epiccard();
                }
              else
                {
              legendarycard();
                }
          
            }
         //embed.addField(`Rarities: <:epic:949006791201652827>`, `Name: ${argString[l]} Quantity:\` ${argString[l+1]}\` `, false)
          
        }
    }
  for(let i=0;i<legendaryanimals.length;i++)
    {
      if(argString[l]==legendaryanimals[i])
        {
          for(let i=0;i<argString[l+1];i++)
            {
          useranimals+=`Legendary ${argString[l]}\n\`50 HP\`\n` 
          battlexpuser+=250
          let lucky = Math.floor(Math.random() * 2);
              if(lucky==0)
                {
               epiccard();
                }
              else
                {
               legendarycard();
                }
          
            }
         //embed.addField(`Rarities: <:legendary:949006805646864404>`, `Name: ${argString[l]} Quantity:\` ${argString[l+1]}\` `, false)
         
        }
    }
    }
          console.log(botanimal1,botanimal2,botanimal3)
          embed.addFields(
		{ name: 'Player Team', value: `${useranimals}`, inline: true },
    { name: 'Enemy Team', value: `${botanimals}`, inline: true }
	)
          //embed.setTitle(`${useranimals}`)
  //embed.setTitle(`${botanimal1},${botanimal2},${botanimal3}`)
  return interaction.editReply({embeds:[embed]});
          function commoncard()
          {
                   if(botanimalcount==0)
            {
              botanimal1=commonanimals[Math.floor(Math.random() * commonanimals.length)]
              battlexpbot+=50
              botanimals+=`<:common:949006743428542545> ${botanimal1} | ` 
              botanimalcount++
            }
          else if(botanimalcount==1)
            {
              botanimal2=commonanimals[Math.floor(Math.random() * commonanimals.length)]
              battlexpbot+=50
              botanimals+=`<:common:949006743428542545> ${botanimal2} | ` 
              botanimalcount++
            }
         else if(botanimalcount==2)
            {
              botanimal3=commonanimals[Math.floor(Math.random() * commonanimals.length)]
              battlexpbot+=50
              botanimals+=`<:common:949006743428542545> ${botanimal3} | ` 
              botanimalcount++
            }
          }
          function uncommoncard()
          {
              if(botanimalcount==0)
            {
              botanimal1=uncommonanimals[Math.floor(Math.random() * uncommonanimals.length)]
              battlexpbot+=100
              botanimals+=`<:uncommon:949006765696098345> ${botanimal1} | ` 
              botanimalcount++
            }
          else if(botanimalcount==1)
            {
              botanimal2=uncommonanimals[Math.floor(Math.random() * uncommonanimals.length)]
              battlexpbot+=100
              botanimals+=`<:uncommon:949006765696098345> ${botanimal2} | ` 
              botanimalcount++
            }
         else if(botanimalcount==2)
            {
              botanimal3=uncommonanimals[Math.floor(Math.random() * uncommonanimals.length)]
              battlexpbot+=100
              botanimals+=`<:uncommon:949006765696098345> ${botanimal3} | ` 
              botanimalcount++
            }
          }
          function rarecard()
          {
             if(botanimalcount==0)
            {
              botanimal1=rareanimals[Math.floor(Math.random() * rareanimals.length)]
              battlexpbot+=150
              botanimals+=`<:rare:949006777519837225> ${botanimal1} | ` 
              botanimalcount++
            }
          else if(botanimalcount==1)
            {
              botanimal2=rareanimals[Math.floor(Math.random() * rareanimals.length)]
              battlexpbot+=150
              botanimals+=`<:rare:949006777519837225> ${botanimal2} | ` 
              botanimalcount++
            }
         else if(botanimalcount==2)
            {
              botanimal3=rareanimals[Math.floor(Math.random() * rareanimals.length)]
              battlexpbot+=150
              botanimals+=`<:rare:949006777519837225> ${botanimal3} | ` 
              botanimalcount++
            }
          }
          function epiccard()
          {
               if(botanimalcount==0)
            {
              botanimal1=epicanimals[Math.floor(Math.random() * epicanimals.length)]
              battlexpbot+=200
              botanimals+=`<:epic:949006791201652827> ${botanimal1} | ` 
              botanimalcount++
            }
          else if(botanimalcount==1)
            {
              botanimal2=epicanimals[Math.floor(Math.random() * epicanimals.length)]
              battlexpbot+=200
              botanimals+=`<:epic:949006791201652827> ${botanimal2} | ` 
              botanimalcount++
            }
         else if(botanimalcount==2)
            {
              botanimal3=epicanimals[Math.floor(Math.random() * epicanimals.length)]
              battlexpbot+=200
              botanimals+=`<:epic:949006791201652827> ${botanimal3} | ` 
              botanimalcount++
            }
          }
          function legendarycard()
          {
                if(botanimalcount==0)
            {
              botanimal1=legendaryanimals[Math.floor(Math.random() * legendaryanimals.length)]
              battlexpbot+=250
              botanimals+=`<:legendary:949006805646864404> ${botanimal1} | ` 
              botanimalcount++
            }
          else if(botanimalcount==1)
            {
              botanimal2=legendaryanimals[Math.floor(Math.random() * legendaryanimals.length)]
              battlexpbot+=250
              botanimals+=`<:legendary:949006805646864404> ${botanimal2} | ` 
              botanimalcount++
            }
         else if(botanimalcount==2)
            {
              botanimal3=legendaryanimals[Math.floor(Math.random() * legendaryanimals.length)]
              battlexpbot+=250
              botanimals+=`<:legendary:949006805646864404> ${botanimal3} | ` 
              botanimalcount++
            }
          }
        }
        const embed = new MessageEmbed()
        .setTitle('Test')
        .setDescription(`Test Succesfuly`)
        .setThumbnail(client.user.avatarURL());
        const buton = new MessageButton().setLabel('EcoVerse Website').setStyle('LINK').setURL('http://ecoverse.ml');
        const row = new MessageActionRow().addComponents(buton)
    }
};
