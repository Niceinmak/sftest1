const { MessageEmbed,MessageButton,MessageActionRow } = require('discord.js');
const Discord = require("discord.js");
let db = require('quick.db');
const DBL = require("dblapi.js");
let ms = require('ms')
const client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.GUILD_MEMBERS,
        Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS
    ]
});
const dbl = new DBL(process.env.TOPGG_TOKEN, + client);
module.exports = {
    description: 'Theres nothing like free money.',
    run: async (client, interaction) => {
         let user = interaction.user
    
  const timeout = 43200000;
  const cooldown = await db.fetch(`cooldown_vote_${interaction.user.id}`);
    let amount = Math.floor(Math.random() * 5000) + 300;
    let amountformat=String(amount).replace(/(.)(?=(\d{3})+$)/g,'$1,')
      dbl.hasVoted(interaction.user.id).then(voted => {
    if (voted){
        	if (cooldown !== null && timeout - (Date.now() - cooldown) > 0) {
		const time = ms(timeout - (Date.now() - cooldown));
		return interaction.reply(`**Wait ${time} to vote again**`);
	}
     client.eco.addMoney(interaction.user.id, parseInt(amount));
      let userBalance = client.eco.fetchMoney(user.id);
    let userBalanceformat=String(userBalance.amount).replace(/(.)(?=(\d{3})+$)/g,'$1,')
       interaction.reply(`**You have won ${amountformat}💶 by voting!**`);
      db.set(`cooldown_vote_${interaction.user.id}`, Date.now());
    }
    else if (!voted){
         const embed = new MessageEmbed()
        .setTitle("EcoVerse Vote")
     //   .setURL("https://www.youtube.com/channel/UCF9E-xef9jL9QgziZRDHKKQ")
        .setDescription(`
       ** ☑| Your daily vote is available!
         :diamond_shape_with_a_dot_inside: | You can vote every 12 hours!
        Please rate the bot at \`https://top.gg/bot/924311092468015116/vote\`**`)
        .setColor("BLURPLE")
        .setTimestamp()
        .setThumbnail(client.user.displayAvatarURL)
        const buton = new MessageButton().setLabel('Vote').setStyle('LINK').setURL('https://top.gg/bot/924311092468015116/vote');
        const row = new MessageActionRow().addComponents(buton)
        return interaction.rep({components:[row], embed: [embed] })
    }
      
		
})
    }
};
