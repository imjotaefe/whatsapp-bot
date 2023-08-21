const qrcode = require('qrcode-terminal');

const { Client } = require('whatsapp-web.js');
const client = new Client();

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', message => {
	if(message.from.includes("@c")){
		message.reply('Olá! Irei ver sua mensagem somente sexta-feira às 18h, se for algo importante me ligue!');
		message.getChat().then(chat => chat.markUnread());
	}
});

client.initialize();


 
 