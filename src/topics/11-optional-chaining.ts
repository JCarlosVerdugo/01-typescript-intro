export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Juan'
}

const passenger2: Passenger = {
    name: 'Carlos',
    children: ['Alexa', 'José']
}

const printChildren = (passenger: Passenger) => {

    if (!passenger.children) return 0;

    // const howManyChildren = passenger.children?.length || 0;
    const howManyChildren = passenger.children!.length;
    console.log(passenger.name, howManyChildren);

    return howManyChildren;
}

printChildren(passenger1)