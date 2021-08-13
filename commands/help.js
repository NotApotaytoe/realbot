module.exports = {
    name: 'help',
    description: 'Embeds',
    execute(message, args, Discord) {

        let question = args.join[0]

        const newEmbed = new Discord.MessageEmbed()

        newEmbed.setColor('RANDOM') // Strip on the side of embed
        .setTitle('Help') // The top aka title
        .setURL('https://www.youtube.com') // Click on the title
        .setDescription("**List of commands!**") // Underneath the title
        .addFields(
            {name: 'Prefix', value: ' \n **The prefix is "<"** you must remember the prefix or else you wont be able to do any commands what so ever! \n '},
            {name: 'Fun', value: ' \n **PPsize** - Shows you your pp size! \n \n**CoinFlip** - Flips a coin heads/tails! \n \n **8ball** - Ask the 8ball a question will respond with various answers! \n \n **Emoji** - Will reply with a rnaodm emoji! \n \n **Avatar** - Displays your avatar! \n \n **Howgay** - Tells you how gay someone is! \n \n **Hug** - Gives someone a big hug! \n \n **Kill** - Kills someone! \n \n **Nitro** - Sends "Real" nitro! \n \n **Roast** - Roasts you or someone else! \n \n **Slap** - Gives somone a massive slap! \n \n **Say** - Makes the bot say something! \n \n **BottleFlip** - Does a bottle flip! \n \n **Stare** - Sends a gif of you staring at someone! \n', inline: true },
            {name: 'Moderation', value: ' \n **Lock** - Locks a specific channel for any role! \n \n **Unlock** - Unlocks any channel for a specific role! \n \n **Ban** - Bans a user! \n \n**Mute** - Mutes a user! \n \n **Unmute** - Unmutes a user! \n \n **Soft Ban** - Temporarily bans a member **(coming soon)** \n \n **Kick** - Kicks a user! \n **(coming soon)** \n \n ** ** ', inline: true },
    
        )
 

           // remnove to add image.   .setImage(` **${image} `)   // Image 
        .setFooter('If you need any help fell free to dm Potato Man#0001 😄 ') // Underneath the image (very small)
    

    message.channel.send(newEmbed)
    }





}