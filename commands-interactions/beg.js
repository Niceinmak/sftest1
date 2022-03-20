const { MessageEmbed,MessageButton,MessageActionRow } = require('discord.js');

module.exports = {
    description: 'Dont have money, try begging!',
    run: async (client, interaction) => {
        let users = [
        "Elon Musk",
        "PewDiePie",
        "God",
        "Jeff Bezos"
    ];
    let amount = Math.floor(Math.random() * 50) + 10;
    let beg = client.eco.beg(interaction.user.id, amount, { canLose: true });
    if (beg.onCooldown) return interaction.reply(`Begon Thot! Come back after ${beg.time.seconds} seconds.`);
    if (beg.lost) return interaction.reply(`**${users[Math.floor(Math.random() * users.length)]}: Begon Thot! Try again later.**`);
    else return interaction.reply(`**${users[Math.floor(Math.random() * users.length)]}** donated you **${beg.amount}**💶 .Now you have **${beg.after}**💶.`);
    }
};
