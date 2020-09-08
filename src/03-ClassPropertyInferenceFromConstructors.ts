///////////////////////////////////////////////////////////////
// Class Property Inference from Constructors
///////////////////////////////////////////////////////////////

class Square {
    area;
    sideLength;
    constructor(sideLength: number) {
        this.sideLength = sideLength;
        this.area = sideLength ** 2;
    }
}

// class BadSquare {
//     sideLength;  
//     constructor(sideLength: number) {
//       if (Math.random()) {
//         this.sideLength = sideLength;
//       }
//     }
  
//     get area() {
//       return this.sideLength ** 2;
//     }
//   }