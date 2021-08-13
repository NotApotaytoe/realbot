module.exports = {
    name: "slowmode",
    description: "Set the slowmode of a channel.",
    execute(message, args, Discord) {
        if(!message.member.hasPermission("ADMINISTRATOR")) {
            return message.reply("You don't have enough perms to use this command!")
        }
    
        let duration = args[0]
        if(isNaN(duration)) return message.reply("Please give the time in seconds.")
        let reason = args.slice(1).join(" ")
        if(!reason) return message.reply("Please specify a reason!")

        const embed = new Discord.MessageEmbed()

        .setTitle("Slowmode!")
        .addFields(
        {name: 'Mod', value: 'message.author.tag'},
        {name: 'Reason', value: 'message.author.tag has set the slowmode to ${duration} because ${reason}'},

        message.channel.sendEmbed(embed)

        )
    }
}

