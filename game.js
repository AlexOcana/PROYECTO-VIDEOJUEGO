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
    playerLifes: 40,

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
                        if (this.player.isJumping === false) {
                            this.player.jump()
                        }
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
        this.enemys.push(new Enemy(this.gameScreen, this.gameSize, 270, 200, 1110, 1000, "img/enemy 1.gif"))
        this.enemys.push(new Enemy(this.gameScreen, this.gamesize, 250, 250, 1550, 650, "img/enemy 2.gif"))
        this.enemys.push(new Enemy(this.gameScreen, this.gamesize, 500, 300, 2000, 450, "img/enemy3.gif"))
        this.enemys.push(new Enemy(this.gameScreen, this.gameSize, 500, 550, 2600, 80, "img/boss.gif"))
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
        this.checkBulletCollision()
        this.enemyBulletCollision()
        this.drawAll()
        this.enemys.forEach(eachEnemy => {
            eachEnemy.enemyShoot()
        })
        // this.gameOver()

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
            this.player.isJumping = false
            if (this.player.playerVel.top > 0) {
                this.player.playerVel.top = 0


            }
        }

    },

    checkBorderCollision3() {

        if (
            this.player.playerPos.left + this.player.playerSize.w > this.platforms3.platformPos3.left &&
            this.player.playerPos.top + this.player.playerSize.h > this.platforms3.platformPos3.top &&
            this.player.playerPos.left < this.platforms3.platformPos3.left + this.platforms3.platformSize3.w &&
            this.player.playerPos.top < this.platforms3.platformPos3.top + this.platforms3.platformSize3.h
        ) {
            this.player.isJumping = false
            if (this.player.playerVel.top > 0) {
                this.player.playerVel.top = 0



            }
        }

    },

    checkBorderCollision4() {

        if (
            this.player.playerPos.left + this.player.playerSize.w > this.platforms4.platformPos4.left &&
            this.player.playerPos.top + this.player.playerSize.h > this.platforms4.platformPos4.top &&
            this.player.playerPos.left < this.platforms4.platformPos4.left + this.platforms4.platformSize4.w &&
            this.player.playerPos.top < this.platforms4.platformPos4.top + this.platforms4.platformSize4.h
        ) {
            this.player.isJumping = false
            if (this.player.playerVel.top > 0) {
                this.player.playerVel.top = 0



            }
        }

    },

    checkBorderCollision1() {

        if (
            this.player.playerPos.left + this.player.playerSize.w > this.platforms1.platformPos1.left &&
            this.player.playerPos.top + this.player.playerSize.h > this.platforms1.platformPos1.top &&
            this.player.playerPos.left < this.platforms1.platformPos1.left + this.platforms1.platformSize1.w &&
            this.player.playerPos.top < this.platforms1.platformPos1.top + this.platforms1.platformSize1.h
        ) {
            this.player.isJumping = false
            if (this.player.playerVel.top > 0) {
                this.player.playerVel.top = 0



            }
        }

    },

    checkBulletCollision() {

        this.player.bullets.forEach((bullet, i) => {

            this.enemys.forEach((enemy, j) => {

                if (bullet.bulletPos.left < enemy.position.left + enemy.size.w &&
                    bullet.bulletPos.left + bullet.bulletSize.w > enemy.position.left &&
                    bullet.bulletPos.top < enemy.position.top + enemy.size.h &&
                    bullet.bulletSize.h + bullet.bulletPos.top > enemy.position.top) {

                    enemy.deleteFromDOM()
                    enemy.bulletsEnemy.forEach(bulletEnemy => {

                        bulletEnemy.bulletElement.remove()
                    })
                    bullet.deleteFromDOM()

                    this.enemys.splice(j, 1)
                    this.player.bullets.splice(i, 1)
                }
            })
        })
    },

    enemyBulletCollision() {


        this.enemys.forEach((enemy, j) => {

            enemy.bulletsEnemy.forEach((ebull, i) => {

                if (ebull.bulletPosition.left < this.player.playerPos.left + this.player.playerSize.w &&
                    ebull.bulletPosition.left + ebull.bulletSize.w > this.player.playerPos.left &&
                    ebull.bulletPosition.top < this.player.playerPos.top + this.player.playerSize.h &&
                    ebull.bulletSize.h + ebull.bulletPosition.top > this.player.playerPos.top) {
                    // alert("GAME OVER")

                    ebull.deleteFromDOM()
                    this.playerLifes--
                    if (this.playerLifes <= 0) {
                        alert("GAME OVER")
                    }
                }
            })
        })
    },

    // gameOver() {
    //     alert("GAME OVER")
    // }


}
