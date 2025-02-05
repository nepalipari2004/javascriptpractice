// function colorPalette (r,g,b) {
//     const color = {};
//     color.r = r;
//     color.b = b;
//     color.g = g;
//     color.convertRGB = function () {
//         const {r,g,b} = this;
//         return `rgb(${r}, ${g}, ${b})`;
//     };

//     color.hex = function() {
//         const {r, g, b} = this;
//         return ( function colorPalette(r: any , g: any, b: any ):{
//             '#' + ((1 << r: any;
//             );           g: any;
//         );               b: any; 
//         return color;    rgb(): string;
//     }                    hex(): string;
// }
// }                     (+1 overload)

   

function Color(r,g,b) {
    this.r = r;
    this.g = g;
    this.b = b;
}

Color.prototype.rgb = function() {
    const {r,g,b} = this;
    return `rgb${r}, ${g}, ${b}`;
};

Color.prototype.hex = function() {
    const {r, g, b} = this;
    return '#' + ((1 <<24) + (r << 16) + (g<<8)+b).toString(16).slice(1);
};

Color.prototype.rgba = function(a=1.0) {
    const {r,g,b} = this;
    return `rgba(${r}, ${g},${b}, ${a})`;
};

const color1 = new Color(40,50,60);