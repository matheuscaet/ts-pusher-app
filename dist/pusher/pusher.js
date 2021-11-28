"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CPusher = void 0;
const Pusher = require("pusher");
class CPusher {
    constructor() {
    }
    createPusher() {
        this.pusher = new Pusher({
            appId: "1307363",
            key: "d1f685a47d862b734fd0",
            secret: "fb1d55a0735ed7032e37",
            cluster: "us2",
            useTLS: true
        });
    }
    sendPusher(message, app) {
        this.pusher.trigger("my-channel", app, {
            message: message
        });
    }
}
exports.CPusher = CPusher;
