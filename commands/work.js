module.exports.execute = async (client, message, args) => {
      let jobs = [
        "Doktor",
        "Pompacı",
        "Diş hekimi",
        "Müzisyen",
        "Yayıncı",
        "Youtuber",
        "Yazılımcı",
        "Tesisatçı",
        "Döşemeci"
    ];
    let amount = Math.floor(Math.random() * 1500) + 1000;
    let work = client.eco.work(message.author.id, amount);
    if (work.onCooldown) return message.reply(`Çok yoruldum dostum.${work.time.minutes} dakika & ${work.time.seconds} sonra tekrar gel.`);
    else return message.reply(`**${jobs[Math.floor(Math.random() * jobs.length)]}** olarak çalıştın ve **${work.amount}** 💶 .**${work.after}** 💶 kazandın.`);
};

module.exports.help = {
    name: "work",
    aliases: [],
    usage: "work"
}
