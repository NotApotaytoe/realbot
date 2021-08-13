
module.exports = {
    name: "coinflip",
    description: "flips a coin!",
    aliases: ["coin flip"],
    execute(message, args, Discord) {
        const choices= ["heads", "tails"];
        const choice = choices[Math.floor(Math.random() * choices.length)];
       const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("Coinflip!")
        .setDescription(`You flipped a **${choice}**!`)
        message.channel.send(embed)
    }
}