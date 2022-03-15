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
const { MessageEmbed,MessageButton,MessageActionRow } = require('discord.js');

module.exports = {
    description: 'Yardım Menüsü',
    run: async (client, interaction) => {
        const embed = new MessageEmbed()
        .setTitle('Gweep Creative Çekiliş Botu Yardım Menüsü')
        .setDescription(`Botta (Slash) komutlar mevcuttur. Bu komutlar üzrinden işlemleirini yapabilirsiniz.`)
        .addField('`/başlat`','Çekiliş Başlatır',false)
        .addField('`/bitir`','Var olan çekilişi bitirir',false)
        .addField('`/drop`','drop çekiliş başlatır',false)
        .addField('`/yenile`','Sonlanmış çekilişin kazananını yeniden belirler',false)
        .addField('`/durdur`','Devam eden çekilişi durdurur',false)
        .addField('`/devam`','Durmuş çekilişi başlatır',false)
        .setFooter(`Developed by Gweep Creative 💖`)
        .setThumbnail(client.user.avatarURL());
        const buton = new MessageButton().setLabel('Gweep Creative Youtube').setStyle('LINK').setURL('http://gweepcreative.com');
        const row = new MessageActionRow().addComponents(buton)
       interaction.reply({
           embeds:[embed],
           components:[row],
       })
    }
};
exports.help = {
    name: "beg",
    aliases: ["donate"],
    usage: "beg"
}
