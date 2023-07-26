class Platform1 {

    constructor(gameScreen, gameSize,) {

        this.gameScreen = gameScreen;
        this.gameSize = gameSize;

        this.platformSize1 = {

            w: 400,
            h: 20
        }

        this.platformPos1 = {

            left: 2700,
            top: 600
        }


        this.init()
    }

    init() {

        this.platformElement1 = document.createElement(`div`)
        this.platformElement1.style.position = "absolute"
        this.platformElement1.style.backgroundColor = `none`
        this.platformElement1.style.width = `${this.platformSize1.w}px`
        this.platformElement1.style.height = `${this.platformSize1.h}px`
        this.platformElement1.style.left = `${this.platformPos1.left}px`
        this.platformElement1.style.top = `${this.platformPos1.top}px`

        this.gameScreen.appendChild(this.platformElement1)

    }

    updatePosition() {
        this.platformElement1.style.left = `${this.platformPos1.left}px`
        this.platformElement1.style.top = `${this.platformPos1.top}px`
    }

}
