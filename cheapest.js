const phones = [
    {name : "Samsung", Camera: 12, Storage: "32gb", price: 65000},
    {name : "Nokia", Camera: 24, Storage: "8gb", price: 45000},
    {name : "Xiaomi", Camera: 10, Storage: "12gb", price: 15000},
    {name : "iPhone", Camera: 24, Storage: "8gb", price: 165000},
    {name : "Techno", Camera: 64, Storage: "12gb", price: 5000},
    {name : "Realme", Camera: 12, Storage: "32gb", price: 25000}
];
function cheapestPhone(phones){
    let cheapest = phones[0];
    for(let i = 0; i < phones.length; i++){
        const phone = phones[i]
        if(phone.price < cheapest.price){
            cheapest = phone;
        }
    }
    return cheapest;
};
const mySelection = cheapestPhone(phones);
console.log(mySelection.name)

// let cheapest = phones[0];
//     for(let i = 0; i < phones.length; i ++){
//         const phone = phones[i];
//         if(phone.price < cheapest.price){
//             cheapest = phone;
//         }
//     };
//     return cheapest;