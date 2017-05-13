export class Utils {

    public static getRandomRgba() {
    var rand = Math.random();
    var num = Math.round(0xffffff * rand);
    var r = num >> 16;
    var g = num >> 8 & 255;
    var b = num & 255;
    return 'rgba(' + r + ', ' + g + ', ' + b + ','+ rand + ')';
}

}
