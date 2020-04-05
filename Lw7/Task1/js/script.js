function isPrimeNumber(n1) {
    let Num;
    if (Array.isArray(n1)) {
        for (let i = 0; i < n1.length; i++) {
            (checkOneNumber(n1[i]))
        }
    } else {
        checkOneNumber(n1)
    }
}

function checkOneNumber(n2) {
    if ((typeof n2 == "number") && (n2 > 0)) {
        let j = 2;
        let Num = "simple";
        while (j <= (n2 - 1)) {
            if (n2 % j == 0) {
                Num = "compound";
                break
            }
            j++;
        }
        console.log(`${n2} is a ${Num} number`)
    } else {
        console.log(`${n2} isn't a natural number`)
    }
}