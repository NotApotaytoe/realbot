const discord = require('discord.js');
const fs = require('fs');
const client = new discord.Client();
const prefix ='<';
const Levels = require('discord-xp');
const memberCounter = require('./counters/member-counter');
const mutedrole = ('871820072493146202');
const memberrole = ('871729778842009600');
const xpfile = require('./xp.json');
const Canvas = require('canvas');
const Canvacord = require('canvacord')

client.aliases = new discord.Collection();


client.commands = new discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('wanker is online!');
    memberCounter(client);
    client.user.setActivity('You sleep ( ͡❛ ෴ ͡❛)', {type: 'WATCHING'}).catch
    (console.error); 
})

// welcome canvas start
var welcomeCanvas = {};
welcomeCanvas.create = Canvas.createCanvas(1024, 500)
welcomeCanvas.context = welcomeCanvas.create.getContext('2d')
welcomeCanvas.context.font = '72px sans-serif';
welcomeCanvas.context.fillStyle = '#ffffff';

Canvas.loadImage("./welcome1.png").then(async (img) => {
    welcomeCanvas.context.drawImage(img, 0, 0, 1024, 500)
    welcomeCanvas.context.fillText("welcome", 360, 360);
    welcomeCanvas.context.beginPath();
    welcomeCanvas.context.arc(512, 166, 128, 0, Math.PI * 2, true);
    welcomeCanvas.context.stroke()
    welcomeCanvas.context.fill()
})

client.on('guildMemberAdd', async member => {
    const welcomechannel = client.channels.cache.get('874220976127234078')
    let canvas = welcomeCanvas;
    canvas.context.font = '42px sans-serif',
    canvas.context.textAlign = 'center';
    canvas.context.fillText(member.user.tag.toUpperCase(), 512, 410)
    canvas.context.font = '32px sans serif'
    canvas.context.fillText(`You are the ${member.guild.memberCount}th`, 512, 455)
    canvas.context.beginPath()
    canvas.context.arc(512, 166, 119, 0, Math.PI * 2, true)
    canvas.context.closePath()
    canvas.context.clip()
    Canvas.loadImage(member.user.displayAvatarURL({format: 'png', size: 1024}))
    .then(img => {
        canvas.context.drawImage(img, 393, 47, 238, 238);
    })
    let atta = new discord.MessageAttachment(canvas.create.toBuffer(), `welcome-${member.id}.png`)
    try {
        welcomechannel.send(`:wave: Hello ${member}, welcome to ${member.guild.name}!`, atta)
    } catch (error) {
        console.log(error)
    }
})


client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return; 
 
    const args = message.content.slice(prefix.length).split(/ +/); 
    const command = args.shift().toLowerCase(); 
 
    if(command === 'ping'){
        message.channel.send('pong'); 
    } else if (command == 'ip'){
        message.channel.send('my ip is 123.456.789.91')
    } else if (command == 'avatar'){
        client.commands.get('avatar').execute(message, args, discord);
    } else if (command == 'help'){
        client.commands.get('help').execute(message, args, discord);
    } else if (command == 'coinflip'){
    client.commands.get('coinflip').execute(message, args, discord);
    } else if (command == '8ball'){
        client.commands.get('8ball').execute(message, args, discord);
    } else if (command == 'ban'){
        client.commands.get('ban').execute(message, args, discord);
    }  else if (command == 'lock'){
        client.commands.get('lock').execute(message, args, discord);
    }  else if (command == 'unlock'){
        client.commands.get('unlock').execute(message, args, discord);
    } else if (command == 'mute'){
        client.commands.get('mute').execute(message, args, discord);
    } else if (command == 'slowmode'){
        client.commands.get('slowmode').execute(message, args, discord);
    } else if (command == 'play'){
        client.commands.get('play').execute(message,args, command, client, discord)
    } else if (command == 'emoji'){
        client.commands.get('emoji').execute(message, args, discord)
    } else if (command == 'ppsize'){
        client.commands.get('ppsize').execute(message, args, discord)
    } else if (command == 'kill'){
        client.commands.get('kill').execute(message, args, discord)
    } else if (command == 'nitro'){
        client.commands.get('nitro').execute(message, args, discord)
    } else if (command == 'howgay'){
        client.commands.get('howgay').execute(message, args, discord)
    } else if (command == 'roast'){
        client.commands.get('roast').execute(message, args, discord)
    } else if (command == 'hug'){
        client.commands.get('hug').execute(message, args, discord)
    } else if (command == 'slap'){
        client.commands.get('slap').execute(message, args, discord)
    } else if (command == 'modmail'){
        client.commands.get('modmail').execute(message, args, discord)
    } else if (command == 'say'){
        client.commands.get('say').execute(message, args, discord)
    } else if (command == 'clear'){
        client.commands.get('clear').execute(message, args, discord)
    } else if (command == 'bottleflip'){
        client.commands.get('bottleflip').execute(message, args, discord)
    }
    


