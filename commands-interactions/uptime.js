const { MessageEmbed,MessageButton,MessageActionRow } = require('discord.js');

module.exports = {
    description: 'Show Bot Uptime',
    run: async (client, interaction) => {
  let totalSeconds = (client.uptime / 1000);
let days = Math.floor(totalSeconds / 86400);
totalSeconds %= 86400;
let hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600;
let minutes = Math.floor(totalSeconds / 60);
let seconds = Math.floor(totalSeconds % 60);
return interaction.reply(`** Bot Running Time \`${days}\` hour \`${hours}\` hours \`${minutes}\` minutes  \`${seconds}\` seconds**`);
    }
};
