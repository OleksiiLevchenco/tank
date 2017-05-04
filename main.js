

function Radar() {
    this.getTarget = function () {
        return {
            x: 15,
            y: 20
        }
    };
}

function Gun() {
    var coords;
    var shoots = 10;

    this.setCoords = function(coordinats) {
        coords = coordinats;
    };

    this.fier = function () {
        if (shoots > 0) {
            shoots--;
            console.log('Gun - Babah po ' + coords.x + ' ' + coords.y );
            console.log('shoots remaining - ' + shoots);

        } else {
            console.log( 'No more Shoots !!!' );
        }
    };

    this.isReady = function() {
        return shoots > 0;
    };



}


function Tank() {

    this.radar = {};
    this.gun = {};
    this.ready = true;

    this.fier = function () {

        var isGunReady = this.gun.isReady();

        if (isGunReady) {
            var coords = this.radar.getTarget();
            this.gun.setCoords(coords);
            console.log('Tank - ready for a fire');
            this.gun.fier();
        } else {
            this.ready = false;
        }

        console.log('Tank - target achieved');
        console.log('==============================================================================');
    };

}

// game init
var tank;
function init() {
    tank = new Tank();
    tank.gun = new Gun(tank.ready);
    tank.radar = new Radar();

}

init();

// game cycle

var cycleId = setInterval( cycle ,1000);

function cycle() {
    if (tank.ready) {
        tank.fier();
    } else {
        clearInterval(cycleId);
    }
}
