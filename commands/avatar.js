module.exports = {
    name: "avatar",
    description: "Displays someone's avatar!",
    execute(message, args, Discord) {
        const user = message.mentions.users.first() || message.author || client.users.cache.get(u => u.id === args[0])
        const avatar = user.displayAvatarURL({ size: 4096, dynamic: true})
        const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("Avatar")
        .setImage(avatar)
        .setFooter("dam you sexy <3")
        message.channel.send(embed)
    }
}