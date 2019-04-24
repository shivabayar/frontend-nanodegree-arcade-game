// Enemies our player must avoid
var Enemy = function(x, y, ctx, dt) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.dt = dt;
    this.ctx = ctx;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.render();
    this.x = this.x +  dt*100;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    this.ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player {
    sprite = 'images/char-boy.png';

    constructor(x, y, ctx) {
        this.x = x;
        this.y = y;
        this.ctx = ctx;
    }

    handleInput(key) {
        debugger;
        this.update();
    }

    update() {
        this.render();
    }
    render() {
        this.ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    };
}


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var doc = document,
        canvas = doc.createElement('canvas'),
        ctx = canvas.getContext('2d');
    let player = new Player(4*101, 3*83-25, ctx);
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
