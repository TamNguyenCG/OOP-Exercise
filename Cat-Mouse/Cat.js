class Cat {
    constructor(name, weight, speed) {
        this.name = name;
        this.kg = weight;
        this.speed = speed;
    }

    CatSay() {
        console.log('meo meo')
    }

    catchMouse(mouse) {
        if (this.speed >= mouse.speedMouse) {
            if (mouse.stt) {
                this.eatMouse(mouse);
                mouse.stt = false;
                console.log("Catch the mouse");
                mouse.mouseSay();
            } else {
                console.log("The mouse is dead");
            }
        } else {
            console.log("Can't catch the mouse");
        }
    }

    eatMouse(mouse) {
        if (mouse.stt) {
            this.kg += mouse.weight;
        }
    }
}