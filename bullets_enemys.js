class BulletsEnemys {

    constructor(gameScreen, enemysPos1, enemysSize1) {

        this.gameScreen = gameScreen;
        this.enemysPos1 = enemysPos1;
        this.enemysSize1 = enemysSize1;

        this.bulletPos = {
            left: enemysPos1.left + enemysSize1.w,
            top: enemysPos1.top + enemysSize1.h / 2
        }

        this.bulletVel = {
            left: -20,
            top: 1,
        }

        this.bulletSize = {
            w: 80,
            h: 80
        }

        this.init()
    }

    init() {
        this.bulletElement = document.createElement('img')
        this.bulletElement.src = "/banaan.gif"

        this.bulletElement.style.position = "absolute"
        this.bulletElement.style.width = `${this.bulletSize.w}px`
        this.bulletElement.style.height = `${this.bulletSize.h}px`
        this.bulletElement.style.left = `${this.bulletPos.left}px`
        this.bulletElement.style.top = `${this.bulletPos.top}px`

        this.gameScreen.appendChild(this.bulletElement)
    }

    move() {
        this.bulletPos.left += this.bulletVel.left;
        this.bulletPos.top += this.bulletVel.top;


        if (this.bulletPos.top >= this.enemysPos1.base + this.enemysSize1.h) {
            this.bulletVel.top *= 1;
        }

        this.updatePosition()
    }

    updatePosition() {
        this.bulletElement.style.left = `${this.bulletPos.left}px`
        this.bulletElement.style.top = `${this.bulletPos.top}px`
    }


}