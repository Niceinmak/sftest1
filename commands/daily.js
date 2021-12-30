module.exports.execute = async (client, message, args) => {
    let amount = Math.floor(Math.random() * 500) + 100;
    let addMoney = client.eco.daily(message.author.id, amount);
    if (addMoney.onCooldown) return message.reply(`Bugünkü paranı topladın.Lütfen ${addMoney.time.hours} saat, ${addMoney.time.minutes} dakika & ${addMoney.time.seconds} saniye sonra tekrar gel.`);
    else return message.reply(`Bu gün **${addMoney.amount}** 💸topladın.Toplam paran **${addMoney.after}** 💸oldu!`);
};

module.exports.help = {
    name: "daily",
    aliases: [],
    usage: "daily"
}
