const { MessageEmbed,MessageButton,MessageActionRow } = require('discord.js');

module.exports = {
    description: 'Search Money',
    run: async (client, interaction) => {
         let users = [
        "Street",
        "ZLos Angeles",
        "Sofiath database",
        "Metaverse"
    ];
    let amount = Math.floor(Math.random() * 200) + 50;
    let beg = await client.eco.beg(interaction.user.id, amount, { canLose: true, cooldown: 300000, customName: "search" });
    if (beg.onCooldown) return interaction.reply(`Come back after **${beg.time.minutes}** minutes & **${beg.time.seconds}** seconds.`);
    if (beg.lost) return interaction.reply(`**${users[Math.floor(Math.random() * users.length)]}:** You were caught! You couldn't get money kiddo.`);
    else return interaction.reply(`**${users[Math.floor(Math.random() * users.length)]}** was somewhat profitable, you found **${beg.amount}**💶. Now you have **${beg.after}** 💶.`);
    }
};
