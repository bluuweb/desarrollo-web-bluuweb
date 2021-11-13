function makeCounter() {
    let privateCounter = 0;

    return {
        increment() {
            privateCounter++;
        },
        decrement() {
            privateCounter--;
        },
        value() {
            return privateCounter;
        },
    };
}

const crearContador = (num = 0) => ({
    increment() {
        num++;
    },
    decrement() {
        num--;
    },
    value() {
        return num;
    },
});

const counter1 = crearContador(10);
const counter2 = makeCounter();

console.log(counter1.value());
console.log(counter2.value());

counter1.increment();
counter1.increment();
counter1.increment();

counter2.decrement();
counter2.decrement();
counter2.decrement();

console.log(counter1.value());
console.log(counter2.value());
