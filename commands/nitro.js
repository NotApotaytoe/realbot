module.exports = {
    name: "nitro",
    description: "sends fake nitro",
    execute(message, args, Discord) {

  const embed = new Discord.MessageEmbed()
    .setTitle("Here is your Nitro")
    .setDescription("https://discord.gg/aytjx1juy8Wf")
    .setImage("https://cdn.discordapp.com/attachments/716917641209708647/748945266979242106/IMG_20200828_215650.jpg")
    .setColor("RANDOM");
  message.channel.send(embed)
},
};