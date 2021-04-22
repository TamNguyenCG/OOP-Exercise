class Mobile {
    constructor(name) {
        this.Battery = 100;
        this.Message = " ";
        this.Inbox = [];
        this.Sentbox = [];
        this.name = name;
        this.status = false;
    }

    checkOnOff() {
        return this.status;
    }

    turnOn() {
        this.dropBattery();
        this.status = true;
    }

    turnOff() {
        this.status = false;
    }

    chargeBattery() {
        if (this.checkBatteryStt()) {
            this.Battery++;
        }
    }

    checkBatteryStt() {
        return this.Battery < 100;
    }

    dropBattery() {
        this.Battery--;
    }

    writeMessage() {
        this.dropBattery();
        this.Message = text;
    }

    sendMessage(mobile) {
        this.dropBattery();
        mobile.Inbox.push(this.Message);
        this.Sentbox.push(this.Message);
    }

    getInbox() {
        this.dropBattery();
        return this.Inbox;
    }

    getSentbox() {
        this.dropBattery();
        return this.Sentbox;
    }
}
