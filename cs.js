const Discord = require("discord.js");
const { format } = require("path");
const Client = new Discord.Client();
const {harga,pembayaran,hargavalo,beli,hrgm} = require("./datakata.json")
// const {Client} = require("./config.json")
const prefix = "prefix"
Client.login("tokenbot")

let statuses = ["cs/hai globob 👋🏻","Costumer Service 🤖","Online 24 Jam 🕛","Melayani Dengan Ramah 🙏","Siap Menjawab 👦🏼 ","Panggil Saya Globob 👩🏻‍💻"]
Client.on('ready',()=>{
    console.log("Bot CSDinotro is online");
    setInterval(function(){

        let status = statuses[Math.floor(Math.random()*statuses.length)]
        Client.user.setPresence({activity: {name: status,type: 'WATCHING'}, status:'online'})
    },3000)

})

Client.on('message', message =>{
    const user = message.author.username
    
    if(message.content.startsWith(`${prefix}hai globob`)){
        
        // var text = message.content.split(' ').slice(1).join(' ');
        // if(!text) return message.reply('Spicify')
         
         var embed = new Discord.MessageEmbed()
                .setAuthor(`Pertanyaan Dari ${user}`, message.author.displayAvatarURL({format: "gif",format : "png", dynamic : "true"}))
                .setColor("RANDOM")
                .setDescription(`**Hallo ${user}** **Ada yang bisa dibantu? Berikut Command Costumer Service**`)
                .addField("``cs/produk``","Tentang Produk Yang Kami Jual", true)
                .addField("``cs/beli``","Tentang Bagaimana Cara Pembelian Melalui Bot", true)
                .addField("``cs/bayar``","Tentang Pembayaran Produk", true)
                .addField("Tanya Harga?","Langsung saja ketik terserah akan dijawab secara otomatis asalkan terkait dengan produk kami", true)
                .addField("Pembelian Lewat Whatssapp","Jika mau melakukan pembelian lewat Whatssapp bisa langsung klik link di command cs/beli")
               // .setThumbnail('https://static.republika.co.id/uploads/images/detailnews/dompet-digital-dana-_200127133243-559.jpg')
                .setTimestamp()
                .setFooter('©!Mas Din#6666 • Beta')
                message.channel.send(embed)
        
    }
})

Client.on("message", async message =>{
    const userr = message.author.username
    let confirm = false

    var i
    for(i = 0;i<harga.length;i++){
        if(message.content.toLowerCase().includes(harga[i].toLocaleLowerCase()))
        confirm = true
    }

    if(confirm){
       
        const embed = new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL({format: "gif",format : "png", dynamic : "true"}))
            .setColor("RANDOM")
            .setFooter('©!Mas Din#6666 • Version BETA')
            .setTimestamp()
            .setDescription(`**Nitro Ready ${userr} harga bisa diliat di** ${message.guild.channels.cache.get("idchannel")}`)
            
        return message.channel.send(embed)
    }
})

Client.on("message", async message =>{
    const userr = message.author.username
    let confirm = false

    var i
    for(i = 0;i<hrgm.length;i++){
        if(message.content.toLowerCase().includes(hrgm[i].toLocaleLowerCase()))
        confirm = true
    }

    if(confirm){
       
        const embed = new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL({format: "gif",format : "png", dynamic : "true"}))
            .setColor("RANDOM")
            .setFooter('©!Mas Din#6666 • Version BETA')
            .setTimestamp()
            .setDescription(`**Top Up Mobile dan Steam Wallet Ready ${userr} Harga Bisa Diliat di** ${message.guild.channels.cache.get("idchannel")}`)
            
        return message.channel.send(embed)
    }
})

Client.on("message", async message =>{
    const userr = message.author.username
    let confirm = false

    var i
    for(i = 0;i<pembayaran.length;i++){
        if(message.content.toLowerCase().includes(pembayaran[i].toLocaleLowerCase()))
        confirm = true
    }

    if(confirm){
       
        const embed = new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL({format: "gif",format : "png", dynamic : "true"}))
            .setColor("RANDOM")
            .setFooter('©!Mas Din#6666 • Version BETA')
            .setTimestamp()
            .setDescription(`**Hallo ${userr} Pembayaran bisa dicek di ** ${message.guild.channels.cache.get("idchannel")}`)
            
        return message.channel.send(embed)
    }
})

