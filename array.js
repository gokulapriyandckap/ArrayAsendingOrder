


function array_order(array) {
    

result = [];
result1 = [];
result2 = [];
for (let i = 0; i < array.length; i++) {
    if (i == 1) {
        i = 2
        result.push(array[i]);
        if (i == 2) {
            i = 1
            result.push(array[i]);
        }
    }
    else if (i == 0) {
        result.push(array[i]);
    }
}
for (let j = 0; j < result.length; j++) {
    if (j == 0) {
        j = 1
        result1.push(result[j]);
        if (j == 1) {
            j = 0
            result1.push(result[j]);
        }
    }
    else if (j == 2) {
        result1.push(result[j])
    }
}

for (let k = 0; k < result1.length; k++) {
    if (k == 1) {
        k = 2
        result2.push(result1[k]);
        if (k == 2) {
            k = 1
            result2.push(result1[k]);
        }
    }
    else if (k == 0) {
        result2.push(result1[k])
    }
}

console.log( result, result1,result2);
}

array_order([1,2,5]);