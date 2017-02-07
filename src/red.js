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
    
    tick (player) {


        /* move */
        //var aimPlayerVectorStance = stance(player,[this.x, this.y])
       // this.x += (player.pos.x - this.x) / aimPlayerVectorStance * t * RED_MULTIPLIER
        //this.y += (player.pos.y - this.y) / aimPlayerVectorStance * t * RED_MULTIPLIER

        //this.newTileX = Math(this.x / TILE_SIZE)
        //this.newTileY = Math(this.y / TILE_SIZE)
        

        

        /* fire */
        if(this.weaponCD < 1) {
            this.weaponCD = PLAYER_PISTOL_CD
            //addBullet([this.x,this.y],player.pos,0)
        } else {
            this.weaponCD --
        }
        
       
    }
}