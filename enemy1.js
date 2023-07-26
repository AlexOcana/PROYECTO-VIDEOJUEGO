class Enemy1 {

    constructor(gameScreen, gameSize) {

        this.gameScreen = gameScreen,
            this.gameSize = gameSize,

            this.bulletsEnemy = [],

            this.enemysSize1 = {

                w: 270,
                h: 200
            }

        this.enemysPos1 = {

            left: 1110,
            top: 1000
        }

        this.init()
    }

    init() {

        this.enemysElement1 = document.createElement('img')
        this.enemysElement1.src = '/img/enemy 1.gif'
        this.enemysElement1.setAttribute("id", "enemy1")
        this.enemysElement1.style.position = 'absolute'

        this.enemysElement1.style.width = `${this.enemysSize1.w}px`
        this.enemysElement1.style.height = `${this.enemysSize1.h}px`
        this.enemysElement1.style.left = `${this.enemysPos1.left}px`
        this.enemysElement1.style.top = `${this.enemysPos1.top}px`

        this.gameScreen.appendChild(this.enemysElement1)

    }





















}