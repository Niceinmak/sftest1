const { MessageEmbed } = require("discord.js");
exports.execute = async (client, message, args) => {
    let users = [
        "Pocket",
        "T-Shirt",
        "Zero's Databse",
        "Street"
    ];
    let amount = Math.floor(Math.random() * 100)
    let amount2 = Math.floor(Math.random() * 200)/100;
    let amount3 = args[0]
    let amount4 = "0"
    let userdata=args[1]
    let userdata2= 0
    let authordata = client.eco.fetchMoney(message.author.id) 
    let timecooldown = Math.floor(Math.random() * 200)+50;
        let playtime = await client.eco.work(client.ecoAddUser, timecooldown,{ canLose: true, cooldown: 5000, customName: "search" });
  let data2= client.eco.removeMoney(message.author.id, parseInt(timecooldown));
    if (playtime.onCooldown) return message.reply(`**Take it slow,wait ${playtime.time.seconds} more seconds**`);
      if(userdata=="all") userdata=authordata.amount;
     if (!userdata || isNaN(userdata)) return message.channel.send(`** ⛔${message.author.tag} | ** Please specify a valid amount.`);
  else{
    if(userdata>authordata.amount || userdata<1) return message.channel.send(`** ⛔${message.author.tag} | ** You don't have enough money`);
    if(amount3!="green" && amount3!="red" && amount3!="blue") message.channel.send(`** ⛔${message.author.tag} | You chose the **wrong card** :c`);
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
  .setTitle(`**${message.author.tag} |  Played Roulette With ${userdata}!\n-------------------------------------**`)
  .setColor("GRAY")
  .setFooter(`Roulette`)
  .setDescription(`**🟢 |Luck 42,5 , Earning:3X\n🔴 |Luck 42,5 , Earning:3X\n🔷 |Luck 15,0 , Earning:10X \n------------------------------------------\n The Wheel is Spinning.\n You Played:${userdata2}**`)
  
  return message.channel.send(embed).then(async msg => {
      setTimeout(() => {
         embed.setDescription(`**🟢 |Luck 42,5 , Earning:3X\n🔴 |Luck 42,5 , Earning:3X\n🔷 |Luck 15,0 , Earning:10X \n------------------------------------------\n The Wheel is Spinning..\n You Played:${userdata2}**`)
        return msg.edit(embed)
        }, 1000);
    setTimeout(() => {
         embed.setDescription(`**🟢 |Luck 42,5 , Earning:3X\n🔴 |Luck 42,5 , Earning:3X\n🔷 |Luck 15,0 , Earning:10X \n------------------------------------------\n The Wheel is Spinning...\n You Played:${userdata2}**`)
        return msg.edit(embed)
        }, 2000); 
       setTimeout(() => {
        if(amount>=85)
           {
            if(amount4=="2")
               {
                    let data2= client.eco.addMoney(message.author.id, parseInt(userdata*10));
                 embed.setDescription(`**🟢 |Luck 42,5 , Earning:3X\n🔴 |Luck 42,5 , Earning:3X\n🔷 |Luck 15,0 , Earning:10X \n------------------------------------------\n The Wheel is Spinning...\n Congratulations, you won!\n Roulette:🔷\n You Played:${userdata2}**`)
                 .setTitle(`**${message.author.tag} |  You Win ${userdata*10}!\n-------------------------------------**`)
               return msg.edit(embed)
               }
             else
               {
                      let data2= client.eco.removeMoney(message.author.id, parseInt(userdata));
                 embed.setDescription(`**🟢 |Luck 42,5 , Earning:3X\n🔴 |Luck 42,5 , Earning:3X\n🔷 |Luck 15,0 , Earning:10X \n------------------------------------------\n The Wheel is Spinning...\n Sorry You Lost\n Roulette:🔷\n You Played:${userdata2}**`)
                 .setTitle(`**${message.author.tag} |  You Lose ${userdata} :c\n-------------------------------------**`)
               return msg.edit(embed)
               }
           }
         else if(amount>=42)
           {
               if(amount4=="1")
               {
                    let data2= client.eco.addMoney(message.author.id, parseInt(userdata)*3);
                 embed.setDescription(`**🟢 |Luck 42,5 , Earning:3X\n🔴 |Luck 42,5 , Earning:3X\n🔷 |Luck 15,0 , Earning:10X \n------------------------------------------\n The Wheel is Spinning...\n Congratulations, you won!\n Roulette:🔴\n You Played:${userdata2}**`)
                 .setTitle(`**${message.author.tag} |  You Win ${userdata*3}!\n-------------------------------------**`)
               return msg.edit(embed)
               }
             else
               {
                      let data2= client.eco.removeMoney(message.author.id, parseInt(userdata));
                 embed.setDescription(`**🟢 |Luck 42,5 , Earning:3X\n🔴 |Luck 42,5 , Earning:3X\n🔷 |Luck 15,0 , Earning:10X \n------------------------------------------\n The Wheel is Spinning...\n Sorry You Lost\n Roulette:🔴\n You Played:${userdata2}**`)
                 .setTitle(`**${message.author.tag} |  You Lose ${userdata} :c\n-------------------------------------**`)
              return msg.edit(embed)
               }
           }
         else
           {
             if(amount4=="0")
               {
                    let data2= client.eco.addMoney(message.author.id, parseInt(userdata*3));
                 embed.setDescription(`**🟢 |Luck 42,5 , Earning:3X\n🔴 |Luck 42,5 , Earning:3X\n🔷 |Luck 15,0 , Earning:10X \n------------------------------------------\n The Wheel is Spinning...\n Congratulations, you won!\n Roulette:🟢\n You Played:${userdata2}**`)
                 .setTitle(`**${message.author.tag} |  You Win ${userdata*3}!\n-------------------------------------**`)
              return msg.edit(embed)
               }
             else
               {
                      let data2= client.eco.removeMoney(message.author.id, parseInt(userdata));
                 embed.setDescription(`**🟢 |Luck 42,5 , Earning:3X\n🔴 |Luck 42,5 , Earning:3X\n🔷 |Luck 15,0 , Earning:10X \n------------------------------------------\n The Wheel is Spinning...\n Sorry You Lost\n Roulette:🟢\n You Played:${userdata2}**`)
                 .setTitle(`**${message.author.tag} |  You Lose ${userdata} :c\n-------------------------------------**`)
               return msg.edit(embed)
               }
           }
     //   embed.setDescription(`**${amount},${amount4}**`)
        return msg.edit(embed)
        }, 3000); 
          });

  }
};

exports.help = {
    name: "spin",
    aliases: ["SPIN","roulette"],
    usage: "spin <green,red,yellow> <amount>"
}
