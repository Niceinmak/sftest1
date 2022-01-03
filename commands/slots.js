
const { MessageEmbed } = require("discord.js");
exports.execute = async (client, message, args) => {
        let emojies = [
        "🏅",
        "🏆",
        "💶",
    ];
    let card1=""
    let card2=""
    let card3=""
    let amount = Math.floor(Math.random() * 100);
    let amount3 = args[0]
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
             .setAuthor(`${user1.username}, ${amount3} ile Slot oynadı`, user1.displayAvatarURL())
            .setFooter(`.`)
            .addField("Slot Oynanıyor",`[ ]  [ ]  [ ]`)
            .setColor("#7289DA")
            .setTimestamp();
              return message.channel.send(embed).then(async msg => {
                setTimeout(() => {
  // embed.setAuthor(`as`)
          embed.setFooter(`..`)
          return msg.edit(embed);
                   }, 500);
                setTimeout(() => {
       //  embed.setAuthor(`sa`)
          embed.setFooter(`...`)
         return msg.edit(embed);
              }, 1000);
           setTimeout(() => {
       //      embed.fields = null
       //      return msg.edit(embed);
              }, 1250);
            setTimeout(() => {
              if(amount>=50)
                {
                  card1="💯"
                }
              else
              {
                card1=`${emojies[Math.floor(Math.random() * emojies.length)]}`
              }
              
              embed.addField("Slot Oynanıyor",`[${card1} ]  [ ]  [ ]`)
       //  embed.setAuthor(`sa`)
          embed.setFooter(`.1.Sayı`)
         return msg.edit(embed);
              }, 2000);
        } );
    }
    }  };

exports.help = {
    name: "slots",
    aliases: ["slots"],
    usage: "slots <miktar>"
}
