
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

    counter = 0;

    for (let i = 2; i <= 100; i++) {
        if (isPrime(i)) {
            counter++;
        }
    }

    return counter;
}

const start = performance.now();

for (let i = 0; i < 100; i++) {
    setTimeout(function() { countPrimeNumbers();
    }, 0);
}

const end = performance.now();

const executionTime = end - start;

console.log(`Execution time of calculating prime numbers 100 times was ${executionTime} milliseconds.`)