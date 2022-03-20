const { MessageEmbed,MessageButton,MessageActionRow } = require('discord.js');

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
    let timecooldown = Math.floor(Math.random() * 200)+50;
        let playtime = await client.eco.work(client.ecoAddUser, timecooldown,{ canLose: true, cooldown: 5000, customName: "search" });
    if (playtime.onCooldown) return interaction.reply(`**Take it slow,wait ${playtime.time.seconds} more seconds**`);
  let data2= client.eco.removeMoney(interaction.user.id, parseInt(timecooldown));
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
  .setColor("GRAY")
  .setFooter(`Roulette`)
  .setDescription(`**🟢 |Luck 42,5 , Earning:2X\n🔴 |Luck 42,5 , Earning:2X\n🔷 |Luck 15,0 , Earning:3X \n------------------------------------------\n The Wheel is Spinning.\n You Played:${userdata2}**`)
  
  return interaction.reply(embed).then(async msg => {
      setTimeout(() => {
         embed.setDescription(`**🟢 |Luck 42,5 , Earning:2X\n🔴 |Luck 42,5 , Earning:2X\n🔷 |Luck 15,0 , Earning:3X \n------------------------------------------\n The Wheel is Spinning..\n You Played:${userdata2}**`)
        return msg.edit(embed)
        }, 1000);
    setTimeout(() => {
         embed.setDescription(`**🟢 |Luck 42,5 , Earning:2X\n🔴 |Luck 42,5 , Earning:2X\n🔷 |Luck 15,0 , Earning:3X \n------------------------------------------\n The Wheel is Spinning...\n You Played:${userdata2}**`)
        return msg.edit(embed)
        }, 2000); 
       setTimeout(() => {
        if(amount>=85)
           {
            if(amount4=="2")
               {
                    let data2= client.eco.addMoney(interaction.user.id, parseInt(userdata*2));
                 embed.setDescription(`**🟢 |Luck 42,5 , Earning:2X\n🔴 |Luck 42,5 , Earning:2X\n🔷 |Luck 15,0 , Earning:3X \n------------------------------------------\n The Wheel is Spinning...\n Congratulations, you won!\n Roulette:🔷\n You Played:${userdata2}**`)
                 .setTitle(`**${message.author.tag} |  You Win ${userdata*3}!\n-------------------------------------**`)
               return msg.edit(embed)
               }
             else
               {
                      let data2= client.eco.removeMoney(interaction.user.id, parseInt(userdata));
                 embed.setDescription(`**🟢 |Luck 42,5 , Earning:2X\n🔴 |Luck 42,5 , Earning:2X\n🔷 |Luck 15,0 , Earning:3X \n------------------------------------------\n The Wheel is Spinning...\n Sorry You Lost\n Roulette:🔷\n You Played:${userdata2}**`)
                 .setTitle(`**${message.author.tag} |  You Lose ${userdata} :c\n-------------------------------------**`)
               return msg.edit(embed)
               }
           }
         else if(amount>=42)
           {
               if(amount4=="1")
               {
                    let data2= client.eco.addMoney(interaction.user.id, parseInt(userdata));
                 embed.setDescription(`**🟢 |Luck 42,5 , Earning:2X\n🔴 |Luck 42,5 , Earning:2X\n🔷 |Luck 15,0 , Earning:3X \n------------------------------------------\n The Wheel is Spinning...\n Congratulations, you won!\n Roulette:🔴\n You Played:${userdata2}**`)
                 .setTitle(`**${message.author.tag} |  You Win ${userdata*2}!\n-------------------------------------**`)
               return msg.edit(embed)
               }
             else
               {
                      let data2= client.eco.removeMoney(interaction.user.id, parseInt(userdata));
                 embed.setDescription(`**🟢 |Luck 42,5 , Earning:2X\n🔴 |Luck 42,5 , Earning:2X\n🔷 |Luck 15,0 , Earning:3X \n------------------------------------------\n The Wheel is Spinning...\n Sorry You Lost\n Roulette:🔴\n You Played:${userdata2}**`)
                 .setTitle(`**${client.user.username} |  You Lose ${userdata} :c\n-------------------------------------**`)
              return msg.edit(embed)
               }
           }
         else
           {
             if(amount4=="0")
               {
                    let data2= client.eco.addMoney(interaction.user.id, parseInt(userdata));
                 embed.setDescription(`**🟢 |Luck 42,5 , Earning:2X\n🔴 |Luck 42,5 , Earning:2X\n🔷 |Luck 15,0 , Earning:3X \n------------------------------------------\n The Wheel is Spinning...\n Congratulations, you won!\n Roulette:🟢\n You Played:${userdata2}**`)
                 .setTitle(`**${client.user.username} |  You Win ${userdata*2}!\n-------------------------------------**`)
              return msg.edit(embed)
               }
             else
               {
                      let data2= client.eco.removeMoney(interaction.user.id, parseInt(userdata));
                 embed.setDescription(`**🟢 |Luck 42,5 , Earning:2X\n🔴 |Luck 42,5 , Earning:2X\n🔷 |Luck 15,0 , Earning:3X \n------------------------------------------\n The Wheel is Spinning...\n Sorry You Lost\n Roulette:🟢\n You Played:${userdata2}**`)
                 .setTitle(`**${client.user.username} |  You Lose ${userdata} :c\n-------------------------------------**`)
               return msg.edit(embed)
               }
           }
     //   embed.setDescription(`**${amount},${amount4}**`)
        return msg.edit(embed)
        }, 3000); 
          });

  }
    }
};
