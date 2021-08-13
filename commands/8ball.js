module.exports = {
    name: "8ball",
    description: "Ask the 8ball a question!",
        execute(message, args, Discord) {
          let question = args.join(" ")
          if(!question) return message.reply("Please ask a question!")
          let responses = [
            "🎱 Yes",
            "🎱 No",
            "🎱 Never",
            "🎱 Perhaps",
            "🎱 I don't Know",
            "🎱 Of Course",
            "🎱 Certainly",
            "🎱 Most Definatly",
            "🎱 Obviously",
            "🎱 Of Course Not",
            "🎱 Most Definatly Not",
            "🎱 Certainly Not",
            "🎱 Don't rely on it.",
            "🎱 You can rely on it.",
            "🎱 Without a doubt.",
            "🎱 My sources say no.",
            "🎱 My sources say yes."
          ]
          let response = responses[Math.floor(Math.random() * responses.length)]
          const embed = new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setTitle("8Ball ")
          .setDescription(`**${response}**`)
          message.channel.send(embed);
  }
  }