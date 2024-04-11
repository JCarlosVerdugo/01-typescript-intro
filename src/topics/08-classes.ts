
export class Person {
    // public name: string | undefined;
    // public name: string;
    // private address: string;

    // constructor(name: string, address: string) {
    //     this.name = name;
    //     this.address = address
    // }


    constructor( 
        public name: string, 
        private address: string = 'No Address'
    ) {}


}


const ironman = new Person('Ironman');

// console.log(ironman.name);
// // private properties can access in typescript
// console.log(ironman.address);

console.log(ironman)