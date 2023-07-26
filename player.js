class Player {

    constructor(gameScreen, gameSize) {

        this.gameScreen = gameScreen,
            this.gameSize = gameSize,
            this.bullets = [],

            this.playerSize = {
                w: 250,
                h: 250,
            }

        this.playerPos = {

            left: 0,
            top: this.gameSize.h - this.playerSize.h,
            base: this.gameSize.h - this.playerSize.h
        }

        this.playerVel = {

            left: 15,
            top: 5,
            gravity: 0.8
        }

        this.isJumping = false



        this.init()

    }

    init() {

        this.playerElement = document.createElement('img')
        this.playerElement.src = "img/metal-slug-monkey (1).gif"
        this.playerElement.style.position = "absolute"
        this.playerElement.style.backgroundColor = `transparent`
        this.playerElement.style.width = `${this.playerSize.w}px`
        this.playerElement.style.height = `${this.playerSize.h}px`
        this.playerElement.style.left = `${this.playerPos.left}px`
        this.playerElement.style.top = `${this.playerPos.top}px`


        this.gameScreen.appendChild(this.playerElement)

    }


    move() {

        if (this.playerPos.top < this.playerPos.base) {       // está saltando!
            this.playerPos.top += this.playerVel.top;
            this.playerVel.top += this.playerVel.gravity;
            this.onGround = true
        }


        else {
            this.playerPos.top = this.playerPos.base;
            this.playerVel.top = 1;
        }

        this.updatePosition()
        this.bullets.forEach(bullet => bullet.move())
        this.clearBullets()
    }

    moveLeft() {
        this.playerPos.left -= this.playerVel.left

    }

    moveRight() {
        this.playerPos.left += this.playerVel.left
    }



    updatePosition() {
        this.playerElement.style.left = `${this.playerPos.left}px`
        this.playerElement.style.top = `${this.playerPos.top}px`

    }

    jump() {
        this.isJumping = true

        this.playerPos.top -= 10;
        this.playerVel.top -= 30;

    }

    shoot() {

        this.bullets.push(new Bullets(this.gameScreen, this.playerPos, this.playerSize));
    }

    clearBullets() {

        this.bullets.forEach((bull, idx) => {
            if (bull.bulletPos.left >= this.gameSize.w) {
                bull.bulletElement.remove()
                this.bullets.splice(idx, 1)
            }
        })
    }

}