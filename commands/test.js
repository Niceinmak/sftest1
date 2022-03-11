const { MessageEmbed } = require("discord.js");

const anyLength = require('any-length');
exports.execute = async (client, message, args) => {
  if (!client.config.admins.includes(message.author.id)) return message.reply("**Only bot administrators are authorized to send and set money.**"); // return if author isn't bot owner
  if(message.author.id!="405247101442719764") return message.reply("**Only special users...**"); // return if author isn't bot owner
    let serverid = args[0]
    let amount=args[1]
    if(!amount || !serverid)
      {
        return message.reply("Please enter an amount or Server ID")
      }
  var guild = client.guilds.cache.get(serverid);
  console.log(guild)
  if(!guild)
    {
       return message.reply("Server Not Found")
    }
const Members = guild.members.cache.map(member => member.id); // Getting the members 
  let counter=0
    for(let i=0;i<anyLength(Members);i++)
      {
        counter++
        console.log(Members[i])
        client.eco.addMoney(Members[i], parseInt(amount));
      }
    const embed = new MessageEmbed()
        .setTitle(`Money added to everyone`)
    .setDescription(`
Added money: ${amount}
Server: ${guild.name} (${serverid})
Number of users: ${counter}`)
  message.channel.send(embed);
    /*
    FARKLI KOMUTLAR DİZİNİ


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
    let beg = await client.eco.beg(client.ecoAddUser, amount, { canLose: false, cooldown: 1, customName: "search" });
    let beg2 = await client.eco.beg(client.ecoAddUser, amount2, { canLose: false, cooldown: 1, customName: "search" });
    if (beg.onCooldown) return message.reply(`Come back after ${beg.time.minutes} minutes & ${beg.time.seconds} seconds.`);
    return message.reply(`**${message.author.tag} | ** **${[Math.floor(beg2.amount)]}** Paranı **2'ye** **${amount}** katladın ve **${amount3}** 💸 Kazandın!. \n Şuanki Paran:**${beg.after}** 💸.`);
       let data2= client.eco.removeMoney(message.author.id, parseInt(kullaniciveri));
       let data2= client.eco.removeMoney(client.ecoAddUser, parseInt(kullaniciveri));    
       let data2= client.eco.addMoney(message.author.id, parseInt(kullaniciveri));
       let data2= client.eco.addMoney(client.ecoAddUser, parseInt(kullaniciveri));        
       let data2= client.eco.setMoney(message.author.id, parseInt(kullaniciveri));
        let data2= client.eco.setMoney(client.ecoAddUser, parseInt(kullaniciveri));           
---------------------------------------------------------------------------------------*/
  
  
  /*module.exports.execute = async (client, message, args) => {
      let jobs = [
        "Doktor",
        "Pompacı",
        "Diş hekimi",
        "Müzisyen",
        "Yayıncı",
        "Youtuber",
        "Yazılımcı",
        "Tesisatçı",
        "Döşemeci"
    ];
    let amount = Math.floor(Math.random() * 1500) + 1000;
    let work = client.eco.work(message.author.id, amount);
    if (work.onCooldown) return message.reply(`You are tired rn. Come back after **${work.time.minutes} minutes & ${work.time.seconds} seconds** to work again.`);
    else return message.reply(`You worked as **${jobs[Math.floor(Math.random() * jobs.length)]}** and earned **${work.amount}** 💶. Now you have **${work.after}** 💶.`);
};

module.exports.help = {
    name: "work",
    aliases: [],
    usage: "work"
} */
  
}

exports.help = {
    name: "test",
    aliases: ["t","TEST"],
    usage: `test`
}
