class RedGuy {
    constructor(){
        this.pos = new V2d
        this.spawnTime = 0
        this.weapon = null
        this.weaponCD = -1
    }
    
    draw() {
        if(this.alive) {
            c.fillRect(this.pos.x-ENTITY_SIZE/2,this.pos.y-ENTITY_SIZE/2,ENTITY_SIZE,ENTITY_SIZE)
        }
    }
    
    tick () {
        
        this.tileX = Math(this.x / TILE_SIZE)
        this.tileY = Math(this.y / TILE_SIZE)

        /* move */
        var aimPlayerVectorStance = stance(p,[this.x, this.y])
        this.x += (p[0] - this.x) / aimPlayerVectorStance * t * RED_MULTIPLIER
        this.y += (p[1] - this.y) / aimPlayerVectorStance * t * RED_MULTIPLIER

        this.newTileX = Math(this.x / TILE_SIZE)
        this.newTileY = Math(this.y / TILE_SIZE)
        if(this.tileX != this.newTileX || this.tileY != this.newTileY) {
            // tile changed
            soundCells[this.newTileX + '_' + this.newTileY] = {
                x : this.newTileX,
                y : this.newTileY,
                t : SOUND_WAVE_TIME
            }

        }

        /* fire */
        if(this.weaponCD < 1) {
            this.weaponCD = PLAYER_PISTOL_CD
            addBullet([this.x,this.y],p,0)
        } else {
            this.weaponCD --
        }
        
       
    }
}