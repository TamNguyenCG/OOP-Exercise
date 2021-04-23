class Apple {
    constructor(weight) {
        this.weight = weight;
    }

    isEmpty() {
        return this.weight > 0;
    }

    getWeight() {
        return this.weight;
    }

    decrease() {
        this.weight--;
    }

}

class Human {
    constructor(name, gender, weight) {
        this.name = name;
        this.gender = gender;
        this.weight = weight;
    }

    isMale() {
        return this.gender;
    }

    setGender(gender) {
        this.gender = gender;
    }

    checkApple(Apple) {
        if (Apple.weight === 0) {
            console.log('Het tao !!!');
        }
    }

    eat(Apple) {
        Apple.decrease();
        this.weight++;
        console.log(this.weight)
    }

    say(str) {
        alert(str)
    }

    getName() {
        return this.name;
    }

    setName() {
        this.name = name;
    }

    getWeight() {
        return this.weight;
    }

    setWeight(weight) {
        this.weight = weight;
    }
}