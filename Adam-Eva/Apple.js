class Apple {
    constructor(weight) {
        this.weight = weight;
        this.status=false;
    }

    isNotEmpty() {
        return this.weight > 0;
    }

    getWeight() {
        return this.weight;
    }

    decrease() {
        if(this.isNotEmpty()){
            this.weight--;
        }else{
            this.status=false;
            console.log("Het tao roi !!!")
        }
    }

}

