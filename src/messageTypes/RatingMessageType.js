const RatingService = require('/services/RatingService.js');

const matcher = (ctx) => {
    const messageText = ctx.update.message.text;
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
        const messageText = ctx.update.message.text;
        if (isIncreaseKarmaMessage(messageText)) {
            RatingService.increaseKarma(targetUser);
        } else {
            RatingService.decreaseKarma(targetUser);
        }
    }
}

function isIncreaseKarmaMessage(message) {
    return message.trim().startWith('+');
}