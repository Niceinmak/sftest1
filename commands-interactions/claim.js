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
  const cooldown = await db.fetch(`cooldown_claim_${interaction.user.id}`);
      	if (cooldown !== null && timeout - (Date.now() - cooldown) > 0) {
		const time = ms(timeout - (Date.now() - cooldown));
          return interaction.editReply(`**Wait ${time} to message again**`)
	}
    db.set(`cooldown_claim_${interaction.user.id}`, Date.now());
      //---------------------------------------------------------------------------
      let levels = []
      let prizes=[30,50,100,150,200,250,350,500,650,800,1000,1200,1450,1600,1900,2200,2500,3000,3500,4000]
      for(let i=0;i<=20;i++)
        {
          levels.push(i)
        }
      let levelcount=1
      let mainlevel=selectLevel(levelcount)
      var prize = new Boolean(false)
      let ticket=client.db.get(`battlepass_${interaction.user.id}.point`)
      for(let i=0;i<=prizes.length;i++)
        {
        for(let j=0;j<=)
        }
        const embed = new MessageEmbed()
        	.setColor('#0099ff')
	.setTitle('EcoVerse Battle Pass')
        .setDescription(`***Your point:<:ticket:965658088885583892>***`)
	.setThumbnail(interaction.user.displayAvatarURL({ format: 'png' }))
	.addFields(
		{ name: `Level ${levelcount} [${prizes[levelcount-1]}]<:ticket:965658088885583892>`, value: `**Prize**;\n***10,000:euro: Cash***\n${mainlevel}` },
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
       if(level==1) returnlevel=`**Prize**;\n***1,000:euro: Cash***`
      else if(level==2) returnlevel=`**Prize**;\n***5,000:euro: Cash***`
      else if(level==3) returnlevel=`**Prize**;\n***1 Common Case***`
      else if(level==4) returnlevel=`**Prize**;\n***10 Rare Egg***`
      else if(level==5) returnlevel=`**Prize**;\n***25,000:euro: Cash***`
      else if(level==6) returnlevel=`**Prize**;\n***30,000:euro: Cash***`
      else if(level==7) returnlevel=`**Prize**;\n***5 Common Case***`
      else if(level==8) returnlevel=`**Prize**;\n***5 Epic Egg***`
      else if(level==9) returnlevel=`**Prize**;\n***1 Rare Case***`
      else if(level==10) returnlevel=`**Prize**;\n***120,000:euro: Cash***`
      else if(level==11) returnlevel=`**Prize**;\n***1 Rare Cash + 2 Common Case***`
      else if(level==12) returnlevel=`**Prize**;\n***400 EcoCoin***`
      else if(level==13) returnlevel=`**Prize**;\n***500 EcoCoin***`
      else if(level==14) returnlevel=`**Prize**;\n***220,000:euro: Cash***`
      else if(level==15) returnlevel=`**Prize**;\n***3 Rare Case***`
      else if(level==16) returnlevel=`**Prize**;\n***450,000:euro: Cash***`
      else if(level==17) returnlevel=`**Prize**;\n***20 Epic Egg***`
      else if(level==18) returnlevel=`**Prize**;\n***650,000:euro: Cash***`
      else if(level==19) returnlevel=`**Prize**;\n***1000 EcoCoin***`
      else if(level==20) returnlevel=`**Prize**;\n***100,000,000:euro: Cash***`
        return returnlevel
      }
    }
};
