var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "Live on Twitch",
assets : {
large_image : "vscode",
large_text : "Visual Studio Code" // THIS WILL SHOW AS "Playing <Status>" from the outisde
},
buttons : [{label : "Watch" , url : "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},{label : "Visit",url : "https://www.youtube.com/watch?v=dQw4w9WgXcQ"}]
}
})
})
client.login({ clientId : "834735598958018580" }).catch(console.error);