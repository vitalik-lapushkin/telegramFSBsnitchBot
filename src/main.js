require('app-module-path').addPath(__dirname);
const _ = require('lodash');

const Telegraf = require('telegraf');
const ProxyAgent = require('proxy-agent');

const MessageTypesRegister = require('./MessageTypesRegister');
const newMessageType = require('./messageTypes/NewMessageType');

const TOKEN = '987895286:AAFNeo0O_Ka6HpjpmPD_h71D_b65r3ZbY1Q';
const PROXY_URI = 'http://37.59.158.104:3128';

const messageTypesRegister = new MessageTypesRegister();
messageTypesRegister.register(newMessageType);
console.log(messageTypesRegister.prototype);



const bot = new Telegraf(TOKEN, {
    telegram: {
        agent: new ProxyAgent(PROXY_URI)
    }
});
/* bot.start((ctx) => ctx.reply('Welcome!'));
bot.help((ctx) => ctx.reply('Send me a sticker'));
bot.on('sticker', (ctx) => ctx.reply('👍'));
bot.hears('hi', (ctx) => ctx.reply('Hey there')); */
bot.on('message', (ctx) => {
    const messageType = messageTypesRegister.resolve(ctx);
    if (messageType && messageType.handler) {
        messageType.handler(ctx);
    }

/*     const message = ctx.update.message.text;
    const messageType = MessageTypeResolver.resolve(message);
    ctx.reply(`Ваше сообщение имеет тип: ${messageType.title}`); */
});
bot.launch().catch( e => console.log(e));