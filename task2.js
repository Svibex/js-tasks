const mutateArray = function (arr) {
    let mutatedArr = arr.slice();

    while (true) {
        mutatedArr = mutatedArr.sort((a, b) => a - b);
        mutatedArr = filterArr(mutatedArr);
        console.log(mutatedArr);
        if (mutatedArr.length === arr.length || mutatedArr.length < 2) break;
        mutatedArr = mutatedArr
            .map(item => (item.toString().split('').reverse().join('')) ** 2);
    }

    return mutatedArr;

    function filterArr(arr) {
        outer:
            for (let i = 0; i < arr.length;) {
                const regexp = new RegExp(`[${arr[i]}]`);
                for (let j = i; j < arr.length; j++) {
                    if (regexp.test(arr[j].toString()) && j !== i) {
                        arr = arr.filter(el => !regexp.test(el.toString()));
                        continue outer;
                    }
                }
                i++;
            }
        return arr;
    }
}

console.log('Преобразованный массив:', mutateArray([41, 55, 61, 1, 8, 27, 37, 39]));
