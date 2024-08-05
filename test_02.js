function fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    let fibonacciArr = [0, 1];
    for (let i = 2; i <= n; i++) {
        fibonacciArr[i] = fibonacciArr[i - 1] + fibonacciArr[i - 2];
    }
    return fibonacciArr[n];
}

// เปลี่ยน input ตรงนี้นะครับ
const input = 5
console.log(fibonacci(input));

