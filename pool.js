/* interface poolable implement kill and revive */ 
/* pool is an array with a pivot that divide dead element from alive one */
/* AA^DDDDD */
function PoolableNumber(isAlive){this.alive = isAlive;}
//PoolableNumber.prototype = Number.prototype
PoolableNumber.prototype.revive = function() {
    this.alive = true
}
PoolableNumber.prototype.kill = function() {
    this.alive = false
}

function Pool(size, constructor) {
    this.pool = []
    //this.pool = new Array(size).fill(new constructor(false))
    for(var i = 0; i < size; i += 1) {
        this.pool[i] = new constructor(false);
    }
    this.pivot = 0
}

Pool.prototype.kill = function() {
    this.pool[--this.pivot].kill()
}

Pool.prototype.revive = function() {
    this.pool[this.pivot++].revive()
}


/* tests */

var intPool = new Pool(10, PoolableNumber)
