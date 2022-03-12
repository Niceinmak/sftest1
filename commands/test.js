const { MessageEmbed } = require("discord.js");
const { SlashCommandBuilder }=require("@discordjs/builders");
exports.execute = async (client, message, args) => {
  var users = [
        "Pocket",
        "T-Shirt",
        "Zero's Databse",
        "Street"
    ];
    let amount = Math.floor(Math.random() * 200)+50;
    let amount3 = args[0]
    users.push("t")
       // Use a promise to wait for the question to reach Discord first
        message.channel.send('Which emoji do you prefer?').then((question) => {
          // Have our bot guide the user by reacting with the correct reactions
          question.react('👍');
          question.react('👎');
    
          // Set a filter to ONLY grab those reactions & discard the reactions from the bot
const filter = (reaction, user) => {
	return reaction.emoji.name === '👍' && user.id === message.author.id;
};

const collector = message.createReactionCollector({ filter, time: 15000 });

collector.on('collect', (reaction, user) => {
	console.log(`Collected ${reaction.emoji.name} from ${user.tag}`);
});

collector.on('end', collected => {
	console.log(`Collected ${collected.size} items`);
});
        });

  
}

exports.help = {
    name: "test",
    aliases: ["t","TEST"],
    usage: `test`
}
