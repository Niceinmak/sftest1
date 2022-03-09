const discord = require("discord.js")
const client = new discord.Client()
const { Random } = require("random-discord")
const random = new Random();
exports.execute = async (client, message, args) => {
let data = await random.getMeme()
    message.channel.send(data)
}

exports.help = {
    name: "randomeme",
    aliases: ["randommeme"],
    usage: `test`
}
