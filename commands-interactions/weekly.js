const { MessageEmbed,MessageButton,MessageActionRow } = require('discord.js');

module.exports = {
    description: 'Weekly Cash',
    run: async (client, interaction) => {
    let amount = Math.floor(Math.random() * 1000) + 500;
    let addMoney = client.eco.weekly(interaction.user.id, amount);
      
    if (addMoney.onCooldown) 
      {
        return interaction.reply({
           content:[`You have already claimed your **weekly credit**. Come back after **${addMoney.time.days}** days, **${addMoney.time.hours}**hours, **${addMoney.time.minutes}** minutes & **${addMoney.time.seconds}** seconds to claim it again.`],
       })
      }
    else 
      {
       interaction.reply({
          content:[`You have claimed **${addMoney.amount}** 💶 as your weekly credit & now you have **${addMoney.after}** 💶.`],
       })
      }
      
    }
};
