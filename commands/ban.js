module.exports = { 
    name: "ban",
    description: "ban someone",
    execute(message, args, Discord) {
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("You dont have enough perms to use this command!")
        let target = message.mentions.members.first()

        if(!target) return message.reply("Please mention someone to ban!")

        if(target.id === message.author.id) {
            return message.reply("You cannot kick yourself!")
        }

        let reason = args.slice(1).join(' ')

        if(!reason) return message.reply("Please give a reason!")

        const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("Member Banned")
        .addField("User", target.user.tag)
        .addField("Moderator", message.author.tag)
        .addField("Reason", `${reason}`)
        message.channel.send(embed)
        target.ban({reason:reason})
    }
}