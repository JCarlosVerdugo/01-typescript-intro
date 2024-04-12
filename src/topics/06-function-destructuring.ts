interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Nokia A1',
    price: 150.0
}

const tablet: Product = {
    description: 'iPad Air',
    price: 250.0
}


const shoppingCart = [phone, tablet];
const tax = 0.15;

interface TaxCalculationOptions {
    tax: number,
    products: Product[];
}

// function taxCalculation( options: TaxCalculationOptions ): [number, number] {
// function taxCalculation( {products, tax}: TaxCalculationOptions ): [number, number] {
function taxCalculation( options: TaxCalculationOptions ): [number, number] {
    const { tax, products } = options; 
    let total = 0;

    products.forEach(({price}) => {
        total += price;
    });

    return [total, total * tax];

}


const [total, totalTax] = taxCalculation({
    products: shoppingCart,
    tax
});

console.log('Total', total);
console.log('Tax', totalTax)


export {};