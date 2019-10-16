const MessageType = require('../MessageType');

const newMatcher = (ctx) => {
    const messageText = ctx.update.message.text;
}

const newHandler = (ctx) => {

}

module.exports = new MessageType(newMatcher, newHandler);