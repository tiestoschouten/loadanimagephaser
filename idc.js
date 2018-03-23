/**
 * Generated from the Phaser Sandbox
 *
 * //phaser.io/sandbox/qNGPzbck
 *
 * This source requires Phaser 2.6.2
 */

var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update, render: render });

function preload() {

    game.load.baseURL = 'http://examples.phaser.io/assets/';
    game.load.crossOrigin = 'anonymous';

    game.load.image('phaser', 'sprites/kirito_by_vali233.png');

}

function create() {

    var sprite = game.add.sprite(0, 0, 'phaser');

}

function update() {

}

function render() {

}
