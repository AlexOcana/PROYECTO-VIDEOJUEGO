class Platform2 {

    constructor(gameScreen, gameSize,) {

        this.gameScreen = gameScreen;
        this.gameSize = gameSize;

        this.platformSize2 = {

            w: 220,
            h: 250
        }

        this.platformPos2 = {

            left: 340,
            top: 1250,
        }


        this.init()
    }

    init() {

        this.platformElement2 = document.createElement(`div`)
        this.platformElement2.style.position = "absolute"
        this.platformElement2.style.backgroundColor = `transparent`
        this.platformElement2.style.width = `${this.platformSize2.w}px`
        this.platformElement2.style.height = `${this.platformSize2.h}px`
        this.platformElement2.style.left = `${this.platformPos2.left}px`
        this.platformElement2.style.top = `${this.platformPos2.top}px`

        this.gameScreen.appendChild(this.platformElement2)

    }

    updatePosition() {
        this.platformElement2.style.left = `${this.platformPos2.left}px`
        this.platformElement2.style.top = `${this.platformPos2.top}px`
    }

}
