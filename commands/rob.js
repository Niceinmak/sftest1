exports.execute = async (client, message, args) => {
  let target = message.mentions.members.first() || message.guild.members.cache.get(args[0]) 
  let authordata = client.eco.fetchMoney(message.author.id) 
  let authordataname = client.eco.fetchMoney(message.author.id) 
  let targetname=args[0]
  if(!target) return message.reply("Who are you trying to rob?")
  let targetBalance = client.eco.fetchMoney(target.id);
  let messages = [
    `You tripped while trying to rob ${target} and got caught!`,
    `Getting sneaky eh? ${target} called the cops on you!`,
    `You failed robbing ${target} becase the avengers got you`
  ]
   let amount = Math.floor(Math.random() * 50) + 10;
  
  if(amount>targetBalance.amount) amount=(targetBalance.amount)-1
  if(target.id==message.author.id) return message.reply(`**You can't steal money from yourself**`);
  if(targetBalance.amount<="10") return message.reply(`**The person you're stealing has very little money**`);
    let rob = client.eco.beg(client.ecoAddUser, amount, { canLose: true });
    if (rob.onCooldown) return message.reply(`**You have recently attempted to rob someone try again after ${rob.time.seconds} seconds.**`);
  
    if (rob.lost) return message.channel.send(messages[Math.floor(Math.random() * messages.length)]);
    else { 
     // client.eco.removeMoney(target.id, parseInt(amount));
      let x = client.eco.fetchMoney(target.id).amount - amount 
     //client.eco.addMoney(message.author.id, parseInt(amount));
     client.eco.setMoney(target.id,parseInt(x))
      message.reply(`**You robbed ${target}** for **${rob.amount}** 💶. Now you have **${rob.after}** 💶.`);
    }
};

exports.help = {
    name: "rob",
    aliases: ["ROB"],
    usage: "rob <user>"
}
