const { MessageEmbed,MessageButton,MessageActionRow } = require('discord.js');
const moment = require("moment");
let ms = require('ms');
let db = require('quick.db');
module.exports = {
    description: 'Add money command for admins',
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
    let amount = interaction.options.getInteger('amount')
      let data = client.eco.addMoney(user.id, parseInt(amount));
  let dataformat=String(data.amount).replace(/(.)(?=(\d{3})+$)/g,'$1,')
    const embed = new MessageEmbed()
        .setTitle(`Money Added!`)
        .addField(`User`, `<@${data.user}>`)
        .addField(`Balance Given`, `**${dataformat}** 💶`)
        .addField(`Total Amount`, `**${data.after}**`)
        .setColor("RANDOM")
        .setThumbnail(user.displayAvatarURL)
        .setTimestamp();
    return interaction.reply({embeds:[embed]});
    }
};
