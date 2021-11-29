const Pusher = require("pusher");

export class CPusher {
private pusher: any;

    constructor(){
    }

    createPusher(){
        this.pusher = new Pusher({
            appId: "1307363",
            key: "d1f685a47d862b734fd0",
            secret: "fb1d55a0735ed7032e37",
            cluster: "us2",
            useTLS: true
          });
    }

    sendPusher(message: string, app: string) {
        this.pusher.trigger(app, "payment", {
            message: message
        });
    }


}