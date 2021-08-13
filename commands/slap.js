module.exports = {
    name: "slap",
    description: "slaps someone",
    execute(message, args, Discord) {


let member = message.mentions.members.first();
if (!member) {
  return message.channel.send("You need a mention a user");
}
 message.channel.send({
  embed: {
    color: "RANDOM",
    title: "Slapped!",
    description:
      message.author.username +
      " slapped 👋 " +
      member.displayName +
      ", " +
      member.displayName +
      " is now crying :cry:",
  },
});
},
};