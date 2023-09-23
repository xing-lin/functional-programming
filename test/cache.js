// var cache = [];

// function specialNumber(n) {
//   // 如果我们已经计算过这个特殊的数，
//   // 跳过这个操作，然后从缓存中返回
//   if (cache[n] !== undefined) {
//     return cache[n];
//   }

//   var x = 1,
//     y = 1;

//   for (let i = 1; i <= n; i++) {
//     x += i % 2;
//     y += i % 3;
//   }

//   cache[n] = (x * y) / (n + 1);

//   return cache[n];
// }

var specialNumber = (function memoization(){
    var cache = [];

    return function specialNumber(n){
            // 如果我们已经计算过这个特殊的数，
            // 跳过这个操作，然后从缓存中返回
        if (cache[n] !== undefined) {
            return cache[n];
        }

        var x = 1, y = 1;

        for (let i = 1; i <= n; i++) {
            x += i % 2;
            y += i % 3;
        }

        cache[n] = (x * y) / (n + 1);

        return cache[n];
    };
})();

console.log(specialNumber(6)); // 4
console.log(specialNumber(42)); // 22
console.log(specialNumber(1e6)); // 500001
console.log(specialNumber(987654321)); // 493827162”

