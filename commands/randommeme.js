const discord = require("discord.js")
const client = new discord.Client()
const random = require("something-random-on-discord").Random
exports.execute = async (client, message, args) => {
let data = await random.getMeme()
    message.channel.send(data)
}

exports.help = {
    name: "randomeme",
    aliases: ["randommeme"],
    usage: `test`
}
