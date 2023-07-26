class Platform4 {

    constructor(gameScreen, gameSize,) {

        this.gameScreen = gameScreen;
        this.gameSize = gameSize;

        this.platformSize4 = {

            w: 1400,
            h: 50
        }

        this.platformPos4 = {

            left: 1700,
            top: 800
        }


        this.init()
    }

    init() {

        this.platformElement4 = document.createElement(`div`)
        this.platformElement4.style.position = "absolute"
        this.platformElement4.style.backgroundColor = `green`
        this.platformElement4.style.width = `${this.platformSize4.w}px`
        this.platformElement4.style.height = `${this.platformSize4.h}px`
        this.platformElement4.style.left = `${this.platformPos4.left}px`
        this.platformElement4.style.top = `${this.platformPos4.top}px`

        this.gameScreen.appendChild(this.platformElement4)

    }

    updatePosition() {
        this.platformElement4.style.left = `${this.platformPos4.left}px`
        this.platformElement4.style.top = `${this.platformPos4.top}px`
    }

}
