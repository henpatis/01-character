controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 6 6 6 6 6 6 6 6 . . . . 
        . . . 6 8 8 8 9 9 9 9 6 . . . . 
        . . . 6 8 8 8 9 9 9 9 9 6 . . . 
        . . . 6 8 8 8 9 9 9 9 9 6 . . . 
        . . . 6 9 9 9 9 9 9 9 9 6 . . . 
        . . . 6 9 9 9 9 9 9 9 9 6 . . . 
        . . . 6 9 9 9 9 9 9 9 9 6 . . . 
        . . . 6 9 9 9 9 9 9 9 9 6 . . . 
        . . . . 6 6 6 6 6 6 6 6 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 50, 0)
})
let projectile: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(8)
mySprite = sprites.create(img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 5 d f . . 
    . . . . b 5 5 1 f f 5 d 4 c . . 
    . . . . b 5 5 d f b d d 4 4 . . 
    . b b b d 5 5 5 5 5 4 4 4 4 4 b 
    b d d d b b d 5 5 4 4 4 4 4 b . 
    b b d 5 5 5 b 5 5 5 5 5 5 b . . 
    c d c 5 5 5 5 d 5 5 5 5 5 5 b . 
    c b d c d 5 5 b 5 5 5 5 5 5 b . 
    . c d d c c b d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
for (let index = 0; index <= 4; index++) {
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . c c . . . 
        . . . . . . . c c c c 6 3 c . . 
        . . . . . . c 6 3 3 3 3 6 c . . 
        . . c c . c 6 c c 3 3 3 3 3 c . 
        . b 5 5 c 6 c 5 5 c 3 3 3 3 3 c 
        . f f 5 c 6 c 5 f f 3 3 3 3 3 c 
        . f f 5 c 6 c 5 f f 6 3 3 3 c c 
        . b 5 5 3 c 3 5 5 c 6 6 6 6 c c 
        . . b 5 5 3 5 5 c 3 3 3 3 3 3 c 
        . . c 5 5 5 5 b c c 3 3 3 3 3 c 
        . . c 4 5 5 4 b 5 5 c 3 3 3 c . 
        . c 5 b 4 4 b b 5 c c b b b . . 
        . c 4 4 b 5 5 5 4 c 4 4 4 5 b . 
        . c 5 4 c 5 5 5 c 4 4 4 c 5 c . 
        . c 5 c 5 5 5 5 c 4 4 4 c c c . 
        . . c c c c c c c . . . . . . . 
        `, SpriteKind.Enemy)
}
