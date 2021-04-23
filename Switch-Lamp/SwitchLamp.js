class SwitchButton {
    constructor(name) {
        this.status = false;
        this.lamp = true;
    }

    checkStt() {
        console.log("Đèn đang tắt")
        return this.status

    }

    SwitchturnOn() {
        console.log("Bật công tắc")
        this.lampturnOn();
        this.status = true;

    }

    SwitchturnOff() {
        console.log("Tắt công tắc")
        this.lampturnOff();
        return this.status;

    }

    lampturnOn() {
        console.log("Đèn sáng")
        return this.lamp

    }

    lampturnOff() {
        this.lamp = false;
        console.log("Đèn tắt")
    }
}
