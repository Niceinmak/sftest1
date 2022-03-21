const { MessageEmbed,MessageButton,MessageActionRow } = require('discord.js');

module.exports = {
    description: 'Daily money. Sometimes it is necessary.',
    run: async (client, interaction) => {
       let amount = Math.floor(Math.random() * 500) + 100;
    let addMoney = client.eco.daily(interaction.user.id, amount);
    if (addMoney.onCooldown) return interaction.reply(`**You have already claimed your daily credit.** Come back after **${addMoney.time.hours}** hours, **${addMoney.time.minutes}** minutes & **${addMoney.time.seconds}** seconds to claim it again.`);
    else return interaction.reply(`You have claimed **${addMoney.amount}** 💶 as your daily credit & now you have **${addMoney.after}**💶 `);
    }
};
