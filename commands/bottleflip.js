module.exports = {
    name: "bottleflip",
    description: "flips a bottle!",
    execute(message, args, Discord) {
        const landedgifs = [

            "https://tenor.com/view/water-bottle-water-bottle-trick-water-bottle-flip-gif-11654326",
            "https://tenor.com/view/lucky-bottle-flip-bottle-cool-gif-15168427",
            "https://tenor.com/view/dmf-david-michael-frank-future-sunsets-bottle-flip-gif-19109146"

        ]

        const didntlandgifs  = [

            "https://tenor.com/view/flip-bottle-fail-epic-fail-kick-bottle-pissed-gif-15062056",
            "https://tenor.com/view/bottle-flip-fail-bottle-flip-challenge-bottle-flip-water-bottle-august-burns-red-gif-14311253",
            "https://tenor.com/view/bottle-flip-fail-flip-tricks-max-thunderman-gif-11203313"
        ]

        const didntlandgif = didntlandgifs[Math.floor(Math.random() * didntlandgifs.length)];
        const landedgif = landedgifs[Math.floor(Math.random() * landedgifs.length)];
        const choices= ["Didnt Land", "Landed"];
        const choice = choices[Math.floor(Math.random() * choices.length)];
       const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("BottleFlip")
        .setDescription(`You flipped a bottle and it **${choice}**!`)
        message.channel.send(embed)
        if (`${choice}`  === 'Landed'){
            message.channel.send(`${landedgif}`)
        } else if (`${choice}` === 'Didnt Land'){
            message.channel.send(`${didntlandgif}`)
        }
    }
}