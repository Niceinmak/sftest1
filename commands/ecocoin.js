const { MessageEmbed } = require("discord.js");
const btcValue = require('btc-value');
exports.execute = async (client, message, args) => {
  let users = [
        "Pocket",
        "T-Shirt",
        "Zero's Databse",
        "Street"
    ];
    let ecocoin=0
    let amount = Math.floor(Math.random() * 200)+50;
    let amount3 = args[0]
    const embed = new MessageEmbed()
    btcValue().then(value => {
      let value1=value
      value1 = value1.toString().slice(0,3);
    ecocoin=value1
        
        embed.setTitle(`**EcoCoin🌿**`)
        embed.setDescription(`**EcoCoin instant price:** \`${ecocoin}\``)
  

btcValue.getPercentageChangeLastDay().then(percentage => {
  embed.addField(`**Percentage compared to last day:**`,`**%${percentage.toString().slice(0,5)}**`)

  embed.addField(`\`Note\` **This coin can only be used in-game.**`,`**Cannot be bought and sold in real life**`)
  message.channel.send(embed);
      });
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
    name: "ecocoin",
    aliases: ["ECOCOIN","eco"],
    usage: `ecocoin`
}
