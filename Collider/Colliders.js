import {Vector2} from 'Cartesian'


////////////////////////////////////Classes/////////////////////////////////////
let BoxCollider = class {
    constructor(min, max) {
        this.min = min;
        this.max = max;
    }  
}

let CircleCollider = class {
    constructor(c, r) {
        this.c = c;
        this.r = r;
    }
}

////////////////////////////////////Methods/////////////////////////////////////

let boxIntersect = function (a, b) {
    if(a.max.x < b.min.x || a.min.x > b.max.x) return false;
    if(a.max.y < b.min.y || a.min.y > b.max.y) return false;

    return true
}

let circleIntersect = function (a, b) {
    r = (a.r + b.r) * (a.r + b.r);
    d = (a.x + b.x) * (a.x + b.x) + (a.y + b.y) * (a.y + b.y);
    return r < d;
}

