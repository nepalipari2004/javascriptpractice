class Color {
    constructor (r,g,b) {
    this.r = r;
    this.b = b;
    this.g = g;
    this.colorName = this.name;
    }
    innerRGB(){
        const {r,g,b} = this;
        return `(${r}, ${g}, ${b})`; 
    }
    rgb(){
        return `rgb(${this.innerRGB()})`;
    }
    rgba(a = 1.0) {
        return `rgba(${this.innerRGB()}, ${a})`;
    }
    hex(){
        const {r,g,b} = this;
        return '#' + ((1 <<24) + (r << 16) + (g<<8)+b).toString(16).slice(1);
    }
}


const c1 = new Color (255,67,9, 'saffron' );

