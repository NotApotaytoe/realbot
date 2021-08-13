module.exports = {
    name: "mute",
    description: "Mutes someone",


    execute(message, args, Discord) {
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You do not have enough perms to use this cmd!");

        const target = message.mentions.members.first()
        if(!target) return message.reply("Please mention someone to mute!");

        if(target.id === message.author.id) {
            return message.reply("You cannot mute yourself!")
        }

        let reason = args.slice(1).join(" ");
        if(!reason) return message.reply("Please give a reason to mute someone!")

        const memberrole = message.guild.roles.cache.find(r => r.name === "member")
        const mutedrole = message.guild.roles.cache.find(r => r.name === "muted");
        if(!memberrole) return message.reply("Couldnt find the `Member` role!")
        if(!mutedrole) return message.reply("Couldnt find the `Muted` role!")

        if(target.roles.cache.some(r => r.name === "Muted")) {
            return message.reply("The user is already muted!");
        }

        const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("Member Muted!")
        .addField("Member", target.user.tag)
        .addField("Moderator", message.author.tag)
        .addField("Reason", reason)
        message.channel.send(embed)
        target.roles.add(mutedrole)
        target.roles.remove(memberrole)
    }
}
