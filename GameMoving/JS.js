const speed = 10;
class Square {
    constructor(x, y, width, height,img) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.ctx=document.getElementById('myCanvas').getContext("2d");
        this.img = img;
    }

    draw(){
        this.ctx.beginPath();
        this.ctx.drawImage(this.img,this.x,this.y,this.width,this.height);
        this.ctx.stroke();
    }

    move(evt){
        this.clear();
        switch (evt.keyCode){
            case 37:
                this.moveLeft();
                break;
            case 38:
                this.moveUp();
                break;
            case 39:
                this.moveRight();
                break;
            case 40:
                this.moveDown();
                break;
        }
        this.draw();
    }

    moveLeft(){
        this.x-= speed;
    }
    moveRight(){
        this.x+= speed;
    }
    moveUp(){
        this.y-= speed;
    }
    moveDown(){
        this.y+= speed;
    }

    clear(){
        this.ctx.clearRect(this.x,this.y,this.width,this.height);
    }

}





