type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';
 
export interface Figure {
  shape: Shape;
  color: Color;

  getArea(): number;
} 

export class Triangle implements Figure {
  constructor(
    public a: number = 0,
    public b: number = 0,
    public c: number = 0,
    public shape : Shape = 'triangle',
    public color: Color) {
    
    if (a <= 0 || b <= 0 || c <= 0) { 
      throw new Error; 
    } 
    }
  
  getArea(): number {
    const s: number = +((this.a + this.b + this.c) / 2).toFixed(2);
    return parseFloat((Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c))).toFixed(2));
  } 
}

export class Circle implements Figure {
  constructor(
    public radius: number = 0,
    public shape: Shape = 'circle', 
    public color: Color) { 
    if (radius <=0 ) { 
      throw new Error();
    }
    }
  
  getArea(): number {
    return parseFloat((Math.PI * Math.pow(this.radius, 2)).toFixed(2));
  }
}

export class Rectangle implements Figure {
  constructor(
    public width: number = 0,
    public height: number = 0,
    public shape: Shape = 'rectangle',
    public color: Color) { 
    if (width <= 0 || height <= 0 ) { 
      throw new Error();
    }
    }
  
  getArea(): number {
    return  +(this.width * this.height).toFixed(2);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} ${figure.getArea()}`;
}
