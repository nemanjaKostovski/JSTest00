let m = 1;
let n = 100;
let sum = 0;
let counter = 0;

for (let i = m; i <= n; i++) {
    if (i % 7 == 0) {
        sum += i;
        counter += 1;
    }
}

let average = sum / counter;
console.log(average);//20