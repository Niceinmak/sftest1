exports.execute = async (client, message, args) => {
    let amount = Math.floor(Math.random() * 1000) + 500;
    let addMoney = client.eco.weekly(message.author.id, amount);
    if (addMoney.onCooldown) return message.reply(`Bu haftaki paranı topladın.${addMoney.time.days} gün, ${addMoney.time.hours} saat, ${addMoney.time.minutes} dakika & ${addMoney.time.seconds} saniye sonra tekrar alabilirsin.`);
    else return message.reply(`Bu hafta**${addMoney.amount}** 💶topladın.Toplam paran **${addMoney.after}** 💶oldu!`);
};

exports.help = {
    name: "weekly",
    aliases: [],
    usage: "weekly"
}
