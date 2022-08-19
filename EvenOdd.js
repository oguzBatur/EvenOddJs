function oddishOrEvenish(number) {
    if (!Number(number.toString())){
        return "Not a number";
    }
    const numString = number.toString();
    let sum = 0;
    for (let i = 0; i < numString.length; i++) {
        sum += Number(numString[i])
    }

    return sum % 2 === 0 ? "Even" : "Odd";
}


console.log(oddishOrEvenish(43));
console.log(oddishOrEvenish(373));
console.log(oddishOrEvenish(4433));
console.log(oddishOrEvenish("Test"));