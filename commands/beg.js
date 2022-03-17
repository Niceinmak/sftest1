exports.execute = async (client, message, args) => {
    let users = [
        "Elon Musk",
        "PewDiePie",
        "God",
        "Jeff Bezos"
    ];
    let amount = Math.floor(Math.random() * 50) + 10;
    let beg = client.eco.beg(message.author.id, amount, { canLose: true });
    if (beg.onCooldown) return message.reply(`Begon Thot! Come back after ${beg.time.seconds} seconds.`);
    if (beg.lost) return message.channel.send(`**${users[Math.floor(Math.random() * users.length)]}: Begon Thot! Try again later.**`);
    else return message.reply(`**${users[Math.floor(Math.random() * users.length)]}** donated you **${beg.amount}**💶 .Now you have **${beg.after}**💶.`);
};

exports.help = {
    name: "beg",
    aliases: ["donate","BEG"],
    usage: "beg"
}
