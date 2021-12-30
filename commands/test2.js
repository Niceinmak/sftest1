exports.execute = async (client, message, args) => {
    let users = [
        "Pocket",
        "T-Shirt",
        "Zero's Databse",
        "Street"
    ];
    let amount = Math.floor(Math.random() * 200)+50;
    let amount2 = Math.floor(Math.random() * 200)/100;
    let amount3 = args[0]
   // let beg = await client.eco.beg(client.ecoAddUser, amount, { canLose: false, cooldown: 1, customName: "search" });
   // let beg2 = await client.eco.beg(client.ecoAddUser, amount2, { canLose: false, cooldown: 1, customName: "search" });
  //  if (beg.onCooldown) return message.reply(`Come back after ${beg.time.minutes} minutes & ${beg.time.seconds} seconds.`);
  //  return message.reply(`**${message.author.tag} | ** **${[Math.floor(beg2.amount)]}** Paranı **2'ye** **${amount}** katladın ve **${amount3}** 💸 Kazandın!. \n Şuanki Paran:**${beg.after}** 💸.`);
//        let data2= client.eco.removeMoney(message.author.id, parseInt(kullaniciveri));
//        let data2= client.eco.removeMoney(client.ecoAddUser, parseInt(kullaniciveri));    
//        let data2= client.eco.addMoney(message.author.id, parseInt(kullaniciveri));
//        let data2= client.eco.addMoney(client.ecoAddUser, parseInt(kullaniciveri));        
//        let data2= client.eco.setMoney(message.author.id, parseInt(kullaniciveri));
//        let data2= client.eco.setMoney(client.ecoAddUser, parseInt(kullaniciveri));           
//---------------------------------------------------------------------------------------
    };

exports.help = {
    name: "test2",
    aliases: [],
    usage: "test2 <amount>"
}
