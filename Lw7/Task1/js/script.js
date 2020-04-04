function isPrimeNumber(n1) {
    let isPrime1;
    if (Array.isArray(n1)) {
        for (let i = 0; i < n1.length; i++) {
            (checkOneNumber(n1[i]), isPrime1)
        }
    } else {
        checkOneNumber(n1)
    }
}

function checkOneNumber(n2) {
    if ((typeof n2) == "number") {
        let j = 2;
        let isPrime = "simple";
        while (j <= (n2 - 1)) {
            if (n2 % j == 0) {
                isPrime = "compound";
                break
            }
            j++;
        }
        console.log(`${n2} is a ${isPrime} number`)
    } else {
        console.log(`${n2} isn't a number`)
    }
}