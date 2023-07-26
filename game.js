const Game = {
    gameScreen: document.querySelector("#game-screen"),
    gameSize: {
        w: window.innerWidth,
        h: window.innerHeight
    },

    background: undefined,
    player: undefined,
    enemys: [],
    platforms: [],
    // bullets: [],

    keys: { TOP: 'KeyW', SPACE: 'Space', RIGHT: 'KeyD', LEFT: 'KeyA' },

    init() {
        this.start()
        this.setDimensions()
        this.setEventListeners()
    },

    setDimensions() {

        this.gameScreen.style.width = `${this.gameSize.w}px`
        this.gameScreen.style.height = `${this.gameSize.h}px`
    },

    setEventListeners() {

        document.addEventListener("keydown", e => {

            switch (e.code) {
                case this.keys.TOP:
                    if (this.player.move) {
                        this.player.jump()
                    }
                    break;
                case this.keys.SPACE:
                    this.player.shoot()
                    break;
                case this.keys.LEFT:
                    this.player.moveLeft()
                    break;
                case this.keys.RIGHT:
                    this.player.moveRight()
                    break;
            }

        })

    },

    createElements() {
        this.background = new Background(this.gameScreen, this.gameSize)
        this.player = new Player(this.gameScreen, this.gameSize)
        this.enemys1 = new Enemy1(this.gameScreen, this.gameSize)
        this.enemys2 = new Enemy2(this.gameScreen, this.gamesize)
        this.enemys3 = new Enemy3(this.gameScreen, this.gamesize)
        this.enemys4 = new Enemy4(this.gameScreen, this.gameSize)
        this.platforms1 = new Platform1(this.gameScreen, this.gameSize)
        this.platforms2 = new Platform2(this.gameScreen, this.gameSize)
        this.platforms3 = new Platform3(this.gameScreen, this.gameSize)
        this.platforms4 = new Platform4(this.gameScreen, this.gameSize)
    },

    start() {

        this.createElements()
        this.gameLoop()

    },

    gameLoop() {
        this.isCollision()
        this.drawAll()
        window.requestAnimationFrame(() => this.gameLoop())
    },

    drawAll() {

        this.player.move()
        this.checkBorderCollision2()
        this.checkBorderCollision3()
        this.checkBorderCollision4()
        this.checkBorderCollision1()
    },



    checkBorderCollision2() {

        if (
            this.player.playerPos.left + this.player.playerSize.w > this.platforms2.platformPos2.left &&
            this.player.playerPos.top + this.player.playerSize.h > this.platforms2.platformPos2.top &&
            this.player.playerPos.left < this.platforms2.platformPos2.left + this.platforms2.platformSize2.w &&
            this.player.playerPos.top < this.platforms2.platformPos2.top + this.platforms2.platformSize2.h
        ) {

            if (this.player.playerVel.top > 0) {
                this.player.playerVel.top = 0

            }
            // this.player.playerPos.base = this.platforms2.platformPos2.left
        }

    },

    checkBorderCollision3() {

        if (
            this.player.playerPos.left + this.player.playerSize.w > this.platforms3.platformPos3.left &&
            this.player.playerPos.top + this.player.playerSize.h > this.platforms3.platformPos3.top &&
            this.player.playerPos.left < this.platforms3.platformPos3.left + this.platforms3.platformSize3.w &&
            this.player.playerPos.top < this.platforms3.platformPos3.top + this.platforms3.platformSize3.h
        ) {

            if (this.player.playerVel.top > 0) {
                this.player.playerVel.top = 0

            }
            // this.player.playerPos.base = this.platforms2.platformPos2.left
        }

    },

    checkBorderCollision4() {

        if (
            this.player.playerPos.left + this.player.playerSize.w > this.platforms4.platformPos4.left &&
            this.player.playerPos.top + this.player.playerSize.h > this.platforms4.platformPos4.top &&
            this.player.playerPos.left < this.platforms4.platformPos4.left + this.platforms4.platformSize4.w &&
            this.player.playerPos.top < this.platforms4.platformPos4.top + this.platforms4.platformSize4.h
        ) {

            if (this.player.playerVel.top > 0) {
                this.player.playerVel.top = 0

            }
            // this.player.playerPos.base = this.platforms2.platformPos2.left
        }

    },

    checkBorderCollision1() {

        if (
            this.player.playerPos.left + this.player.playerSize.w > this.platforms1.platformPos1.left &&
            this.player.playerPos.top + this.player.playerSize.h > this.platforms1.platformPos1.top &&
            this.player.playerPos.left < this.platforms1.platformPos1.left + this.platforms1.platformSize1.w &&
            this.player.playerPos.top < this.platforms1.platformPos1.top + this.platforms1.platformSize1.h
        ) {

            if (this.player.playerVel.top > 0) {
                this.player.playerVel.top = 0

            }
            // this.player.playerPos.base = this.platforms2.platformPos2.left
        }

    },

    // if (this.player.playerPos.top === this.player.playerPos.base) {

    //     this.player.isJumping = false
    // }

    // if (this.player.playerPos.top === this.platforms2.platformPos2.top) {

    //     this.player.isJumping = false

    // }

    // if (this.player.playerPos.left <=
    //     this.platforms2.platformPos2.left + this.platforms2.platformSize2.w &&

    //     this.player.playerPos.left + this.player.playerSize.w >=
    //     this.platforms2.platformPos2.left &&

    //     this.player.playerPos.top + this.player.playerSize.h <=
    //     this.platforms2.platformPos2.top

    // ) {

    //     this.player.playerVel.top = 0
    //     // this.playerPos.top += this.playerVel.top;
    //     // this.playerVel.top += this.playerVel.gravity;
    //     this.player.isJumping = false
    //     console.log("ESTOY EN UNA PLATAFORMA")


    // }

    // else {

    //     this.player.playerPos.base = this.gameSize.h - this.player.playerSize.h



    // }


    // checkBorderCollision3() {

    //     if (this.player.playerPos.top === this.player.playerPos.base) {

    //         this.player.onGround = true
    //     }

    //     if (this.player.playerPos.top === this.platforms2.platformPos2.top) {

    //         this.player.onGround = false
    //     }

    //     if (

    //         this.player.playerPos.left <=
    //         this.platforms3.platformPos3.left + this.platforms3.platformSize3.w &&

    //         this.player.playerPos.left + this.player.playerSize.w >=
    //         this.platforms3.platformPos3.left &&

    //         this.player.playerPos.top + this.player.playerSize.h ===
    //         this.platforms3.platformPos3.top

    //     ) {

    //         this.player.playerVel.top = 0
    //         this.player.onGround = true
    //     }

    //     else {

    //         this.player.playerPos.base = this.gameSize.h - this.player.playerSize.h
    //     }

    // },

    // checkBorderCollision4() {

    //     // if (this.player.playerPos.top === this.player.playerPos.base) {

    //     //     this.player.onGround = true
    //     // }

    //     // if (this.player.playerPos.top === this.platforms4.platformPos4.top) {

    //     //     this.player.onGround = false
    //     // }

    //     if (

    //         this.player.playerPos.left <=
    //         this.platforms4.platformPos4.left + this.platforms4.platformSize4.w &&

    //         this.player.playerPos.left + this.player.playerSize.w >=
    //         this.platforms4.platformPos4.left &&

    //         this.player.playerPos.top + this.player.playerSize.h ===
    //         this.platforms4.platformPos4.top

    //     ) {

    //         this.player.playerVel.top = 0
    //         // this.player.onGround = true
    //     }

    //     else {

    //         this.player.playerPos.base = this.gameSize.h - this.player.playerSize.h
    //     }


    isCollision() {


        for (let i = 0; i < this.player.bullets.length; i++) {
            console.log("MUERETE DE UNA VEZ");

            if (this.enemys1) {

                if (
                    this.player.bullets[i].bulletPos.left > this.enemys1.enemysPos1.left
                ) {
                    console.log("MUERE");
                    document.querySelector("#enemy1").remove()
                    this.player.bullets[i].bulletPos.left += 5000
                    delete this.enemys1
                }
            }
        }
    },






}



















