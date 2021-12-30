exports.execute = async (client, message, args) => {
    let users = [
        "cna ama fosworlu",
        "paralel evrendeki cna",
        "Tanrı",
        "İsimsiz bir zengin"
    ];
    let amount = Math.floor(Math.random() * 50) + 10;
    let beg = client.eco.beg(message.author.id, amount, { canLose: true });
    if (beg.onCooldown) return message.reply(`Biraz beklemen lazım! ${beg.time.seconds} saniye sonra tekrar gel`);
    if (beg.lost) return message.channel.send(`**${users[Math.floor(Math.random() * users.length)]}:**Sana para vermediler! Tekrar dene.**`);
    else return message.reply(`**${users[Math.floor(Math.random() * users.length)]}** sana **${beg.amount}**💶 bağış yaptı.\n Şuanki paran:**${beg.after}**💶.`);
};

exports.help = {
    name: "beg",
    aliases: ["donate"],
    usage: "beg"
}
