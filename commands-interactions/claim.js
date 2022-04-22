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
        let hasItem;
       if(level==1) addMoney(1000),returnleveltext=`***You Won:1,000:euro: Cash\n***`
      else if(level==2) addMoney(5000),`***You Won:5,000:euro: Cash\n***`
      else if(level==3) addCase("common.case",1),returnleveltext=`***You Won:1 Common Case\n***`
      else if(level==4) addCase("<:eggrare:964448940248428604>",10),returnleveltext=`***You Won:10 Rare Egg\n***`
      else if(level==5) addMoney(25000),returnleveltext=`***You Won:25,000:euro: Cash\n***`
      else if(level==6) addMoney(30000),returnleveltext=`***You Won:30,000:euro: Cash\n***`
      else if(level==7) addCase("common.case",5),returnleveltext=`***You Won:5 Common Case\n***`
      else if(level==8) addCase("<:eggepic:964448950281183242>",5),returnleveltext=`***You Won:5 Epic Egg\n***`
      else if(level==9) addCase("rare.case",1),returnleveltext=`***You Won:1 Rare Case\n***`
      else if(level==10) returnleveltext=`***You Won:120,000:euro: Cash\n***`
      else if(level==11) returnleveltext=`***You Won:1 Rare Cash + 2 Common Case\n***`
      else if(level==12) returnleveltext=`***You Won:400 EcoCoin\n***`
      else if(level==13) returnleveltext=`***You Won:500 EcoCoin\n***`
      else if(level==14) returnleveltext=`***You Won:220,000:euro: Cash\n***`
      else if(level==15) returnleveltext=`***You Won:3 Rare Case\n***`
      else if(level==16) returnleveltext=`***You Won:450,000:euro: Cash\n***`
      else if(level==17) returnleveltext=`***You Won:20 Epic Egg\n***`
      else if(level==18) returnleveltext=`***You Won:650,000:euro: Cash\n***`
      else if(level==19) returnleveltext=`***You Won:1000 EcoCoin\n***`
      else if(level==20) returnleveltext=`***You Won:100,000,000:euro: Cash\n***`
      return returnleveltext
      }
      function addMoney(money)
      {
        client.eco.addMoney(interaction.user.id, parseInt(money))
      }
      function addCase(item,count)
      {
        let commonitem=item
        let hasItem = client.shop[item];
          let itemStruct = {
    name: item.toLowerCase(),
    prize: hasItem.cost
  };
  for (let i=0;i<item;i++) {
  client.db.push(`items_${interaction.user.id}`, itemStruct);
}
      }
    }
};
