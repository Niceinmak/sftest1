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
      var prize = new Boolean(false)
      let ticket=client.db.get(`battlepass_${interaction.user.id}.point`)
      let point=client.db.get(`battlepass_${interaction.user.id}.lastpoint`)
      if(!point) point=0;
      //point++
      //client.db.set(`battlepass_${interaction.user.id}`, { point: point })
      for(let i=point;i<=ticket;i++)
        {
        for(let j=0;j<prizes.length;j++)
          {
            console.log(i,prizes[j])
            if(i==prizes[j])
              {
                console.log("t")
              }
          }
        }
      console.log(levelName(1))
        const embed = new MessageEmbed()
        	.setColor('#0099ff')
	.setTitle('EcoVerse Battle Pass')
        .setDescription(`***Your point:<:ticket:965658088885583892>***`)
	.setThumbnail(interaction.user.displayAvatarURL({ format: 'png' }))
	.setTimestamp()
	.setFooter({ text: `${interaction.user.username}`});
      const buton = new MessageButton().setCustomId('primary1').setEmoji('<:leftarrow:965666012794069003>').setStyle('PRIMARY').setDisabled(true);
      const buton2 = new MessageButton().setCustomId('primary2').setEmoji('<:rightarrow:965666012911521841>').setStyle('PRIMARY').setDisabled(false);
        const row = new MessageActionRow().addComponents(buton).addComponents(buton2)
       interaction.editReply({
           embeds:[embed],
           components:[row],
       })

            function levelName(level){
        let returnleveltext="" 
        let t=""
        let commonitem="common.case"
       if(level==1) client.eco.addMoney(interaction.user.id, parseInt(1000)),returnleveltext=`**Prize**;\n***1,000:euro: Cash\n***`
      else if(level==2) returnleveltext=client.eco.addMoney(interaction.user.id, parseInt(5000)),`**Prize**;\n***5,000:euro: Cash\n***`
      else if(level==3) let hasItem = client.shop[item];,returnleveltext=`**Prize**;\n***1 Common Case\n***`
      else if(level==4) returnleveltext=`**Prize**;\n***10 Rare Egg\n***`
      else if(level==5) returnleveltext=`**Prize**;\n***25,000:euro: Cash\n***`
      else if(level==6) returnleveltext=`**Prize**;\n***30,000:euro: Cash\n***`
      else if(level==7) returnleveltext=`**Prize**;\n***5 Common Case\n***`
      else if(level==8) returnleveltext=`**Prize**;\n***5 Epic Egg\n***`
      else if(level==9) returnleveltext=`**Prize**;\n***1 Rare Case\n***`
      else if(level==10) returnleveltext=`**Prize**;\n***120,000:euro: Cash\n***`
      else if(level==11) returnleveltext=`**Prize**;\n***1 Rare Cash + 2 Common Case\n***`
      else if(level==12) returnleveltext=`**Prize**;\n***400 EcoCoin\n***`
      else if(level==13) returnleveltext=`**Prize**;\n***500 EcoCoin\n***`
      else if(level==14) returnleveltext=`**Prize**;\n***220,000:euro: Cash\n***`
      else if(level==15) returnleveltext=`**Prize**;\n***3 Rare Case\n***`
      else if(level==16) returnleveltext=`**Prize**;\n***450,000:euro: Cash\n***`
      else if(level==17) returnleveltext=`**Prize**;\n***20 Epic Egg\n***`
      else if(level==18) returnleveltext=`**Prize**;\n***650,000:euro: Cash\n***`
      else if(level==19) returnleveltext=`**Prize**;\n***1000 EcoCoin\n***`
      else if(level==20) returnleveltext=`**Prize**;\n***100,000,000:euro: Cash\n***`
      return returnleveltext
      }
    }
};
