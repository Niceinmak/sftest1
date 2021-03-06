const { MessageEmbed,MessageButton,MessageActionRow } = require('discord.js');
const moment = require("moment");
let ms = require('ms');
let db = require('quick.db');
module.exports = {
    description: 'Set user money',
  options: [
        {
            name: 'user',
            description: 'Select a user',
            type: 'USER',
            required: true
        },
    {
            name: 'amount',
            description: 'Select amount',
            type: 'INTEGER',
            required: true
        },
    ],
    run: async (client, interaction) => {
      if (!client.cfg.admins.includes(interaction.user.id)) return interaction.reply("**Only bot administrators are authorized to send and set money.**"); // return if author isn't bot owner
      let user = interaction.options.getUser('user')
    if (!user) return interaction.reply("Please specify a user!");
    let amount = interaction.options.getInteger('amount')
    if (!amount || isNaN(amount)) return interaction.reply("Please specify a valid amount.");
    let data = client.eco.setMoney(user.id, parseInt(amount));
    let dataafterformat=String(data.after).replace(/(.)(?=(\d{3})+$)/g,'$1,')
    const embed = new MessageEmbed()
        .setTitle(`Money Updated!`)
        .addField(`User`, `<@${data.user}>`)
        .addField(`Total Amount`, `**${dataafterformat}**💶`)
        .setColor("RANDOM")
        .setThumbnail(user.displayAvatarURL)
        .setTimestamp();
    return interaction.reply({embeds:[embed]});
    }
};
