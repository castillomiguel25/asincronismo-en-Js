const doSomethingAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Do something Async'), 3000)
        : reject(new Error('Test Error'))
    });
}


const doSomething = async () => {
    const something = await doSomethingAsync();
    console.log(something);
}

console.log('Before');
doSomething();
console.log('After');

const anotherFuctions = async () => {
    try {
        const something = await doSomethingAsync();
        console.log(something)
    } catch (error) {
        console.error(error)
    }
}

console.log('Before 1');
anotherFuctions();
console.log('After 1');
