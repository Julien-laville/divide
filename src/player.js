class Player {
    constructor() {
        this.pos = new V2d(0,0)
        this.weapon = null
        this.wearponCD = -1
        /* pre-construct */
    }
    
    move() {
        this.pos.y = D ? this.pos.y + t : this.pos.y
        this.pos.y = U ? this.pos.y - t : this.pos.y
        
        this.pos.x = R ? this.pos.x + t : this.pos.x
        this.pos.x = L ? this.pos.x - t : this.pos.x
        
        
        
         /*
        for(var i = 0; i < collidables.length; i++) {
            var collidable = collidables[i]
            
            
            
                
            
            if(R) { // ->
                if(p[0] > collidable.x && p[0] < collidable.x+TILE_SIZE
                &&
                p[1] > collidable.y && p[1] < collidable.y+TILE_SIZE) {
                    p[0] = collidable.x
                } 
            } else if(L) { // <-
                if(p[0] > collidable.x && p[0] < collidable.x+TILE_SIZE
                &&
                p[1] > collidable.y && p[1] < collidable.y+TILE_SIZE) {
                    p[0] = collidable.x + TILE_SIZE
                } 
            } 
            if(U) {
                 if(p[1] > collidable.x && p[0] < collidable.x+TILE_SIZE
                &&
                p[1] > collidable.y && p[1] < collidable.y+TILE_SIZE) {
                    p[0] = collidable.x + TILE_SIZE
                } 
            }
            
            //collidable.y 
        }*/
        
    }
    
    draw(){
        c.fillStyle = "#FFFFFF"
        c.fillRect(this.pos.x-ENTITY_SIZE/2,this.pos.y-ENTITY_SIZE/2, ENTITY_SIZE, ENTITY_SIZE)
    }
    
    fire() {
        if(this.weaponCD < 0 && this.isFireing) {
            this.weaponCD = PLAYER_PISTOL_CD
            //addBullet(p,m,0)
        } else {
            this.weaponCD --
        }
    }


}