function cubeNumber(number){
    if(typeof number !== 'number'){
    return "Please input a number!";
    }
    else{
    const cube = number * number * number;
    return cube;
    }
    }
const inputNumber = 4;
    const cubeResult = cubeNumber(inputNumber);
    function matchFinder(string1, string2){
    if(typeof string1 !== 'string' || typeof string2 !== 'string'){
    return "Please input text!"
    }
    else if(string1.toLowerCase().includes(string2.toLowerCase()) || string2.toLowerCase().includes(string1.toLowerCase())){
    return true;
    }
    else{
    return false;
    }
    }
    const str1 = "John Doe";
    const str2 = "Ohn";
    const matchResult = matchFinder(str1, str2);
    function sortMaker(arr){
    const [num1,num2] = arr;
    if(num1 <= 0 || num2 <= 0){
    return "Invalid"
    }
    else if(num1 === num2){
    return "Equal"
    }
    else{
    return [Math.max(num1, num2), Math.min(num1, num2)];
    }
    }
    const inputArray = [23, 34]
    const shortResult = sortMaker(inputArray);
    function findAddress(obj){
    const replacedPart = '__';
    const street = obj.street || replacedPart;
    const house = obj.house || replacedPart;
    const society = obj.society || replacedPart;
    return `${street}, ${house}, ${society}`;
    }
    const inputObject = {
    street: 10,
    house: "15A",
    society: "Earth Perfect"
    }
    const addressResult = findAddress(inputObject);
    function canPay(changeArray, totalDue){
    if(changeArray.length === 0){
    return "Please! give me some money...."
    }
    let totalCoins = 0;
    for ( let i = 0; i < changeArray.length; i++){
    totalCoins += changeArray[i];
    }
    return totalCoins >= totalDue;
    }
    const retailCoins = [5, 4, 3];
    const chipsPrice = 10;
    const getChips = canPay(retailCoins, chipsPrice);