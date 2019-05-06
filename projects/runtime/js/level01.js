var level01 = function(window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            name: "Robot Romp",
            number: 1,
            speed: -3,
            gameItems: [
                { type: 'sawblade', x: 400, y: groundY },
                { type: 'sawblade', x: 600, y: groundY },
                { type: 'sawblade', x: 900, y: groundY },
                {type: 'alien',x:100,y:200},
                {type: 'alien',x:200,y:200},
                {type: 'blackHole',x:300,y:400},
                {type: 'blackHole',x:500,y:200},
                {type: 'planetRing',x:1000,y:100}
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(false);

        // BEGIN EDITING YOUR CODE HERE
        function createSawBlade(x, y) {
            var hitZoneSize = 25;
            var damageFromObstacle = 10;
            var myObstacle = game.createObstacle(hitZoneSize, damageFromObstacle);
            myObstacle.x = x;
            myObstacle.y = y;
            game.addGameItem(myObstacle);
            var obstacleImage = draw.bitmap('img/sawblade.png');
            myObstacle.addChild(obstacleImage);
            obstacleImage.x = -25;
            obstacleImage.y = -25;
        }
        // create a box
        function createAlien(x,y) {
             var hitZoneSize = 25;
            var damageFromObstacle = 10;
            var myObstacle = game.createObstacle(hitZoneSize, damageFromObstacle);
            myObstacle.x = x;
            myObstacle.y = y;
            game.addGameItem(myObstacle);
            var obstacleImage = draw.bitmap('img/obstacles/alien.png');
            myObstacle.addChild(obstacleImage);
            obstacleImage.x = -25;
            obstacleImage.y = -25;
            
        };
        // add 2 blackHole imgs
         function createBlackHole(x,y) {
             var hitZoneSize = 25;
            var damageFromObstacle = 10;
            var myObstacle = game.createObstacle(hitZoneSize, damageFromObstacle);
            myObstacle.x = x;
            myObstacle.y = y;
            game.addGameItem(myObstacle);
            var obstacleImage = draw.bitmap('img/obstacles/blackHole.png');
            myObstacle.addChild(obstacleImage);
            obstacleImage.x = -25;
            obstacleImage.y = -25;
            
        };
                // add 1 PlanetRing imgs
         function createPlanetRing(x,y) {
             var hitZoneSize = 25;
            var damageFromObstacle = 10;
            var myObstacle = game.createObstacle(hitZoneSize, damageFromObstacle);
            myObstacle.x = x;
            myObstacle.y = y;
            game.addGameItem(myObstacle);
            var obstacleImage = draw.bitmap('img/obstacles/planetRing.png');
            myObstacle.addChild(obstacleImage);
            obstacleImage.x = -25;
            obstacleImage.y = -25;
            
        };
for (var i = 0; i < levelData.gameItems.length; i++) {
    var gameItem = levelData.gameItems[i];
    console.log(gameItem.type);
    
    // Create a sawblade using the .x and .y property of each game item object

// if our gameItem has a type of sawblade
if (gameItem.type === "sawblade") {
// call our creatSawBlade function
        createSawBlade(400, 400);
        createSawBlade(500, 350);
        createSawBlade(700,300);
        
}else if(gameItem.type === "alien"){
        createAlien (600, 400);
        createAlien (900, 300);
        createAlien (200, 400);
        
    
}else if(gameItem.type === "blackHole"){
        createBlackHole (1000, 400);
        createBlackHole (100, 300);
        
} else{
        createPlanetRing (1200, 100);
    
}


// else if our gameItem has a type of alien
// call our creatAlien funtion

// else if our gameItem has a type of blackHole
// call our createBlackHole function

// else our gameItem has a type of planetRing
// call our createPlanetRing function
    
}

var enemy =  game.createGameItem('enemy',25);
var redSquare = draw.rect(50,50,'red');
redSquare.x = -25;
redSquare.y = -25;
enemy.addChild(redSquare);

enemy.x = 400;
enemy.y = groundY-50;

game.addGameItem(enemy);
    };

// loop to put items on the screen
// TODO 11
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if ((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
