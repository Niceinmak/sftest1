const { MessageEmbed,MessageButton,MessageActionRow } = require('discord.js');

module.exports = {
    description: 'Look Your Eggs',
    run: async (client, interaction) => {
      const embed = new MessageEmbed()
    .setTitle(`${interaction.user.username}'s Eggs!`)
    .setColor("RANDOM")
    .setThumbnail()
    .setTimestamp();
  const x = client.db.get(`eggs_${interaction.user.id}`);
  if (!x) {
    return interaction.reply(`**No Eggs Found To Display :c**`);
  }
  const arrayToObject = x.reduce((itemsobj, x) => {
    itemsobj[x.name] = (itemsobj[x.name] || 0) + 1;
    return itemsobj;
  }, {});
  const result = Object.keys(arrayToObject).map(k =>
    embed.addField(`Name: ${k}`, `Quantity:**${arrayToObject[k]}**`, false)
  );

  return interaction.reply({embeds:[embed]});
    }
};
