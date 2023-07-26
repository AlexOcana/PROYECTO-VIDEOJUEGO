class Platform3 {

    constructor(gameScreen, gameSize,) {

        this.gameScreen = gameScreen;
        this.gameSize = gameSize;

        this.platformSize3 = {

            w: 600,
            h: 20
        }

        this.platformPos3 = {

            left: 1350,
            top: 1100
        }


        this.init()
    }

    init() {

        this.platformElement3 = document.createElement(`div`)
        this.platformElement3.style.position = "absolute"
        this.platformElement3.style.backgroundColor = `blue`
        this.platformElement3.style.width = `${this.platformSize3.w}px`
        this.platformElement3.style.height = `${this.platformSize3.h}px`
        this.platformElement3.style.left = `${this.platformPos3.left}px`
        this.platformElement3.style.top = `${this.platformPos3.top}px`

        this.gameScreen.appendChild(this.platformElement3)

    }

    updatePosition() {
        this.platformElement3.style.left = `${this.platformPos3.left}px`
        this.platformElement3.style.top = `${this.platformPos3.top}px`
    }

}
