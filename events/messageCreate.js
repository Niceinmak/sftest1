module.exports = async (client, message) => {
    if (!message.guild || message.author.bot) return;
    if (message.channel.id === client.cfg.countChannel) require("../counter")(message, client);
    client.prefix = client.db.fetch(`prefix_${message.guild.id}`) ? client.db.fetch(`prefix_${message.guild.id}`) : client.cfg.prefix;
  console.log(message.content, client.db.fetch(`prefix_${message.guild.id}`))
    if (!message.content.startsWith(client.prefix)) return;
  console.log(message.content)
    let args = message.content.slice(client.prefix.length).trim().split(" ");
    let commandName = args.shift().toLowerCase();
    let command = client.cmds.get(commandName) || client.cmds.get(client.aliases.get(commandName));
    if (!command) return;
  console.log(message.content)
    client.ecoAddUser = message.author.id;
    command.execute(client, message, args);
};
