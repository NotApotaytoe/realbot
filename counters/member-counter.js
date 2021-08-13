module.exports = async (client) =>{
    const guild = client.guilds.cache.get('858411206784450580'); //id of server
    setInterval(() =>{
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('871727913127522314');
        channel.setName(`Total Members: ${memberCount.toLocaleString()}`);
        console.log('Updating Member Count');
    }, 20000);
}