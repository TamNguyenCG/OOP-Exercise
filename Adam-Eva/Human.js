class Human {
    constructor(name, gender, adamWeight, evaWeight) {
        this.name = name;
        this.gender = gender;
        this.adamweight = adamWeight;
        this.evaweight = evaWeight;
    }

    isMale() {
        return this.gender;
    }

    setGender(gender) {
        this.gender = gender;
    }

    checkApple(apple) {
        if (apple.isNotEmpty() || apple.decrease()) {
            return apple.status = true;
        } else {
            return apple.status;
        }
    }

    AdamEat(apple) {
        if (this.checkApple(apple)) {
            apple.decrease();
            this.adamweight++;
            console.log("Adam weight: "+this.adamweight);
      }
    }

    EvaEat(apple) {
        if (this.checkApple(apple)) {
            apple.decrease();
            this.evaweight++;
            console.log("Eva weight: "+this.evaweight);
        }
    }

    say(str) {
        console.log(str)
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