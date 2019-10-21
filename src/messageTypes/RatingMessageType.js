const UserService = require('/services/UserService');

const matcher = (ctx) => {
    const messageText = ctx.update.message.text ? ctx.update.message.text.trim() : null;
    if (messageText){
        const isReplyMessage = !_.isEmpty(ctx.update.message.reply_to_message);
        const ratingSymbols = ['-', '+'];
        const startWithRatingSymbol = ratingSymbols.any(symbol => messageText.startWith(symbol));
        return isReplyMessage && startWithRatingSymbol;
    }
    return false;
}

const handler = (ctx) => {
    const targetUser = _.get('ctx', 'update.message.reply_to_message.from', null);
    if (!_.isEmpty(targetUser)) {
        const messageText = ctx.update.message.text ? ctx.update.message.text.trim() : null;
        if (isIncreaseRatingMessage(messageText)) {
            UserService.increaseRating(targetUser);
        } else {
            UserService.decreaseRating(targetUser);
        }
    }
}

function isIncreaseRatingMessage(message) {
    return message.trim().startWith('+');
}