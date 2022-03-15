exports.execute = (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_GUILD") && !client.config.admins.includes(message.member.id)) return message.channel.send(`My prefix for this server is **${client.prefix}**.`);
    let prefix = args[0];
    if (!prefix || prefix=="reset") {
        client.db.delete(`prefix_${message.guild.id}`);
        return message.channel.send(`✅ | Prefix for this server has been reset.`);
    } else {
      let setprefix= prefix+" "
      let setTo = client.db.set(`prefix_${message.guild.id}`, setprefix);
      return message.channel.send(`✅ | Prefix set to \`${prefix}\`.`);
      //return message.channel.send(`✅ | Prefix set to \`${setTo}\`.`);
    }
}
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
    name: "prefix",
    aliases: ["setprefix"],
    usage: `prefix <prefix,reset>`
}
