module.exports = {
    name: "emoji",
    description: "send emoji",
    execute(message, args, Discord) {
        let question = args.join[0]
        let responses = [
            
            "ツ",
            "( ͡° ͜ʖ ͡°)",
            "ಠ_ಠ",
            "(╯°□°）╯︵ ┻━┻",
            "┻━┻ ︵ ヽ(°□°ヽ)",
            "(ง’̀-‘́)ง",
            "╭∩╮（︶︿︶）╭∩╮",
            "(✿◠‿◠)",
            "(｡◕‿◕｡)",
            "ヽ༼ຈل͜ຈ༽ﾉ",
            "(づ｡◕‿‿◕｡)づ",
            "~(˘▾˘~)",
            "(. ❛ ᴗ ❛.)",
            "☉_☉",
            "o_O",
            "(¬_¬)",
            "♪(๑ᴖ◡ᴖ๑)♪",
            "( ͡ಥ ͜ʖ ͡ಥ)",
            "( ͡◭ ͜ʖ ͡◭)",
            "( ͡🔥 ͜ʖ ͡🔥)",
            "( ͡👁 ͜ʖ ͡👁)",
            "( ͡❛ 👅 ͡❛)",
            "( ͡❛ ω ͡❛)",
            "( ͡❛ _⦣ ͡❛)",
            "( ͡❛ ෴ ͡❛)",
            "( ͡⊗ ͜ʖ ͡⊗)",
            "(>‿◠)✌",
            "~(^-^)~"


        ]

        let response = responses[Math.floor(Math.random() * responses.length)]

        message.channel.send(` ${response} `)
}


}
