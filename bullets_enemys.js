class BulletsEnemys {

    constructor(gameScreen, gameSize, enemySize, enemyPosition) {

        this.gameScreen = gameScreen,
            this.gameSize = gameSize,
            this.enemySize = enemySize,
            this.enemyPosition = enemyPosition,

            this.bulletSize = {
                w: 40,
                h: 40
            }

        this.bulletVel = {

            left: 10,
            top: 3
        }

        this.bulletPosition = {
            left: this.enemyPosition.left + this.enemySize.w / 2,
            top: this.enemyPosition.top + this.enemySize.h / 2
        }

        this.init()
    }

    init() {
        this.bulletElement = document.createElement('img')
        this.bulletElement.src = "img/mierda_2.png"
        this.bulletElement.style.backgroundColor = "transparent"
        this.bulletElement.style.position = "absolute"
        this.bulletElement.style.width = `${this.bulletSize.w}px`
        this.bulletElement.style.height = `${this.bulletSize.h}px`
        this.bulletElement.style.left = `${this.bulletPosition.left}px`
        this.bulletElement.style.top = `${this.bulletPosition.top}px`

        this.gameScreen.appendChild(this.bulletElement)
    }

    moveBullets() {
        this.bulletPosition.left -= this.bulletVel.left;

        this.bulletPosition.top += this.bulletVel.top;
        this.updatePosition()

    }



    updatePosition() {
        this.bulletElement.style.left = `${this.bulletPosition.left}px`
        this.bulletElement.style.top = `${this.bulletPosition.top}px`
    }

    deleteFromDOM() {
        console.log("deleting from dom")
        this.bulletElement.remove()

    }



}