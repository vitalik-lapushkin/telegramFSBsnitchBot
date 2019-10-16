class MessageType {
    constructor(matcher, handler) {
        this.matcher = matcher;
        this.handler = handler;
    }
}

module.exports = MessageType;