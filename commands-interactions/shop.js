const { MessageEmbed,MessageButton,MessageActionRow } = require('discord.js');

module.exports = {
    description: 'Browse the shop',
    run: async (client, interaction) => {
       let items = Object.keys(client.shop);
  let content = "";
  
  for (var i in items) {
    if(items[i]=="epic.case" || items[i]=="rare.case" || items[i]=="common.case")
      {
    content += `${items[i]} - 💶 **${ String(client.shop[items[i]].cost).replace(/(.)(?=(\d{3})+$)/g,'$1,')}**\n`
      }
  }
  let embed = new MessageEmbed()
  .setTitle("Store")
  .setDescription(content)
  .setColor("BLURPLE")
  .setFooter("Do :q buy <item> <quantity> to purchase the item.")
  return interaction.reply({embeds:[embed]});
    }
};
