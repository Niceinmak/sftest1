exports.execute = (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_GUILD") && !client.config.admins.includes(message.member.id)) return message.channel.send(`My prefix for this server is **${client.prefix}**.`);
    let prefix = args[0];
    if (!prefix || prefix=="reset") {
        client.db.delete(`prefix_${message.guild.id}`);
        return message.channel.send(`✅ | Prefix for this server has been reset.`);
    } else {
      let setprefix= prefix+" "
      let setTo = client.db.set(`prefix_${message.guild.id}`, setprefix);
      return message.channel.send(`✅ | Prefix set to \`${prefix}\`.`);
      //return message.channel.send(`✅ | Prefix set to \`${setTo}\`.`);
    }
}

exports.help = {
    name: "prefix",
    aliases: ["setprefix"],
    usage: `prefix <prefix,reset>`
}
