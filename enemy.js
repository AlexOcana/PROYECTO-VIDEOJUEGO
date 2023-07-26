class Enemy {

    constructor(gameScreen, gameSize, width, height, left, top, image) {

        this.image = image
        this.gameScreen = gameScreen,
            this.gameSize = gameSize,

            this.bulletsEnemy = [],

            this.size = {
                w: width,
                h: height
            }

        this.position = {

            left: left,
            top: top
        }

        this.init()
    }

    init() {

        this.element = document.createElement('img')
        this.element.src = this.image
        this.element.style.position = 'absolute'

        this.element.style.width = `${this.size.w}px`
        this.element.style.height = `${this.size.h}px`
        this.element.style.left = `${this.position.left}px`
        this.element.style.top = `${this.position.top}px`

        this.gameScreen.appendChild(this.element)

    }

    deleteFromDOM() {
        console.log("deleting from dom")
        this.element.remove()

    }





















}