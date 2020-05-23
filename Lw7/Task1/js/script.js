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
    if ((typeof num == "number") ) {
        let j = 2;
        let result = "simple";
        while (j <= (num - 1)) {
            if (num % j == 0) {
                result = "compound";
                break
            }
            j++;
        }
        console.log(`${num} is a ${result} number`)
    } else {
        console.log(`${num} is not compound and simple number`)
    }
}
