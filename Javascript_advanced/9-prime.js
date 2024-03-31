
function countPrimeNumbers() {

    const isPrime = (number) => {
        if (number < 2) {
            return false;
        }

        for (let i = 2; i ** 2 <= number; i++) {
            if (number % i == 0) {
                return false;
            }
        }
        return true;

    }

    const start = performance.now();

    counter = 0;

    for (let i = 2; i <= 100; i++) {
        if (isPrime(i)) {
            counter++;
        }
    }

    const end = performance.now();

    const executionTime = end - start;

    console.log(`Execution time of printing countPrimeNumbers was ${executionTime} milliseconds.`);

    return counter;
}

countPrimeNumbers();