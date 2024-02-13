const phones = [
    {name : "Samsung", Camera: 12, Storage: "32gb", price: 65000},
    {name : "Nokia", Camera: 24, Storage: "8gb", price: 45000},
    {name : "Xiaomi", Camera: 10, Storage: "12gb", price: 15000},
    {name : "iPhone", Camera: 24, Storage: "8gb", price: 65000},
    {name : "Techno", Camera: 64, Storage: "12gb", price: 5000}
];

function sumCartItems(items){
    let sum = 0;
    for(let i = 0; i < items.length; i++){
        const item = items[i];
        sum = sum + item.price;
    }
    return sum;
}
const myCart = sumCartItems(phones);
console.log("The total cost is " + myCart);