class Lamp{
    constructor(name,status) {
        this.name = name;
        this.status = false;
    }
    checkLamp(){
        console.log("Đèn đang tắt")
        return this.status
    }
    turnOn(_switch){
        if(_switch.stt){
            this.status=true;
        }else {
            this.status=true;
            console.log("Hãy bật cầu dao trước")
        }

    }
    turnOff(){
        console.log("Đèn đã tắt")
        return this.status;
    }
}
