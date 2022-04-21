module.exports = (client) => {
    console.log(`${client.user.tag} is online!`);
  let serverformat=String(client.guilds.cache.size).replace(/(.)(?=(\d{3})+$)/g,'$1,')
  let userformat=String(client.guilds.cache.map((g) => g.memberCount).reduce((a, c) => a + c)).replace(/(.)(?=(\d{3})+$)/g,'$1,')
  let server = client.guilds.cache.get("925628280785231872")
  let role = server.roles.cache.find(r => r.id === "964559669219700756");
  role=role.members.map(m=>m.user.tag);
  console.log(role)
  client.user.setActivity(`/help | Bot not working? Please add again using the button above!`);
};
