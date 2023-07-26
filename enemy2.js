class Enemy2 {

    constructor(gameScreen, gameSize) {

        this.gameScreen = gameScreen,
            this.gameSize = gameSize,

            this.enemysSize2 = {

                w: 250,
                h: 250
            }

        this.enemysPos2 = {

            left: 1550,
            top: 650
        }

        this.init()
    }

    init() {

        this.enemysElement2 = document.createElement('img')
        this.enemysElement2.src = 'img/enemy 2.gif'

        this.enemysElement2.style.position = 'aaasolute'

        this.enemysElement2.style.width = `${this.enemysSize2.w}px`
        this.enemysElement2.style.height = `${this.enemysSize2.h}px`
        this.enemysElement2.style.left = `${this.enemysPos2.left}px`
        this.enemysElement2.style.top = `${this.enemysPos2.top}px`

        this.gameScreen.appendChild(this.enemysElement2)

    }





















}