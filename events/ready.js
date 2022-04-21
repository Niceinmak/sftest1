module.exports = (client) => {
    console.log(`${client.user.tag} is online!`);
  let serverformat=String(client.guilds.cache.size).replace(/(.)(?=(\d{3})+$)/g,'$1,')
  let userformat=String(client.guilds.cache.map((g) => g.memberCount).reduce((a, c) => a + c)).replace(/(.)(?=(\d{3})+$)/g,'$1,')
  client.user.setActivity(`/help | Bot not working? Please add again using the button above!`);
};
