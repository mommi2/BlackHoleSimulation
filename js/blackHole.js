class BlackHole {

    constructor(pos, m) {
        this.pos = pos;
        this.m = m;
        this.rs = ((2 * G * m) / (c * c));
        scale = background.height / ((16 * this.rs));
        factor = (Math.pow(c, 3)) / (2 * G * m);
    }

    print() {
        console.log("BLACKHOLE");
        console.log("\tpos.x: " + this.pos.x);
        console.log("\tpos.y: " + this.pos.y);
        console.log("\tm: " + this.m);
        console.log("\trs: " + this.rs);
    }

    show() {
        ctxB.fillStyle = "#000000";
        ctxB.beginPath();
        ctxB.arc(this.pos.x, this.pos.y, scale * this.rs, 0, Math.PI * 2, false);
        ctxB.fill();

        ctxB.beginPath();
        ctxB.strokeStyle = "#00FF00";
        ctxB.arc(this.pos.x, this.pos.y, scale * this.rs * 1.5 + 8, 0, Math.PI * 2, false);
        ctxB.lineWidth = 8;
        ctxB.stroke();

        ctxB.beginPath();
        ctxB.arc(this.pos.x, this.pos.y, scale * this.rs * 3 + 16, 0, Math.PI * 2, false);
        ctxB.strokeStyle = "#FF0000";
        ctxB.lineWidth = 16;
        ctxB.stroke();
        
        ctxB.beginPath();
        ctxB.moveTo(0, this.pos.y - (2.6 * this.rs * scale));
        ctxB.lineTo(background.width, this.pos.y - (2.6 * this.rs * scale));
        ctxB.setLineDash([5, 3]);/*dashes are 5px and spaces are 3px*/
        ctxB.strokeStyle = "#000";
        ctxB.lineWidth = 1;
        ctxB.stroke();

    }
}