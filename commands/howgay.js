module.exports = {
    name: "howgay",
    description: "Tells you how gay someone is",
    execute(message, args, Discord) {

        let target = message.mentions.members.first() || args.join(" ");
        let author = message.member;

if(!args[0]) {
    message.channel.send("Who are you going to run the gay test on?")
    return;

}

let rng = Math.floor(Math.random() * 101);

const howgayembed = new Discord.MessageEmbed()
.setTitle(`Gay Machine Calculator`)
.setDescription(`\n \n ** ${target} ** is `  + rng +  "% Gay🌈 \n ")
.setColor("#FFC0CB")
.setTimestamp()


message.channel.send(howgayembed);
},
}