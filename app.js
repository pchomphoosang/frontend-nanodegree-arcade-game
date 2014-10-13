// Enemies our player must avoid 
var Enemy = function( x, y, speed,image) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.speed = speed;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = image;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function( dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
   this.x = this.x + ( 1 * dt * this.speed );
   if ( this.x > 5 ){
        this.x = 0;
   }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x*101, this.y*70);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function( x, y){
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-boy.png';

};

Player.prototype.update = function() {
        
   
    if ( this.y > 5 ){
        this.y = 5
    }

    if ( this.y < 0 ){
        this.y = 0
    }
    
    if ( this.x > 4 ){
        this.x = 4
    }

    if ( this.x < 0 ){
        this.x = 0
    }
}

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x*101, this.y*70);
}

Player.prototype.handleInput = function(dt) {

    if ( dt === 'left' ){

      this.x = this.x - 1;

    }else if ( dt === 'up' ){

      this.y =  this.y -1;

    }else if (dt === 'right'){

      this.x = this.x +1;
    }else{

      this.y = this.y +1;
      
    }  

}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [ ],
    enemy1 = new Enemy( 0, 1, 1, 'images/enemy-bug.png' ),
    enemy2 = new Enemy( 1, 2, 2, 'images/enemy-bug.png' ),
    enemy3 = new Enemy( 0, 1, 2, 'images/enemy-bug.png' ),
    enemy4 = new Enemy( 0, 3, 2, 'images/enemy-bug.png' ),
    player = new Player(4, 5 );

allEnemies.push(enemy1);
allEnemies.push(enemy2);
allEnemies.push(enemy3);
allEnemies.push(enemy4);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});