// stare start



let target = message.mentions.members.first() || args.join(" ");
let author = message.member;

if (command == 'stare'){

        if (args[0])
    return;
    
    message.channel.send(`${author} stares at ${target}`),
    message.channel.send("https://tenor.com/view/stare-looking-bald-gif-17303875")
    
}

})


// xp shit

client.on('message', message =>{
    if(message.author.Client) return;
    var addXP = Math.floor(Math.random() * 10); //when i type addXP it will randomly choose a number between 1-10   [  Math.floor(Math.random() * 10)  ]
// lvl 1 statics
    if(!xpfile[message.author.id]) {
        xpfile[message.author.id] = {
           xp: 0,
           level: 1,
           reqxp: 25
        }
// catch errors
       fs.writeFile("./xp.json",JSON.stringify(xpfile),function(err){ 
        if(err) console.log(err)
       })
    }

    xpfile[message.author.id].xp += addXP

    if(xpfile[message.author.id].xp > xpfile[message.author.id].reqxp){
        xpfile[message.author.id].xp -= xpfile[message.author.id].reqxp // it will subtrsct xp whenever u pass a lvl
        xpfile[message.author.id].reqxp *= 2 // XP you need to increase if level 1 is 100 xp so lvl 2 will 200 xp (multiplied by 2 [   .reqxp *= 2  ])
        xpfile[message.author.id].reqxp = Math.floor(xpfile[message.author.id].reqxp) // XP Round
        xpfile[message.author.id].level += 1 // it add 1 level when u level up

// this code will send (" you are now level [your lvl]!") then it will delete it after 10 seconds        
        message.reply("You Are Now Level **"+xpfile[message.author.id].level+"**!").then( 
            msg=>msg.delete({timeout: "100000"})
        )

    }
// catch errors
    fs.writeFile("./xp.json",JSON.stringify(xpfile),function(err){
        if(err) console/log(err)
    })

    //if someone typed in chat =level it will make a embed 
    if(message.content.startsWith("<level")){
        let user = message.mentions.users.first() || message.author

        let embed = new discord.MessageEmbed()
        .setTitle("Level Card")
        .setColor("RANDOM")
        .addField("Level: ",xpfile[user.id].level)
        .addField("XP: ", xpfile[user.id].xp+"/"+xpfile[user.id].reqxp)
        .addField("XP Required: ",xpfile[user.id].reqxp)
        message.channel.send(embed)
    }
})   


// Bye Message

client.on("guildMemberRemove", member => {
    const welcomeChannel = member.guild.channels.cache.find(channel => channel.name === 'goodbye')
    welcomeChannel.send (`Goodbye! ${member} we will miss you! :( `)
})

// auto role on join start

client.on('guildMemberAdd', guildMember =>{
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'member');

    guildMember.roles.add(memberrole);
    
})

client.login('ODcxNzE2MTIxNDAzODU0ODk4.YQfW5w.wPz8r7Qe6d83jffACYrSew0bVOA');



