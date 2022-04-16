var getColorNumber = function () { return Math.floor(Math.random() * 256); };
var Color = /** @class */ (function () {
    function Color() {
    }
    Color.prototype.get = function () {
        var color = "RGB(".concat(getColorNumber(), ",").concat(getColorNumber(), ",").concat(getColorNumber(), ")");
        return color;
    };
    return Color;
}());
var color = new Color();
console.log(color.get());
