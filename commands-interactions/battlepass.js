const { MessageEmbed,MessageButton,MessageActionRow } = require('discord.js');
const moment = require("moment");
let ms = require('ms');
let db = require('quick.db');
const wait = require('node:timers/promises').setTimeout;
module.exports = {
    description: 'battlepass command',
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
      let levels = []
      let prizes=[30,50,100,150,200,250,350,500,650,800,1000,1200,1450,1600,270]
      for(let i=0;i<=20;i++)
        {
          levels.push(i)
        }
      let levelcount=1
      let mainlevel=selectLevel(levelcount)
        const embed = new MessageEmbed()
        	.setColor('#0099ff')
	.setTitle('EcoVerse Battle Pass')
        .setDescription(`***Your point:${client.db.get(`battlepass_${interaction.user.id}.point`)}<:ticket:965658088885583892>***`)
	.setThumbnail(interaction.user.displayAvatarURL({ format: 'png' }))
	.addFields(
		{ name: 'Level 1 [10]<:ticket:965658088885583892>', value: `**Prize**;\n***10,000:euro: Cash***\n${mainlevel}` },
	)
	.setTimestamp()
	.setFooter({ text: `${interaction.user.username}`});
      const buton = new MessageButton().setCustomId('primary1').setEmoji('<:leftarrow:965666012794069003>').setStyle('PRIMARY').setDisabled(true);
      const buton2 = new MessageButton().setCustomId('primary2').setEmoji('<:rightarrow:965666012911521841>').setStyle('PRIMARY').setDisabled(false);
        const row = new MessageActionRow().addComponents(buton).addComponents(buton2)
       interaction.editReply({
           embeds:[embed],
           components:[row],
       })
         const filter = i => i.user.id === interaction.user.id;

const collector = interaction.channel.createMessageComponentCollector({time: 120000 });

collector.on('collect', async i => {
	if (i.customId === 'primary1') {
    levelcount--
      let mainlevel=selectLevel(levelcount)
      let value=levelName(levelcount)
		i.deferUpdate();
    embed.fields = [];
    embed.setColor('#0099ff')
	.setTitle('EcoVerse Battle Pass')
        .setDescription(`***Your point:${client.db.get(`battlepass_${interaction.user.id}.point`)}<:ticket:965658088885583892>***`)
	.setThumbnail(interaction.user.displayAvatarURL({ format: 'png' }))
	.addFields(
		{ name: 'Level 1 [10]<:ticket:965658088885583892>', value: `${value}` },
	)
	.setTimestamp()
	.setFooter({ text: `${interaction.user.username}`});
    let buton;
    if(levelcount==1) buton = new MessageButton().setCustomId('primary1').setEmoji('<:leftarrow:965666012794069003>').setStyle('PRIMARY').setDisabled(true); 
    else buton = new MessageButton().setCustomId('primary1').setEmoji('<:leftarrow:965666012794069003>').setStyle('PRIMARY').setDisabled(false);
      const buton2 = new MessageButton().setCustomId('primary2').setEmoji('<:rightarrow:965666012911521841>').setStyle('PRIMARY').setDisabled(false);
        const row = new MessageActionRow().addComponents(buton).addComponents(buton2)
    return interaction.editReply({
           embeds:[embed],
           components:[row],
       })
	}
	if (i.customId === 'primary2') {
    levelcount++
      let mainlevel=selectLevel(levelcount)
      let value=levelName(levelcount)
		i.deferUpdate();
    embed.fields = [];
    embed.setColor('#0099ff')
	.setTitle('EcoVerse Battle Pass')
        .setDescription(`***Your point:${client.db.get(`battlepass_${interaction.user.id}.point`)}<:ticket:965658088885583892>***`)
	.setThumbnail(interaction.user.displayAvatarURL({ format: 'png' }))
	.addFields(
		{ name: 'Level 1 [10]<:ticket:965658088885583892>', value: `${value}` },
	)
	.setTimestamp()
	.setFooter({ text: `${interaction.user.username}`});
      const buton = new MessageButton().setCustomId('primary1').setEmoji('<:leftarrow:965666012794069003>').setStyle('PRIMARY').setDisabled(false);
    let buton2;
    if(levelcount==20) buton2 = new MessageButton().setCustomId('primary2').setEmoji('<:rightarrow:965666012911521841>').setStyle('PRIMARY').setDisabled(true);
    else buton2 = new MessageButton().setCustomId('primary2').setEmoji('<:rightarrow:965666012911521841>').setStyle('PRIMARY').setDisabled(false);
        const row = new MessageActionRow().addComponents(buton).addComponents(buton2)
    return interaction.editReply({
           embeds:[embed],
           components:[row],
       })
	}
});
      function selectLevel(level){
        let returnlevel="\n"
        for(let i=1;i<levels.length;i++)
          {
            if(i==11)
              {
                returnlevel+=`\n`
              }
            if(i==level)
              {
                returnlevel+=`\`${levels[i]}\` `
              }
            else
              {
          returnlevel+=`**${levels[i]}** ` 
              }
          }
        return returnlevel
      }
            function levelName(level){
        let returnlevel="" 
       if(level==1) returnlevel=`**Prize**;\n***1,000:euro: Cash***\n${mainlevel}`
      else if(level==2) returnlevel=`**Prize**;\n***5,000:euro: Cash***\n${mainlevel}`
      else if(level==3) returnlevel=`**Prize**;\n***1 Common Case***\n${mainlevel}`
      else if(level==4) returnlevel=`**Prize**;\n***10 Rare Egg***\n${mainlevel}`
      else if(level==5) returnlevel=`**Prize**;\n***25,000:euro: Cash***\n${mainlevel}`
      else if(level==6) returnlevel=`**Prize**;\n***30,000:euro: ***\n${mainlevel}`
      else if(level==7) returnlevel=`**Prize**;\n***5 Common Case***\n${mainlevel}`
      else if(level==8) returnlevel=`**Prize**;\n***1 Rare Case***\n${mainlevel}`
        return returnlevel
      }
    }
};
