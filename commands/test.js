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
            return ['👍', '👎'].includes(reaction.emoji.name) && !user.bot;
          };
    
          // Create the collector
          const collector = message.createReactionCollector({ filter, time: 15000 });
          collector.on('end', (collected, reason) => {
            if (reason === 'time') {
              message.reply('Ran out of time ☹...');
            } else {
              // Grab the first reaction in the array
              let userReaction = collected.array()[0];
              // Grab the name of the reaction (which is the emoji itself)
              let emoji = userReaction._emoji.name;
    
              // Handle accordingly
              if (emoji === '👍') {
                message.reply('Glad your reaction is 👍!');
              } else if (emoji === '👎') {
                message.reply('Sorry your reaction is 👎');
              } else {
                // This should be filtered out, but handle it just in case
                message.reply(`I dont understand ${emoji}...`);
              }
            }
          });
        });

  
}

exports.help = {
    name: "test",
    aliases: ["t","TEST"],
    usage: `test`
}
