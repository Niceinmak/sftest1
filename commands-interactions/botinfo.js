const { MessageEmbed,MessageButton,MessageActionRow } = require('discord.js');

module.exports = {
    description: 'Bot info command, but unfortunately only for admins.',
  options: [
        {
            name: 'guild_id',
            description: 'Write a Guild ID',
            type: 'STRING',
            required: false
        },
    ],
    run: async (client, interaction) => {
       let id=interaction.options.getString('guild_id')
    if (!client.cfg.admins.includes(interaction.user.id)) return interaction.reply("**Only bot administrators.**"); // return if author isn't bot owner
  let serverformat=String(client.guilds.cache.size).replace(/(.)(?=(\d{3})+$)/g,'$1,')
  let userformat=String(client.guilds.cache.map((g) => g.memberCount).reduce((a, c) => a + c)).replace(/(.)(?=(\d{3})+$)/g,'$1,')
const embed = new MessageEmbed()
        .setTitle(`Bot Info`)
       .addField(`Servers:`,serverformat)
       .addField(`Users:`,userformat)
let servernames=""
client.guilds.cache.forEach(guild => {
  if(guild.id==id)
    {
   embed.addField(`Find Server:`,`\`${guild.name} | ${guild.id}\``)
    }
  if(guild.name==id)
    {
   embed.addField(`Find Server:`,`\`${guild.name} | ${guild.id}\``)
    }
})
  return interaction.reply({embeds:[embed]});
    }
};
