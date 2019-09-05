class Photon {

    constructor(pos) {
        this.pos = pos;
        this.v = new Vector(-c, 0);
        this.a = new Vector(0, 0);
        //TODO history
    }

    updateSpeed(bh) {
        this.a = Vector.sub(bh.pos, this.pos);
        this.a.setMag(
            (G * bh.m) / Math.pow(this.a.mag / scale, 2)
        );
        this.v.x += this.a.x * (frameDelay / 1000) * factor;
        this.v.y += this.a.y * (frameDelay / 1000) * factor;
    }

    update() {
        this.pos.x += ((this.v.x * frameDelay / 1000) * scale) * factor;
        this.pos.y += ((this.v.y * frameDelay / 1000) * scale) * factor;
    }

    show() {
        ctxC.fillStyle = "#f9a825";
        ctxC.beginPath();
        ctxC.arc(this.pos.x, this.pos.y, 2, 0, Math.PI * 2, false);
        ctxC.fill(); 
    }

    print() {
        console.log("PHOTON");
        console.log("\tpos.x: " + this.pos.x);
        console.log("\tpos.y: " + this.pos.y);
        console.log("\tv.x: " + this.v.x);
        console.log("\tv.y: " + this.v.y);
        console.log("\ta.x: " + this.a.x);
        console.log("\ta.y: " + this.a.y);
    }
}