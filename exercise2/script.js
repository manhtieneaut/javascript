function toBinary(decimal) {
    let result = "";
    if (decimal == 0) {
    result = "0";
    }
    while (decimal > 0) {
    result += decimal % 2;
    decimal = Math.floor(decimal/2);
    };
    return result.split("").reverse().join("");
    }

function calculater(){
    let decimal = prompt("Enter decimal");

   const result = toBinary(decimal);

   alert(result);
}

