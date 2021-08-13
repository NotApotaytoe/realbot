module.exports = {
    name: "lock",
    description: "Locks a given channel for a particular role!",
    execute(message, args, Discord) {
        if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("You do not have enough perms to use this cmd!")
        const channel = message.mentions.channels.first()
        if(!channel) return message.reply("Please mention a valid channel!")
        const roletofind = args.slice(1).join(" ")
        const role = message.guild.roles.cache.find(r => r.id === roletofind)
        if(!role) return message.reply("Please give a valid role id!")
        let Embed = new Discord.MessageEmbed()
        .setTitle("channel locked!")
        .setDescription(`This channel has been locked by ${message.author.tag}`)
        .setTimestamp()
        .setColor("RANDOM")
        .setFooter("remember kids go blow up")
        .setImage('https://www.google.com/imgres?imgurl=https%3A%2F%2Fichef.bbci.co.uk%2Fnews%2F1024%2Fmedia%2Fimages%2F83663000%2Fjpg%2F_83663079_binladen.jpg&imgrefurl=https%3A%2F%2Fwww.bbc.com%2Fnews%2Fworld-middle-east-33152315&tbnid=gLrmuZd6tltGIM&vet=12ahUKEwjDjOnLqpPyAhXZw4UKHYEOAbMQMygCegQIARB8..i&docid=5ODFJg8DEHk_vM&w=1024&h=576&q=picture%20of%20bin%20laden&client=opera-gx&ved=2ahUKEwjDjOnLqpPyAhXZw4UKHYEOAbMQMygCegQIARB8')
        channel.updateOverwrite(role, {
            SEND_MESSAGES: false
        })
      channel.send(Embed)
    }
}