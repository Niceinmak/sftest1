exports.execute = async (client, message, args) => {
    let users = [
        "Metverse'deki zengin cna",
        "Zengin kız fakir oğlan dizisindeki fakir oğlan",
        "Sunucunun admini",
        "Sokakdaki yaşlı gitarcı"
    ];
    let amount = Math.floor(Math.random() * 200) + 50;
    let beg = await client.eco.beg(message.author.id, amount, { canLose: true, cooldown: 300000, customName: "search" });
    if (beg.onCooldown) return message.reply(`${beg.time.minutes} dakika & ${beg.time.seconds} saniye sonra tekrar gel.`);
    if (beg.lost) return message.channel.send(`**${users[Math.floor(Math.random() * users.length)]}:** Yakalandın! Parayı alamadın ufaklık.`);
    else return message.reply(`**${users[Math.floor(Math.random() * users.length)]}** ile karlı çıktın,**${beg.amount}**💶 para buldun. Şuan ki paran:**${beg.after}** 💶.`);
};

exports.help = {
    name: "search",
    aliases: ["ara","sc"],
    usage: "search"
}
