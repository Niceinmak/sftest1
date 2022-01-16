
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
    let amount4 = args[1]
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
                 let randomnumber=numbers[Math.floor(Math.random() * numbers.length)]
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
            msg.edit(`Niceinmak played roll \nNumber on the dice:${randomnumber}`)
              }, 3000);
           setTimeout(() => {
             if(amount3==randomnumber)
                {
                  msg.edit(`Niceinmak played roll \nNumber on the dice:${randomnumber}\nCongrulations,You Win ${amount4*3}💶!`)
                  let data = client.eco.addMoney(message.author.id, parseInt(amount4*3));
                }
             else
               {
                 let data = client.eco.removeMoney(message.author.id, parseInt(amount4));
                 msg.edit(`Niceinmak played roll \nNumber on the dice:${randomnumber}\nSorry,you lost ${amount4}💶`)
               }
              }, 4000);
        } );
    }
    }  };

exports.help = {
    name: "roll",
    aliases: ["ROLL"],
    usage: "roll <1,2,3,4,5,6> <amount>"
}
