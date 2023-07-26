class Background {

    constructor(gameScreen, gameSize) {

        this.gameScreen = gameScreen,
            this.backgroundSize = { w: gameSize, h: gameSize.h }
        this.backgroundPos = { left: -370, top: 0 }

        this.init()

    }

    init() {
        this.backgroundElement = document.createElement('img')
        this.backgroundElement.src = "./img/fondo-22.png"

        this.backgroundElement.style.position = "absolute"
        this.backgroundElement.style.width = `${this.backgroundSize.w}px`
        this.backgroundElement.style.height = `${this.backgroundSize.h}px`
        this.backgroundElement.style.left = `${this.backgroundPos.left}px`
        this.backgroundElement.style.top = `${this.backgroundPos.top}px`

        this.gameScreen.appendChild(this.backgroundElement)
    }

    updatePosition() {

        this.backgroundElement.style.left = `${this.backgroundPos.left}px`
    }
}