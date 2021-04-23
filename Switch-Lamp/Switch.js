class SwitchButton {
    constructor(name, stt) {
        this.name = name;
        this.stt = false;
    }
    checkStt(){
        console.log("Cầu dao đang tắt")
        return this.stt;
    }
    turnOnSwitch(){
        this.stt = true;
        console.log("Cầu dao đã bật")
        if(lamp.status){
            console.log("Đèn đã bật")
        }
    }
    turnOffSwitch(){
        this.stt = false;
        console.log("Cầu dao đã tắt")
        lamp.status = false;
        console.log("Đèn đã tắt")
    }
}