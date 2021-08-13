module.exports = {
    name: "unlock",
    description: "Unlocks a given channel for a particular role!",
     execute(message, args, Discord) {
        if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("You do not have enough perms to use this cmd!")
        const channel = message.mentions.channels.first()
        if(!channel) return message.reply("Please mention a valid channel!")
        const roletofind = args.slice(1).join(" ")
        const role = message.guild.roles.cache.find(r => r.id === roletofind)
        if(!role) return message.reply("Please give a valid role id!")
        let Embed = new Discord.MessageEmbed()
        .setTitle("channel unlocked!")
        .setDescription(`This channel has been unlocked by ${message.author.tag}`)
        .setTimestamp()
         .setColor("RANDOM")
        channel.updateOverwrite(role, {
            SEND_MESSAGES: true
        })
        channel.send(Embed)
    }
}