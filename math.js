function abs(val) {
    return Math.abs(val);
}

function dist(x1, y1, x2, y2) {
    return Math.sqrt(((x2 - x1) * (x2 - x1)) + ((y2 - y1) * (y2 - y1)));
}

function osc(val, center, amp, type) {
    if (center === undefined) {
        return Math.sin(val)
    }
    if (amp === undefined) {
        return Math.sin(val) + center;
    }
    if (type === undefined) {
        return (Math.sin(val) * amp) + center;
    }
    if (type === POSITIVE) {
        return (Math.abs(Math.sin(val)) * amp) + center;
    }
    if (type === NEGATIVE) {
        return (-Math.abs(Math.sin(val)) * amp) + center;
    }
}

function oscSpeed(val, center, amp, speed, type) {
    if (center === undefined) {
        return Math.sin(val)
    }
    if (amp === undefined) {
        return Math.sin(val) + center;
    }
    if (speed === undefined) {
        return (Math.sin(val) * amp) + center;
    }
    if (type === undefined) {
        return (Math.sin(val * speed) * amp) + center;
    }
    if (type === POSITIVE) {
        return (Math.abs(Math.sin(val * speed)) * amp) + center;
    }
    if (type === NEGATIVE) {
        return (-Math.abs(Math.sin(val * speed)) * amp) + center;
    }
}

function random(low, high) {
    if (high) {
        return map(Math.random(), 0, 1, low, high);
    }
    if (low) {
        if (Array.isArray(low)) {
            return low[randomInt(low.length)];
        }
        return Math.random() * low;
    }
    return Math.random();
}

function randomInt(low = 0, high) {
    if (high) {
        return floor(random(low, high));
    }
    return floor(random(low));
}

function randomRound(amp, round) {
    if (amp === undefined) {
        return Math.random();
    }
    if (round === undefined) {
        return Math.random() * amp;
    }
    if (typeof round === 'string') {
        return Math.floor(Math.random() * amp);
    }
    var factor = Math.pow(10, round - 3);
    return Math.floor((Math.random() * amp) * factor) / factor;
}

function oneIn(chance) {
    return (1 > random(chance));
}

function fiftyFifty() {
    return (random(1) < .5);
}

function map(val, low1, high1, low2, high2) {
    val = constrain(val, low1, high1);
    var scale = (high2 - low2) / (high1 - low1);
    var dif = low2 - low1;
    return (val * scale) + dif;
}

function floor(val) {
    return Math.floor(val);
}

function ceil(val) {
    return Math.ceil(val);
}

function min(val, low) {
    return Math.max(val, low);
}

function max(val, high) {
    return Math.min(val, high);
}

function getMin(val1, val2) {
    return Math.min(val1, val2);
}

function getMax(val1, val2) {
    return Math.max(val1, val2);
}

function constrain(val, low, high) {
    return max(min(val, low), high);
}