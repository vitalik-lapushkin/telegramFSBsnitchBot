class MessageTypesRegister {
    constructor() {
        this.registredTypes = [];
    }

    register(messageType) {
        this.registredTypes.push(messageType);
    }

    resolve(ctx) {
        return this.registredTypes.find(item => item.matcher(ctx));
    }
}

module.exports = MessageTypesRegister;