function start() {
    const array1 = [2, 5, 7];
    const array2 = [1, 10];


    
    let max1 = Math.max.apply(null, array1);
    let max2 = Math.max.apply(null, array2);

    let min1 = Math.min.apply(null, array1);
    let min2 = Math.min.apply(null, array2);

    

    if (min1 > min2 && max1 < max2) {
        alert("true");

    } else {
        alert("false");
    }


}