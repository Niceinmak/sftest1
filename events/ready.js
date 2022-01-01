module.exports = (client) => {
    console.log(`${client.user.tag} is online!`);
  client.user.setActivity(`[𝙦 𝙝𝙚𝙡𝙥 ] , ${client.guilds.cache.size} servers and ${client.guilds.cache.map((g) => g.memberCount).reduce((a, c) => a + c)} users are served.Maked by Niceinmak#9634`);
};
