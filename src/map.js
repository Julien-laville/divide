class Map {
    constructor() {
        this.tiles = []
        this.entities = Object.create(null)
        this.size = new V2d(0,0)
        this.playerPos = new V2d()
    }
        
    load(rawMap, player, reds) {
         rawMap.layers[1].objects.forEach(function(entity) {
            if(entity.name === 'start') {
                player.pos.setVector(entity.x, entity.y)
            } else if(entity.name === 'red') {
                let red = reds.revive()
                red.pos.setPoint(entity.x, entity.y)
                red.spowTime = entity.properties.spawnTime
            }
        })
        
       for(var i = 0; i < map.width; i ++) {
            for(var j = 0; j < map.height; j ++) {
                tile = map.layers[0].data[i+j*100]
                if(tile === 1) {
                   collidables.push({x : i*TILE_SIZE, y : j*TILE_SIZE})
                }
            }
        }
    }
    
    draw() {
        for(var i = 0; i < map.width; i ++) {
            for(var j = 0; j < map.height; j ++) {
                tile = map.layers[0].data[i+j*100]
                if(tile) {
                    c.fillStyle = tiles[tile]
                    c.fillRect(i*TILE_SIZE, j*TILE_SIZE, TILE_SIZE, TILE_SIZE)
                }
            }
        }
    }
}