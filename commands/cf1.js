
const { MessageEmbed } = require("discord.js");
exports.execute = async (client, message, args) => {
    let amount = Math.floor(Math.random() * 200)+50;
    let amount2 = Math.floor(Math.random() * 2);
    let amount4 = Math.floor(Math.random() * 200)/100;
    let amount3 = args[0]
    let amount5 = args[1]
    let yazitura= ""
    let authordata = client.eco.fetchMoney(message.author.id) 
    let timecooldown = Math.floor(Math.random() * 200)+50;
    let playtime = await client.eco.beg(client.ecoAddUser, timecooldown,{cooldown: 5000});
    let data2= client.eco.removeMoney(message.author.id, parseInt(timecooldown));
    const user1 = message.mentions.users.first() || message.member.user
    if (playtime.onCooldown) return message.reply(`**Biraz yavaş ol,${playtime.time.seconds} saniye daha bekle.**`);
  //--------------------------------------------
    if (!amount3 || isNaN(amount3)) return message.channel.send(`** ⛔${message.author.tag} | ** Lütfen Sayı Giriniz`);
  else{
    if(amount3>authordata.amount || amount3<1)  return message.channel.send(`** ⛔${message.author.tag} | ** Girdiğiniz miktar paranızdan fazla veya 1'den az olamaz`);
    else
    {
      
             const embed = new MessageEmbed()
             .setAuthor(`${user1.username}, ${amount3} ile blackjack oynadı`, user1.displayAvatarURL())
            .setFooter(`Oyun devam ediyor`)
            .setTitle(`${user1.username}`)
            .addField("API Gecikmesi", `s`)
            .addField("Client Gecikmesi", `ms`)
            .setColor("#7289DA")
            .setTimestamp();
              return message.channel.send(embed).then(async msg => {
          msg.react("👊")
          msg.react("🛑")  
          //embed.setAuthor(`sa`)
          //return msg.edit(embed);
      return message.channel.send("a")
        } );
     
const filter = (reaction, user) => {
	return reaction.emoji.name === '👊' && user.id === message.author.id;
};

const collector = message.createReactionCollector({ filter, time: 15000 });

collector.on('collect', (reaction, user) => {
	console.log(`Collected ${reaction.emoji.name} from ${user.tag}`);
});

collector.on('end', collected => {
	console.log(`Collected ${collected.size} items`);
});
    }
    }  };

exports.help = {
    name: "cf1",
    aliases: ["coinflip","yazıtura"],
    usage: "cf1 <yazı,tura> <miktar>"
}
