var background = function(window) {
    'use strict';

    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;

    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app, ground) {
        if (!app) {
            throw new Error("Invaid app argument");
        }
        if (!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }

        // container which will be returned
        var background;

        // Image VARIABLES HERE:
        var galaxy,
            star,
            satellite,
            planet,
            alien,
            blackHole,
            planetRing;

        var spaceships = [];
        // add objects for display inb ackground
        // called at the start of game and whenever the page is resized
        function render() {

            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;

            background.removeAllChildren();

            // this fills the background with a obnoxious yellow
            // you should modify this to suit your game
            var backgroundFill = draw.rect(canvasWidth, canvasHeight, 'pink');
            // background.addChild(backgroundFill);

            // TODO: 3 - Add a moon and starfield
            var circle;
            for (var i = 0; i < 100; i++) {
                circle = draw.circle(10, 'white', 'LightGray', 2);
                circle.x = canvasWidth * Math.random();
                circle.y = groundY * Math.random();
                background.addChild(circle);
            }

            // TODO: 5 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
            var spaceshipHeight = 300;
            var spaceship;
            for (var i = 0; i < 5; ++i) {
                spaceship = draw.rect(75, spaceshipHeight, 'LightGray', 'Black', 1);
                spaceship.x = 200 * i;
                spaceship.y = groundY - spaceshipHeight;
                background.addChild(spaceship);
                spaceships.push(spaceship);
            }

            /////// rewards



            // add a planet
            planet = draw.bitmap('img/rewards/planet.png');
            planet.x = 400;
            planet.y = 100;
            background.addChild(planet);
            
            // add satellite
            satellite = draw.bitmap('img/rewards/satellite.png');
            satellite.x = 1000;
            satellite.y = 300;
            background.addChild(satellite);
            
            // add star
            star = draw.bitmap('img/rewards/star.png');
            star.x = 700;
            star.y = 200;
            background.addChild(star);
            
            
            // TODO 4: Part 1 - Add a galaxy
            galaxy = draw.bitmap('img/rewards/galaxy.png');
            galaxy.x = 180;
            galaxy.y = 200;
            background.addChild(galaxy);
            
            //  obstacles
            // add an alien
            // add a black hole
            // add a planet ring
        }

        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;

            // TODO 4: Part 2 - Move the tree!
            // tree.x = tree.x + 1;
            // if (tree.x < -200) {
            //     tree.x = canvasWidth;
            // }

            // TODO 5: Part 2 - Parallax
            for (var i = 0; i < spaceships.length; i++) {
                spaceships[i].x = spaceships[i].x + 1;

            }

        }

        background = new createjs.Container();
        background.resize = render;
        background.update = update;

        app.addResizeable(background);
        app.addUpdateable(background);

        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if ((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
