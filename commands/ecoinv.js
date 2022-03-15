const { MessageEmbed } = require("discord.js");
const btcValue = require('btc-value');
exports.execute = async (client, message, args) => {
  btcValue().then(value => {
    value=value.toString().slice(0,3);
    let user = message.mentions.users.first() || message.author;
    let userBalance = client.eco.fetchMoney(`${message.author.id}11`);
    let userBalanceformat=String(userBalance.amount).replace(/(.)(?=(\d{3})+$)/g,'$1,')
    let userBalanceformat2=String(userBalance.amount*value).replace(/(.)(?=(\d{3})+$)/g,'$1,')
    const embed = new MessageEmbed()
        .setTitle(`**EcoCoin🌿**`)
        .setDescription(`**EcoCoin: \`${userBalanceformat}\`\nPrice: \`${userBalanceformat2}\`**`)
        .addField(`Usage`,`Buy \`${client.prefix} buyeco\` \nSell\`${client.prefix} selleco\``)
        .addField(`\`Note\` **This coin can only be used in-game.**`,`**Cannot be bought and sold in real life**`)
        .setColor("RANDOM")
        .setThumbnail(user.displayAvatarURL)
        .setTimestamp();
    return message.channel.send(embed);
});
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
    name: "ecoinv",
    aliases: ["ECOINV","ecoinventory"],
    usage: `ecoinv <user>`
}
