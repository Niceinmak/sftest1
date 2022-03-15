const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
    let leaderboard = client.eco.leaderboard({ limit: 15, raw: false });
    if (!leaderboard || leaderboard.length < 1) return message.channel.send("❌ | Empty Leaderboard!");
    //const embed = new MessageEmbed()
      //  .setAuthor(`${message.guild.name} ! Sunucusunun Liderler Sıralaması`, message.guild.iconURL)
    //.setAuthor(`EcoVerse Top 15 Leaderboard`, message.guild.iconURL)
        //.setColor("RANDOM")
        //.setThumbnail(client.users.cache.get(leaderboard[0].id) ? client.users.cache.get(leaderboard[0].id).displayAvatarURL : "https://cdn.discordapp.com/avatars/603948445362946084/a_f61398e073d78ae104e32b0517c891c3.gif")
        //.setTimestamp();
  let leader="\`\`\`md\n| EcoVerse Top 15 Leaderboard |\n\nNote:Amounts of money here can be bank accounts or EcoCoins\n-------------------------------------------------------------\n"
    leaderboard.forEach(u => {
      let moneyformat=String(u.money).replace(/(.)(?=(\d{3})+$)/g,'$1,')
       // embed.addField(`${u.position}. ${client.users.cache.get(u.id) ? client.users.cache.get(u.id).tag : "Unknown#0000"}`, `**${moneyformat}** 💶`);
      leader+=`<Position:${u.position} | ${client.users.cache.get(u.id) ? client.users.cache.get(u.id).tag : "Unknown#0000"}>\n<Money: ${moneyformat}💶>\n---------------------\n`
    });
  leader+="\n\`\`\`"
  message.channel.send("\`\`\`fix\nt\n\`\`\`"+"\`\`\`\nt\n\`\`\`");
  return message.channel.send(leader)
    //return message.channel.send(embed);
}
const { MessageButton,MessageActionRow } = require('discord.js');

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
    name: "lb",
    aliases: ["leaderboard","LB"],
    usage: `lb`
}
