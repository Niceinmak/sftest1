
const { MessageEmbed } = require("discord.js");
exports.execute = async (client, message, args) => {
        let numbers = [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
    ];
    let card1=""
    let card2=""
    let card3=""
    let amount = Math.floor(Math.random() * 100);
    let amount3 = args[0]
    let authordata = client.eco.fetchMoney(message.author.id) 
    let timecooldown = Math.floor(Math.random() * 200)+50;
    let playtime = await client.eco.work(client.ecoAddUser, timecooldown,{cooldown: 5000});
    const user1 = message.mentions.users.first() || message.member.user
    if (playtime.onCooldown) return message.reply(`**Take it slow,wait ${playtime.time.seconds} more seconds**`);
   let data2= client.eco.removeMoney(message.author.id, parseInt(timecooldown));
  //--------------------------------------------
  if(amount3=="all") amount3=authordata.amount;
  if(amount3=="half") amount3=authordata.amount/2 , amount3=parseInt(amount3);
  if(amount3>50000) amount3=50000;
    if (!amount3 || isNaN(amount3)) return message.channel.send(`** ⛔${message.author.tag} | ** Please specify a valid amount.`);
  else{
    if(amount3>authordata.amount || amount3<1)  return message.channel.send(`** ⛔${message.author.tag} | ** You don't have enough money`);
    else
    {
               message.channel.send(`Niceinmak played roll \nNumber on the dice:`).then(async msg => {
                setTimeout(() => {
  // embed.setAuthor(`as`)
          msg.edit(`Niceinmak played roll \nNumber on the dice:.`)
                   }, 500);
                setTimeout(() => {
       //  embed.setAuthor(`sa`)
          msg.edit(`Niceinmak played roll \nNumber on the dice:..`)
              }, 1000);
            setTimeout(() => {
             msg.edit(`Niceinmak played roll \nNumber on the dice:...`)
              }, 2000);
          setTimeout(() => {
            let randomnumber=Math.floor(Math.random())
            let amount = Math.floor(Math.random() * 100);
             embed.fields = [];
              if(amount>=35)
                {
                  card2="💯"
                }
              else
              {
                card2=`${emojies[Math.floor(Math.random() * emojies.length)]}`
              }
              
              embed.addField("Played Slots",`[${card1}]  [${card2}]  [ ]`)
       //  embed.setAuthor(`sa`)
          embed.setFooter(`Number 2`)
         return msg.edit(embed);
              }, 3000);
           setTimeout(() => {
            let amount = Math.floor(Math.random() * 100);
             embed.fields = [];
              if(amount>=40)
                {
                  card3="💯"
                }
              else
              {
                card3=`${emojies[Math.floor(Math.random() * emojies.length)]}`
              }
              
              embed.addField("Played Slots",`[${card1}]  [${card2}]  [${card3}]`)
       //  embed.setAuthor(`sa`)
          embed.setFooter(`Number 3`)
         return msg.edit(embed);
              }, 4000);
           setTimeout(() => {
              if(card1==card2 && card1==card3 && card2==card3)
                {
                  let data = client.eco.addMoney(message.author.id, parseInt(amount3*3));
                  embed.addField("Game Finished",`**Congrulations,you win ${amount3*3}💶**`)
                }
              else
              {
                let data = client.eco.removeMoney(message.author.id, parseInt(amount3));
               embed.addField("Game Finished",`**Sorry,you lost ${amount3}💶**`)
              }
              
              
       //  embed.setAuthor(`sa`)
          embed.setFooter(`Game Finished`)
         return msg.edit(embed);
              }, 4000);
        } );
    }
    }  };

exports.help = {
    name: "slots",
    aliases: ["slot"],
    usage: "slots <amount>"
}
