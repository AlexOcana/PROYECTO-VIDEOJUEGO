class Enemy4 {

    constructor(gameScreen, gameSize) {

        this.gameScreen = gameScreen,
            this.gameSize = gameSize,

            this.enemysSize4 = {

                w: 500,
                h: 550
            }

        this.enemysPos4 = {

            left: 2600,
            top: 80
        }

        this.init()
    }

    init() {

        this.enemysElement4 = document.createElement('img')
        this.enemysElement4.src = 'img/boss.gif'

        this.enemysElement4.style.position = 'absolute'

        this.enemysElement4.style.width = `${this.enemysSize4.w}px`
        this.enemysElement4.style.height = `${this.enemysSize4.h}px`
        this.enemysElement4.style.left = `${this.enemysPos4.left}px`
        this.enemysElement4.style.top = `${this.enemysPos4.top}px`

        this.gameScreen.appendChild(this.enemysElement4)

    }





















}