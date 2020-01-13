namespace SpriteKind {
    export const ball = SpriteKind.create()
    export const cloud = SpriteKind.create()
}
function hero2 () {
    hero = sprites.create(img`
. . . . . f f f f f . . . . . . 
. . . . f 4 4 4 4 4 f . . . . . 
. . . f d d d d d 4 4 f . . . . 
. . f f f d d f f d 4 f f . . . 
. c d d 4 4 d d d d 4 d d f . . 
. c c d d d d c d d 4 d f f f . 
. c d c c c c d d d 4 d f b d f 
. . c d d d d d d 4 4 f f d d f 
. . . c d d d d 4 4 f f 4 f f f 
. . . . f f f 4 4 f 4 4 4 f . . 
. . . . f 4 4 4 4 4 4 4 f f f . 
. . . f 4 4 4 4 4 4 f f f 4 f . 
. . f f 4 4 4 4 f f f f f 4 f . 
. f b d f 4 4 f b b f f f 4 f . 
. f d d f 4 4 f d d b f f f f . 
. f f f f f f f f f f f f f . . 
`, SpriteKind.Player)
    controller.moveSprite(hero, 90, 90)
    scene.setTileMap(img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
`)
    tiles.placeOnTile(hero, tiles.getTileLocation(7, 6))
}
function cloud () {
    projectile2 = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . f f f f f . . . 
. . . . . . . f f 1 f 1 f . . . 
. . . . f f f f f f f f f f . . 
. . . f f 1 f f 1 1 f 1 f 1 f . 
. . f 1 f f f 1 1 f 1 f 1 1 f . 
. . f 1 f f f f f 1 f 1 1 1 f . 
. f f f f f 1 1 1 f 1 1 1 1 f . 
. f f 1 1 1 f f f 1 1 1 1 1 f . 
. . f 1 1 1 1 1 1 1 1 1 1 f . . 
. . . f 1 1 1 1 1 1 1 1 1 f . . 
. . . . f f f f f f f f f f . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, 50, 0)
    projectile2.setKind(SpriteKind.cloud)
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(hero, 300, 300)
    info.startCountdown(0.2)
})
function score () {
    info.changeScoreBy(1)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.over(false)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    ball()
})
sprites.onOverlap(SpriteKind.ball, SpriteKind.cloud, function (sprite, otherSprite) {
    info.player2.changeLifeBy(-1)
    sprite.destroy()
    otherSprite.destroy()
    for (let index = 0; index < 4; index++) {
        projectile3.destroy()
    }
})
function raindrop () {
    projectile3 = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . 8 . . . . . . . 
. . . . . . . 8 8 . . . . . . . 
. . . . . . 8 8 8 8 . . . . . . 
. . . . . . 8 8 8 8 . . . . . . 
. . . . . 8 8 8 8 8 8 . . . . . 
. . . . . 8 8 8 8 8 8 . . . . . 
. . . . . 8 8 8 8 8 8 . . . . . 
. . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, projectile2, Math.randomRange(25, 75), 100)
}
info.onCountdownEnd(function () {
    controller.moveSprite(hero, 90, 90)
})
function ball () {
    projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . f . . . . . 
. . . . . . . . . f f . . . . . 
. . . . . . . . . f 5 . . . . . 
. . . . . . . . 5 5 5 . . . . . 
. . . . . . . 5 5 5 5 . . . . . 
. . . . . . 5 5 5 5 5 . . . . . 
. . . . . 5 5 5 5 5 . . . . . . 
. . . 5 5 5 5 5 5 5 . . . . . . 
. . 5 5 5 5 5 5 5 . . . . . . . 
. . . 5 5 5 5 . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, hero, 0, -100)
    projectile.setKind(SpriteKind.ball)
}
let projectile: Sprite = null
let projectile3: Sprite = null
let projectile2: Sprite = null
let hero: Sprite = null
hero2()
info.player2.setLife(40)
game.onUpdateInterval(400, function () {
    raindrop()
})
game.onUpdate(function () {
    if (game.runtime() == 60000) {
        game.over(true, effects.confetti)
    }
})
game.onUpdateInterval(1000, function () {
    score()
})
game.onUpdateInterval(2500, function () {
    cloud()
})
