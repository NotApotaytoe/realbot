module.exports = {
    name: "say",
    description: "makes the boy say sum",
    execute(message, args, Discord) {

        if (!args.join(" ")) {
message.channel.send("Please add some text for me to repeat");
}
message.channel.send(args.join(" "), {
  allowedMentions: { parse: ["users"] },
});
message.delete();
},
};