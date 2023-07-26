class Enemy3 {

    constructor(gameScreen, gameSize) {

        this.gameScreen = gameScreen,
            this.gameSize = gameSize,

            this.enemysSize3 = {

                w: 500,
                h: 300
            }

        this.enemysPos3 = {

            left: 2000,
            top: 450
        }

        this.init()
    }

    init() {

        this.enemysElement3 = document.createElement('img')
        this.enemysElement3.src = 'img/enemy3.gif'

        this.enemysElement3.style.position = 'absolute'
        this.enemysElement3.style.width = `${this.enemysSize3.w}px`
        this.enemysElement3.style.height = `${this.enemysSize3.h}px`
        this.enemysElement3.style.left = `${this.enemysPos3.left}px`
        this.enemysElement3.style.top = `${this.enemysPos3.top}px`

        this.gameScreen.appendChild(this.enemysElement3)

    }





















}