var arr = [1, 2, 5, 7, 4];

function myFilter(arr, func) {
        var newArr = [];

        arr.forEach(value => {
                if (func(value))
                        newArr.push(value);
        });

        return newArr;
}

var filtered = myFilter(arr, function (item) {
        return item % 2 === 0;
});

console.log(filtered);