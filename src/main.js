require('app-module-path').addPath(__dirname);
const _ = require('lodash');

const Telegraf = require('telegraf');
const ProxyAgent = require('proxy-agent');

const MessageTypesRegister = require('./MessageTypesRegister');
const ratingMessageType = require('./messageTypes/RatingMessageType');

const TOKEN = process.env.TOKEN;
const PROXY_URI = process.env.PROXY_URI;

const messageTypesRegister = new MessageTypesRegister();
messageTypesRegister.register(ratingMessageType);



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
