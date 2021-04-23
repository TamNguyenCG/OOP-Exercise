class Mouse {
    constructor(name, weight, speedMouse) {
        this.name = name;
        this.weight = weight;
        this.speedMouse = speedMouse;
        this.stt = true;
    }

    dead() {
        this.stt = false;
    }

    mouseSay() {
        console.log('chit chit')
    }
}