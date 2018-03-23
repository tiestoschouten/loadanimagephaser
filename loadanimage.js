var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};


var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create });
console.log("fuck");
function preload() {


game.load.image('cat', 'images/CAT.jpg');

}

function create() {


    var image = game.add.image(0, 0, 'cat');
    image.scale.set(.3, .3);
}
function update() {

}