Client.on("message", async message =>{
    const userr = message.author.username
    let confirm = false

    var i
    for(i = 0;i<hargavalo.length;i++){
        if(message.content.toLowerCase().includes(hargavalo[i].toLocaleLowerCase()))
        confirm = true
    }

    if(confirm){
       
        const embed = new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL({format: "gif",format : "png", dynamic : "true"}))
            .setColor("RANDOM")
            .setFooter('©!Mas Din#6666 • Version BETA')
            .setTimestamp()
            .setDescription(`**Hallo ${userr} Harga Valorant Point Bisa Di Cek Di ** ${message.guild.channels.cache.get("idchannel")}`)
            
        return message.channel.send(embed)
    }
})

Client.on("message",message=>{
    if(message.content.startsWith(`${prefix}beli`)){
    let logEmbed = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.displayAvatarURL({format: "gif",format : "png", dynamic : "true"}))
    .setColor("RANDOM")
    .setTitle("LINK PEMBELIAN LEWAT WHATSAPP")
    .setURL("https://bit.ly/2JYlU82")
    .addField("CARA PEMBELIAN :","``cs/bayar (Mention Seller) **(Kode Barang), (Akun), (Jumlah Yang Dibeli), (Link Bukti Pembayaran)**``",  true)
    .addField("<a:loadino:788273437130358814> **FORMAT VALORANT POINT** <a:loadino:788273437130358814>", `
    **Username yang digunakan untuk login : 
     Ingame name + # : 
     Order VP : **`)
    .addField("EXAMPLE: ", "``cs/bayar @!Mas Din (ND) (Jeje#6737) (Jumlah dibeli : 1) (Link foto)``", true)
    .setColor("RANDOM")
    .setTimestamp()
    .setFooter('©!Mas Din#6666 • Version Beta')

    return message.channel.send(logEmbed)
    }
})


Client.on("message",async message=>{
    const user = message.author.username
    const tag = message.author.tag
    const gambar = message.attachments.get()
    msg = message.content.toLowerCase()
    if(message.author.bot)
    return

    let mention = message.mentions.users.first()
    // if(!mention){
    //     return message.channel.send("Kamu Harus Mention Seller")
    // }
     let attachment = message.attachments.first()
    // if(!attachment){
    //     return message.channel.send("Kamu Harus Menyertakan Tanda Bukti Transfer")
    // }
    if(msg.startsWith(`${prefix}bayar`)){
        if(mention == null){
            return
        }
        let bayarproses = new Discord.MessageEmbed()
        .setAuthor(`Pembelian dari ${tag}`, message.author.displayAvatarURL({format: "gif",format : "png", dynamic : "true"}))
        .setColor("RANDOM")
        .setTitle(`<a:loadino:786906167095984168> PEMBELIAN SEDANG DIPROSES <a:loadino:786906167095984168>`)
        .setDescription("**Mohon Ditunggu Akan Diproses 1x24 Jam**")
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter('©!Mas Din#6666 • Version Beta')
        let prosesbeli = message.guild.channels.cache.get("idchannel")
        if(!prosesbeli) return
        
        prosesbeli.send(bayarproses)
        mentionMessage = message.content.slice(31)
        mention.send(mentionMessage, {files: [attachment.url]})
    }
})

Client.on('message', message =>{
    const user = message.author.username
    
    if(message.content.startsWith(`${prefix}produk`)){
        
        // var text = message.content.split(' ').slice(1).join(' ');
        // if(!text) return message.reply('Spicify')
         
         var embed = new Discord.MessageEmbed()
                .setAuthor(`Pertanyaan Dari ${user}`, message.author.displayAvatarURL({format: "gif",format : "png", dynamic : "true"}))
                .setColor("RANDOM")
                .setTitle(`**Hallo ${user}** **Kami menjual berbagai produk yaitu**`)
                .addField("1. Nitro Discord","**Kode Produk: ND**", true)
                .addField("2. Steam Wallet","**Kode Produk: SW**", true)
                .addField("3. Valorant Point","**Kode Produk: VP**", true)
                .addField("4. Mobile Legends","**Kode Produk: ML**", true)
                .addField("5. Call Of Duty Mobile","**Kode Produk: COD**", true)
                .addField("6. Free Fire","**Kode Produk: FF**", true)
                .addField("7. Point Blank","**Kode Produk: PB**", true)
               // .setThumbnail('https://static.republika.co.id/uploads/images/detailnews/dompet-digital-dana-_200127133243-559.jpg')
                .setTimestamp()
                .setFooter('©!Mas Din#6666 • Beta')
                message.channel.send(embed)
        
    }
})
