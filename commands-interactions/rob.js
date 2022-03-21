const { MessageEmbed,MessageButton,MessageActionRow } = require('discord.js');

module.exports = {
    description: 'Stealing isnt a bad thing as long as you dont get caught.I m just kidding.',
  options: [
        {
            name: 'user',
            description: 'Select a user',
            type: 'USER',
            required: true
        },
    ],
    run: async (client, interaction) => {
       interaction.reply("**Checking user money...**").then(msg => {
     setTimeout(function() {
     let target = interaction.options.getUser('user')
  let authordata = client.eco.fetchMoney(interaction.user.id) 
  let targetname=target.username
  if(!target) return interaction.reply("Who are you trying to rob?")
  let targetBalance = client.eco.fetchMoney(target.id);
  let messages = [
    `You tripped while trying to rob ${target} and got caught!`,
    `Getting sneaky eh? ${target} called the cops on you!`,
    `You failed robbing ${target} becase the avengers got you`
  ]
   let amount = Math.floor(Math.random() * 50) + 10;
  
  if(amount>targetBalance.amount) amount=(targetBalance.amount)-1
  if(target.id==interaction.user.id) return interaction.reply(`**You can't steal money from yourself**`);
  if(targetBalance.amount<="10") return interaction.reply(`**The person you're stealing has very little money**`);
    let rob = client.eco.beg(interaction.user.id, amount, { canLose: true });
    if (rob.onCooldown) return interaction.reply(`**You have recently attempted to rob someone try again after ${rob.time.seconds} seconds.**`);
        if (rob.lost) return interaction.reply(messages[Math.floor(Math.random() * messages.length)]);
    else { 
     // client.eco.removeMoney(target.id, parseInt(amount));
      let x = client.eco.fetchMoney(target.id).amount - amount 
     //client.eco.addMoney(message.author.id, parseInt(amount));
     client.eco.setMoney(target.id,parseInt(x))
      return interaction.editReply(`**You robbed ${target}** for **${rob.amount}** 💶. Now you have **${rob.after}** 💶.`);
    }
         }, 1000);
   })
   
    }
};
