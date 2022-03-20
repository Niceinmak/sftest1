const { MessageEmbed,MessageButton,MessageActionRow } = require('discord.js');

module.exports = {
    description: 'Pong',
    run: async (client, interaction) => {
      let gatewayLatency = Math.floor(client.ws.ping);
        const embed = new MessageEmbed()
            .setTitle("Pong!")
            .addField("API Latency", `${gatewayLatency}ms`, true)
            .setColor("#7289DA")
            .setTimestamp();
        return interaction.reply({embeds:[embed]});
    }
};
