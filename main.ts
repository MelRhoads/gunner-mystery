namespace SpriteKind {
    export const sign = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(mySprite, 100, 100)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.sayText("Bennett is my favorite!", 2000, true)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.sayText("Bennett is my favorite!", 2000, true)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(mySprite, 100, 100)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(mySprite, 100, 100)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(mySprite, 100, 100)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false, effects.splatter)
})
let myEnemy: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(7)
mySprite = sprites.create(img`
    . . . . . . . . d d d d d d . . 
    . . . . . . d d d d d d d d d . 
    . . . . d d d d d d d d d d d d 
    . . d d d d d d d d d d d d d d 
    . d d d d d d d d d d d d d d d 
    . d d d d f 3 d d d f 3 d d d d 
    . d d d d f f d d d f f d d d d 
    . d d d d d d d d d d d d d d d 
    . d d d b d d d d d d d d b d d 
    . d d d b d d d b d d d d b d d 
    . d d d b b b b d d d d b b d d 
    . d d . b f b f d d d d b b d d 
    . d d . f f f f d d d d d . d d 
    . . . . f f f f f d d d d . . . 
    . . . . d d f d d . . . . . . . 
    . . . . . d d d d . . . . . . . 
    `, SpriteKind.Player)
mySprite.setPosition(randint(0, 160), randint(0, 160))
mySprite.setStayInScreen(true)
game.splash("Don't touch the poop")
game.onUpdateInterval(5000, function () {
    myEnemy = sprites.create(assets.image`Poop`, SpriteKind.Enemy)
    myEnemy.setVelocity(50, 50)
    myEnemy.setPosition(randint(0, 160), randint(0, 160))
    myEnemy.setBounceOnWall(true)
    info.changeScoreBy(1)
})
