const { ShardingManager } = require('discord.js');


const bumbe = new ShardingManager('./server.js', { 
	totalShards: 2, 
    token: `${process.env.token}`
});
bumbe.spawn();




bumbe.on('shardCreate', shard => {
    console.log(`${shard.id}`);
});