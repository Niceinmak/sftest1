const { MessageEmbed,MessageButton,MessageActionRow } = require('discord.js');

module.exports = {
    description: 'Test',
    run: async (client, interaction) => {
      if (!client.cfg.admins.includes(interaction.user.id)) return interaction.reply("**Only bot administrators are authorized to send and set money.**"); // return if author isn't bot owner
      //const x=client.db.all(`items`);
      //console.log(x)
      //client.db.delete(`eggs_${interaction.user.id}`);
      let name="1.2034023500235"
      var argString = name.toString().substring(0).split(".");
      console.log(argString[0])
      let point=client.db.get(`battlepass_${interaction.user.id}.point`)
      if(!point) point=0
      point++
      client.db.set(`battlepass_${interaction.user.id}`, { point: point })
        const embed = new MessageEmbed()
        	.setColor('#0099ff')
	.setTitle('Some title')
 .setDescription(`${point}`)
	.setURL('https://discord.js.org/')
	.setAuthor({ name: 'Some name', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
        const buton = new MessageButton().setLabel('EcoVerse Website').setStyle('LINK').setURL('http://ecoverse.ml');
        const row = new MessageActionRow().addComponents(buton)
       interaction.reply({
           embeds:[embed],
           components:[row],
       })
      const message = await interaction.fetchReply();
            message.react("👊")
        //  msg.react("")  
          message.react("🛑")
    }
};
