function isPrimeNumber(arrayOrNumber) {
    if (Array.isArray(arrayOrNumber)) {
        for (let i = 0; i < arrayOrNumber.length; i++) {
            (checkOneNumber(arrayOrNumber[i]))
        }
    } else {
        checkOneNumber(arrayOrNumber)
    }
}

function checkOneNumber(num) {
    if ((typeof num == "number") && (num > 1) && isInteger(num)) {
        let j = 2;
        let result = "simple";
        while (j <= (n2 - 1)) {
            if (n2 % j == 0) {
                result = "compound";
                break
            }
            j++;
        }
        console.log(`${num} is a ${result} number`)
    } else {
        console.log(`${num} isn't compound and simple number`)
    }
}