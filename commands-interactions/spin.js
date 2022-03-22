const { MessageEmbed,MessageButton,MessageActionRow } = require('discord.js');
const moment = require("moment");
let ms = require('ms');
let db = require('quick.db');
module.exports = {
    description: 'Play Spin Game',
    options: [
    {
      name: "select_color",
      description: "Select color",
      type: 'STRING',
      required: true,
      choices: [{ name: "Green", value: "green" }, { name: "Red", value: "red" }, { name: "Blue", value: "blue" }]
    },
      {
      name: "amount",
      description: "Select amount",
      type: 'INTEGER',
      required: true,
    }
  ],
    run: async (client, interaction) => {
     let amount = Math.floor(Math.random() * 100)
    let amount2 = Math.floor(Math.random() * 200)/100;
    let amount3 = interaction.options.get("select_color").value;
    let amount4 = "0"
    let userdata=interaction.options.getInteger('amount')
    let userdata2= 0
    let authordata = client.eco.fetchMoney(interaction.user.id)
    //------------------------------------------
             const timeout = 5000;
  const cooldown = await db.fetch(`cooldown_spin_${interaction.user.id}`);
      	if (cooldown !== null && timeout - (Date.now() - cooldown) > 0) {
		const time = ms(timeout - (Date.now() - cooldown));
          return interaction.reply(`**Wait ${time} to message again**`)
	}
      db.set(`cooldown_spin_${interaction.user.id}`, Date.now());
//-------------------------------------------------------
      if(userdata=="all") userdata=authordata.amount;
  if(userdata=="half") userdata=authordata.amount/2 , userdata=parseInt(userdata);
  if(userdata>50000) userdata=50000;
     if (!userdata || isNaN(userdata)) return interaction.reply(`** ⛔${interaction.user.username} | ** Please specify a valid amount.`);
  else{
    if(userdata>authordata.amount || userdata<1) return interaction.reply(`** ⛔${interaction.user.username} | ** You don't have enough money`);
    if(amount3!="green" && amount3!="red" && amount3!="blue") return interaction.reply(`** ⛔${interaction.user.username} | You chose the **wrong card** :c`);
    if((amount3)=="green") 
    {
      userdata2="🟢"
      amount4="0"
    }
    if((amount3)=="red")
    {
      userdata2="🔴"
      amount4="1"
    }
    if((amount3)=="blue") 
    {
      userdata2="🔷"
      amount4="2"
    }
   const embed = new MessageEmbed()
  .setTitle(`**${interaction.user.username} |  Played Roulette With ${userdata}!\n-------------------------------------**`)
  .setColor("RANDOM")
  .setDescription(`**🟢 |Luck 42,5 , Earning:2X\n🔴 |Luck 42,5 , Earning:2X\n🔷 |Luck 15,0 , Earning:3X \n------------------------------------------\n The Wheel is Spinning.\n You Played:${userdata2}**`)
  
  return interaction.reply({embeds:[embed]}).then(async msg => {
      setTimeout(() => {
         embed.setDescription(`**🟢 |Luck 42,5 , Earning:2X\n🔴 |Luck 42,5 , Earning:2X\n🔷 |Luck 15,0 , Earning:3X \n------------------------------------------\n The Wheel is Spinning..\n You Played:${userdata2}**`)
        return interaction.editReply({embeds:[embed]})
        }, 1000);
    setTimeout(() => {
         embed.setDescription(`**🟢 |Luck 42,5 , Earning:2X\n🔴 |Luck 42,5 , Earning:2X\n🔷 |Luck 15,0 , Earning:3X \n------------------------------------------\n The Wheel is Spinning...\n You Played:${userdata2}**`)
        return interaction.editReply({embeds:[embed]})
        }, 2000); 
       setTimeout(() => {
        if(amount>=85)
           {
            if(amount4=="2")
               {
                    let data2= client.eco.addMoney(interaction.user.id, parseInt(userdata*2));
                 embed.setDescription(`**🟢 |Luck 42,5 , Earning:2X\n🔴 |Luck 42,5 , Earning:2X\n🔷 |Luck 15,0 , Earning:3X \n------------------------------------------\n The Wheel is Spinning...\n Congratulations, you won!\n Roulette:🔷\n You Played:${userdata2}**`)
                 .setTitle(`**${client.user.username} |  You Win ${userdata*3}!\n-------------------------------------**`)
               return interaction.editReply({embeds:[embed]})
               }
             else
               {
                      let data2= client.eco.removeMoney(interaction.user.id, parseInt(userdata));
                 embed.setDescription(`**🟢 |Luck 42,5 , Earning:2X\n🔴 |Luck 42,5 , Earning:2X\n🔷 |Luck 15,0 , Earning:3X \n------------------------------------------\n The Wheel is Spinning...\n Sorry You Lost\n Roulette:🔷\n You Played:${userdata2}**`)
                 .setTitle(`**${client.user.username} |  You Lose ${userdata} :c\n-------------------------------------**`)
               return interaction.editReply({embeds:[embed]})
               }
           }
         else if(amount>=42)
           {
               if(amount4=="1")
               {
                    let data2= client.eco.addMoney(interaction.user.id, parseInt(userdata));
                 embed.setDescription(`**🟢 |Luck 42,5 , Earning:2X\n🔴 |Luck 42,5 , Earning:2X\n🔷 |Luck 15,0 , Earning:3X \n------------------------------------------\n The Wheel is Spinning...\n Congratulations, you won!\n Roulette:🔴\n You Played:${userdata2}**`)
                 .setTitle(`**${client.user.username} |  You Win ${userdata*2}!\n-------------------------------------**`)
               return interaction.editReply({embeds:[embed]})
               }
             else
               {
                      let data2= client.eco.removeMoney(interaction.user.id, parseInt(userdata));
                 embed.setDescription(`**🟢 |Luck 42,5 , Earning:2X\n🔴 |Luck 42,5 , Earning:2X\n🔷 |Luck 15,0 , Earning:3X \n------------------------------------------\n The Wheel is Spinning...\n Sorry You Lost\n Roulette:🔴\n You Played:${userdata2}**`)
                 .setTitle(`**${client.user.username} |  You Lose ${userdata} :c\n-------------------------------------**`)
              return interaction.editReply({embeds:[embed]})
               }
           }
         else
           {
             if(amount4=="0")
               {
                    let data2= client.eco.addMoney(interaction.user.id, parseInt(userdata));
                 embed.setDescription(`**🟢 |Luck 42,5 , Earning:2X\n🔴 |Luck 42,5 , Earning:2X\n🔷 |Luck 15,0 , Earning:3X \n------------------------------------------\n The Wheel is Spinning...\n Congratulations, you won!\n Roulette:🟢\n You Played:${userdata2}**`)
                 .setTitle(`**${client.user.username} |  You Win ${userdata*2}!\n-------------------------------------**`)
              return interaction.editReply({embeds:[embed]})
               }
             else
               {
                      let data2= client.eco.removeMoney(interaction.user.id, parseInt(userdata));
                 embed.setDescription(`**🟢 |Luck 42,5 , Earning:2X\n🔴 |Luck 42,5 , Earning:2X\n🔷 |Luck 15,0 , Earning:3X \n------------------------------------------\n The Wheel is Spinning...\n Sorry You Lost\n Roulette:🟢\n You Played:${userdata2}**`)
                 .setTitle(`**${client.user.username} |  You Lose ${userdata} :c\n-------------------------------------**`)
               return interaction.editReply({embeds:[embed]})
               }
           }
     //   embed.setDescription(`**${amount},${amount4}**`)
        return interaction.editReply({embeds:[embed]})
        }, 3000); 
          });

  }
    }
};
