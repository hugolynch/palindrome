function sRGBtoY(srgb) {
    var r = Math.pow(srgb.r, 2.4);
    var g = Math.pow(srgb.g, 2.4);
    var b = Math.pow(srgb.b, 2.4);
    var y = 0.2126729 * r + 0.7151522 * g + 0.0721750 * b;

    if (y < 0.022) {
        y += Math.pow(0.022 - y, 1.414);
    }

    return y;
}

function contrast(fg, bg) {
    var yfg = sRGBtoY(fg);

    var ybg = sRGBtoY(bg);
    var c = 1.14;

    if (ybg > yfg) {
        c *= Math.pow(ybg, 0.56) - Math.pow(yfg, 0.57);
    } else {
        c *= Math.pow(ybg, 0.65) - Math.pow(yfg, 0.62);
    }

    if (Math.abs(c) < 0.1) {
        return 0;
    } else if (c > 0) {
        c -= 0.027;
    } else {
        c += 0.027;
    }

    return c * 100;
}