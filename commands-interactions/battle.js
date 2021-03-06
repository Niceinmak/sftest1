const { MessageEmbed,MessageButton,MessageActionRow } = require('discord.js');
const moment = require("moment");
let ms = require('ms');
let db = require('quick.db');
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
      //--------------------------------------------------------------
            const timeout = 60000;
  const cooldown = await db.fetch(`cooldown_battle_${interaction.user.id}`);
      	if (cooldown !== null && timeout - (Date.now() - cooldown) > 0) {
		const time = ms(timeout - (Date.now() - cooldown));
          return interaction.editReply(`**Wait ${time} to message again**`)
	}
    db.set(`cooldown_battle_${interaction.user.id}`, Date.now());
      //---------------------------------------------------------------------------
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
  let userBalance = client.eco.fetchMoney(interaction.user.id);
  if (userBalance.amount < 10000) return interaction.editReply(`**Your money must be at least 10000.**`);
  let x = client.db.get(`teamanimals_${interaction.user.id}`);
   if (!x || !x.toString()) {
    return interaction.editReply(`**There are no animals in your team :(**`);
  }
      let args_user=interaction.options.getUser('user')
      if(!args_user)
        {
      let animalcount=0
      const arrayToObject1 = x.reduce((itemStruct, x1) => {
    itemStruct[x.name] = (itemStruct[x.name] || 0) + 1;
    animalcount++
    return itemStruct;
  }, {});
      if(animalcount!=3) return interaction.editReply(`**You must have 3 animals in the team to be able to battle.**`)
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
  for(let l=0;l<7;l+=3)
    {
      for(let i=0;i<commonanimals.length;i++)
    {
      if(argString[l]==commonanimals[i])
        {
          for(let i=0;i<argString[l+1];i++)
            {
          useranimals+=`Common ${argString[l]}\n\`50 HP\` \`C\`\n` 
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
          useranimals+=`Uncommon ${argString[l]}\n\`100 HP\` \`U\`\n` 
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
          useranimals+=`Rare ${argString[l]}\n\`150 HP\` \`R\`\n` 
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
          useranimals+=`Epic ${argString[l]}\n\`200 HP\` \`E\`\n` 
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
          useranimals+=`Legendary ${argString[l]}\n\`250 HP\` \`L\`\n` 
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
        let money = Math.floor(Math.random() * 10000);
          if(money==10000) money=9999
        let xpu = Math.floor(Math.random() * 5000)+500;
          let losewin=""
          let embeddesc="Round 1 Playing..."
          embed.setDescription(`${embeddesc}`)
           embed.setColor("GREY")
          embed.addFields(
		{ name: 'Player Team', value: `${useranimals}`, inline: true },
    { name: 'Enemy Team', value: `${botanimals}`, inline: true },
	)
   embed.setAuthor({ name: 'Niceinmak goes into battle!', iconURL:interaction.user.displayAvatarURL()})
   interaction.editReply({embeds:[embed]});
      let uwin=0
      let bwin=0
      let uwincount=``
      let bwincount=``
    for(let i=1;i<=5;i++)
      {
		await wait(2000);
        let lucky =0
        if(battlexpuser>battlexpbot)lucky = Math.floor(Math.random() * 120);
        else if(battlexpuser==battlexpbot) lucky = Math.floor(Math.random() * 120);
        else lucky = Math.floor(Math.random() * 80);
        if(lucky>50)
          {
            uwin++
            uwincount+=`${i} W | `
            bwincount+=`${i} L | `
            embeddesc=`Round Win!\nNew Round Playing...`
          }
         else
           {
            bwin++
             uwincount+=`${i} L | `
            bwincount+=`${i} W | `
            embeddesc=`Round Lose :(\nNew Round Playing...`
           }
          embed.setDescription(`**${embeddesc}**\n\`${uwincount}\`\n\`${bwincount}\``)
   interaction.editReply({embeds:[embed]});
      }
		await wait(1000);
          if(uwin>bwin)
            {
          client.eco.addMoney(`${interaction.user.id}12`, parseInt(xpu));
            client.eco.addMoney(interaction.user.id, parseInt(money));
              embeddesc=`You won the battle!\nYou:\`${uwin}\` Enemy:\`${bwin}\``
	embed.setFooter({ text: `XP ${xpu}+ | Money :${money}+` });
           embed.setColor("GREEN")
            }
          else
            {
          client.eco.removeMoney(interaction.user.id, parseInt(money));
              embeddesc=`You lost the battle :o\nYou:\`${uwin}\` Enemy:\`${bwin}\``
	embed.setFooter({ text: `XP ${xpu}+ | Money:${money}-` });
           embed.setColor("RED")
            }
    embed.setDescription(`**${embeddesc}**\n\`${uwincount}\`\n\`${bwincount}\``)
   return interaction.editReply({embeds:[embed]});
          function commoncard()
          {
                   if(botanimalcount==0)
            {
              botanimal1=commonanimals[Math.floor(Math.random() * commonanimals.length)]
              battlexpbot+=50
              botanimals+=`Common ${botanimal1}\n\`50 HP\` \`C\`\n` 
              botanimalcount++
            }
          else if(botanimalcount==1)
            {
              botanimal2=commonanimals[Math.floor(Math.random() * commonanimals.length)]
              battlexpbot+=50
              botanimals+=`Common ${botanimal2}\n\`50 HP\` \`C\`\n` 
              botanimalcount++
            }
         else if(botanimalcount==2)
            {
              botanimal3=commonanimals[Math.floor(Math.random() * commonanimals.length)]
              battlexpbot+=50
              botanimals+=`Common ${botanimal3}\n\`50 HP\` \`C\`\n` 
              botanimalcount++
            }
          }
          function uncommoncard()
          {
              if(botanimalcount==0)
            {
              botanimal1=uncommonanimals[Math.floor(Math.random() * uncommonanimals.length)]
              battlexpbot+=100
              botanimals+=`Uncommon ${botanimal1}\n\`100 HP\` \`U\`\n` 
              botanimalcount++
            }
          else if(botanimalcount==1)
            {
              botanimal2=uncommonanimals[Math.floor(Math.random() * uncommonanimals.length)]
              battlexpbot+=100
              botanimals+=`Uncommon ${botanimal2}\n\`100 HP\` \`U\`\n` 
              botanimalcount++
            }
         else if(botanimalcount==2)
            {
              botanimal3=uncommonanimals[Math.floor(Math.random() * uncommonanimals.length)]
              battlexpbot+=100
              botanimals+=`Uncommon ${botanimal3}\n\`100 HP\` \`U\`\n` 
              botanimalcount++
            }
          }
          function rarecard()
          {
             if(botanimalcount==0)
            {
              botanimal1=rareanimals[Math.floor(Math.random() * rareanimals.length)]
              battlexpbot+=150
              botanimals+=`Rare ${botanimal1}\n\`150 HP\` \`R\`\n` 
              botanimalcount++
            }
          else if(botanimalcount==1)
            {
              botanimal2=rareanimals[Math.floor(Math.random() * rareanimals.length)]
              battlexpbot+=150
              botanimals+=`Rare ${botanimal2}\n\`150 HP\` \`R\`\n` 
              botanimalcount++
            }
         else if(botanimalcount==2)
            {
              botanimal3=rareanimals[Math.floor(Math.random() * rareanimals.length)]
              battlexpbot+=150
              botanimals+=`Rare ${botanimal3}\n\`150 HP\` \`R\`\n` 
              botanimalcount++
            }
          }
          function epiccard()
          {
               if(botanimalcount==0)
            {
              botanimal1=epicanimals[Math.floor(Math.random() * epicanimals.length)]
              battlexpbot+=200
              botanimals+=`Epic ${botanimal1}\n\`200 HP\` \`E\`\n` 
              botanimalcount++
            }
          else if(botanimalcount==1)
            {
              botanimal2=epicanimals[Math.floor(Math.random() * epicanimals.length)]
              battlexpbot+=200
              botanimals+=`Epic ${botanimal2}\n\`200 HP\` \`E\`\n` 
              botanimalcount++
            }
         else if(botanimalcount==2)
            {
              botanimal3=epicanimals[Math.floor(Math.random() * epicanimals.length)]
              battlexpbot+=200
              botanimals+=`Epic ${botanimal3}\n\`200 HP\` \`E\`\n` 
              botanimalcount++
            }
          }
          function legendarycard()
          {
                if(botanimalcount==0)
            {
              botanimal1=legendaryanimals[Math.floor(Math.random() * legendaryanimals.length)]
              battlexpbot+=250
              botanimals+=`Legendary ${botanimal1}\n\`250 HP\` \`L\`\n` 
              botanimalcount++
            }
          else if(botanimalcount==1)
            {
              botanimal2=legendaryanimals[Math.floor(Math.random() * legendaryanimals.length)]
              battlexpbot+=250
              botanimals+=`Legendary ${botanimal2}\n\`250 HP\` \`L\`\n` 
              botanimalcount++
            }
         else if(botanimalcount==2)
            {
              botanimal3=legendaryanimals[Math.floor(Math.random() * legendaryanimals.length)]
              battlexpbot+=250
              botanimals+=`Legendary ${botanimal3}\n\`250 HP\` \`L\`\n` 
              botanimalcount++
            }
          }
        }
          }
      else
        {
          
  let userBalance2 = client.eco.fetchMoney(args_user.id);
  if (userBalance2.amount < 10000) return interaction.editReply(`**Your friend must have at least 10000 cash**`);
           let animalcount=0
      const arrayToObject1 = x.reduce((itemStruct, x1) => {
    itemStruct[x.name] = (itemStruct[x.name] || 0) + 1;
    animalcount++
    return itemStruct;
  }, {});
      if(animalcount!=3) return interaction.editReply(`**You must have 3 animals in the team to be able to battle.**`)
  let x1=client.db.get(`teamanimals_${args_user.id}`);
   if (!x1 || !x1.toString()) {
    return interaction.editReply(`**User has no animals (${args_user.username})**`);
  }
    let animalcountuser=0
      const arrayToObject2 = x1.reduce((itemStruct, x1) => {
    itemStruct[x1.name] = (itemStruct[x1.name] || 0) + 1;
    animalcountuser++
    return itemStruct;
  }, {});
      if(animalcountuser!=3) return interaction.editReply(`**You must have 3 animals in the team to be able to battle.**`)
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
  let argsuseranimals=""
  let battlexpuser=0
  let battlexpargsuser=0
  var argString = name.substring(1).split(' ');
          const embed = new MessageEmbed()
  for(let l=0;l<7;l+=3)
    {
      for(let i=0;i<commonanimals.length;i++)
    {
      if(argString[l]==commonanimals[i])
        {
          for(let i=0;i<argString[l+1];i++)
            {
          useranimals+=`Common ${argString[l]}\n\`50 HP\` \`C\`\n` 
          battlexpuser+=50
           
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
          useranimals+=`Uncommon ${argString[l]}\n\`100 HP\` \`U\`\n` 
          battlexpuser+=100
            }
          
        }
    }
  for(let i=0;i<rareanimals.length;i++)
    {
      if(argString[l]==rareanimals[i])
        {
          for(let i=0;i<argString[l+1];i++)
            {
          useranimals+=`Rare ${argString[l]}\n\`150 HP\` \`R\`\n` 
          battlexpuser+=150
           
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
          useranimals+=`Epic ${argString[l]}\n\`200 HP\` \`E\`\n` 
          battlexpuser+=200
          
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
          useranimals+=`Legendary ${argString[l]}\n\`250 HP\` \`L\`\n` 
          battlexpuser+=250
          
            }
         //embed.addField(`Rarities: <:legendary:949006805646864404>`, `Name: ${argString[l]} Quantity:\` ${argString[l+1]}\` `, false)
         
        }
    }
    }
          name=""
          const result2 = Object.keys(arrayToObject2).map(k =>
    name+=` ${k} ${arrayToObject2[k]} `
    //embed.addField(`Name: ${k}`, `Quantity:**${arrayToObject[k]}**`, false)
  );
  var argString = name.substring(1).split(' ');
           for(let l=0;l<7;l+=3)
    {
      for(let i=0;i<commonanimals.length;i++)
    {
      if(argString[l]==commonanimals[i])
        {
          for(let i=0;i<argString[l+1];i++)
            {
          argsuseranimals+=`Common ${argString[l]}\n\`50 HP\` \`C\`\n` 
          battlexpargsuser+=50
           
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
          argsuseranimals+=`Uncommon ${argString[l]}\n\`100 HP\` \`U\`\n` 
          battlexpargsuser+=100
            }
          
        }
    }
  for(let i=0;i<rareanimals.length;i++)
    {
      if(argString[l]==rareanimals[i])
        {
          for(let i=0;i<argString[l+1];i++)
            {
          argsuseranimals+=`Rare ${argString[l]}\n\`150 HP\` \`R\`\n` 
          battlexpargsuser+=150
           
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
          argsuseranimals+=`Epic ${argString[l]}\n\`200 HP\` \`E\`\n` 
          battlexpargsuser+=200
          
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
          argsuseranimals+=`Legendary ${argString[l]}\n\`250 HP\` \`L\`\n` 
          battlexpargsuser+=250
          
            }
         //embed.addField(`Rarities: <:legendary:949006805646864404>`, `Name: ${argString[l]} Quantity:\` ${argString[l+1]}\` `, false)
         
        }
    }
    }
          interaction.editReply(`<@${args_user.id}>`)
        let money = Math.floor(Math.random() * 10000);
          if(money==10000) money=9999
        let xpu = Math.floor(Math.random() * 5000)+500;
          let losewin=""
          let embeddesc=`**Player waiting...**`
          embed.setDescription(`${embeddesc}`)
           embed.setColor("GREY")
          embed.addFields(
		{ name: `${interaction.user.username} Team`, value: `${useranimals}`, inline: true },  
		{ name: `${args_user.username} Team`, value: `${argsuseranimals}`, inline: true }  
	)
   embed.setAuthor({ name: `${args_user.username},${interaction.user.username} wants to battle you!`, iconURL:interaction.user.displayAvatarURL()})
  const buton = new MessageButton().setCustomId('primary').setLabel('Accept').setStyle('PRIMARY').setDisabled(false);
  const buton2 = new MessageButton().setCustomId('danger').setLabel('Decline').setStyle('DANGER').setDisabled(false);
  const row = new MessageActionRow().addComponents(buton).addComponents(buton2)
   interaction.editReply({embeds:[embed],components:[row]});
   const filter = i => (i.customId === 'primary' || i.customId==='danger') && i.user.id === args_user.id;

const collector = interaction.channel.createMessageComponentCollector({filter,time: 15000 });

collector.on('collect', async i => {
  const buton = new MessageButton().setCustomId('primary').setLabel('Accept').setStyle('PRIMARY').setDisabled(true);
  const buton2 = new MessageButton().setCustomId('danger').setLabel('Decline').setStyle('DANGER').setDisabled(true);
  const row = new MessageActionRow().addComponents(buton).addComponents(buton2)
   interaction.editReply({embeds:[embed],components:[row]});
		i.deferUpdate();
	if (i.customId === 'primary') {
    let uwin=0
      let argwin=0
      let uwincount=``
      let argwincount=``
    for(let i=1;i<=5;i++)
      {
		await wait(2000);
        let lucky =0
        if(battlexpuser>battlexpargsuser)lucky = Math.floor(Math.random() * 120);
        else if(battlexpuser==battlexpargsuser) lucky = Math.floor(Math.random() * 120);
        else lucky = Math.floor(Math.random() * 80);
        if(lucky>50)
          {
            uwin++
            uwincount+=`${i} W | `
            argwincount+=`${i} L | `
            embeddesc=`${interaction.user.username} Won The Round!\nNew Round Playing...`
          }
         else
           {
            argwin++
             uwincount+=`${i} L | `
            argwincount+=`${i} W | `
            embeddesc=`${args_user.username} Won The Round!\nNew Round Playing...`
           }
          embed.setDescription(`**${embeddesc}**\n\`${uwincount}\`\n\`${argwincount}\``)
   interaction.editReply({embeds:[embed]});
      }
		await wait(1000);
          if(uwin>argwin)
            {
          client.eco.removeMoney(args_user.id, parseInt(money));
          client.eco.addMoney(`${interaction.user.id}12`, parseInt(xpu));
            client.eco.addMoney(interaction.user.id, parseInt(money));
              embeddesc=`${interaction.user.username} Won The Battle!\n${interaction.user.username}:\`${uwin}\` ${args_user.username}:\`${argwin}\``
	embed.setFooter({ text: `XP ${xpu}+ | Money :${money}+` });
           embed.setColor("GREEN")
            }
          else
            {
          client.eco.removeMoney(interaction.user.id, parseInt(money));
          client.eco.addMoney(`${args_user.id}12`, parseInt(xpu));
            client.eco.addMoney(args_user.id, parseInt(money));
              embeddesc=`${args_user.username} Won The Battle!\n${interaction.user.username}:\`${uwin}\` ${args_user.username}:\`${argwin}\``
	embed.setFooter({ text: `XP ${xpu}+ | Money:${money}-` });
           embed.setColor("GREEN")
            }
    embed.setDescription(`**${embeddesc}**\n\`${uwincount}\`\n\`${argwincount}\``)
   return interaction.editReply({embeds:[embed]});
	}
  else
    {
      const embed2 = new MessageEmbed()
        	.setColor('#0099ff')
	.setTitle('The user fled the war!')
  const buton = new MessageButton().setCustomId('primary').setLabel('Accept').setStyle('PRIMARY').setDisabled(true);
  const buton2 = new MessageButton().setCustomId('danger').setLabel('Decline').setStyle('DANGER').setDisabled(true);
  const row = new MessageActionRow().addComponents(buton).addComponents(buton2)
    return interaction.editReply({
           embeds:[embed2],
           components:[row]
       })
    }
});
          
          
        }
    }
};
