function calculater() {
    let number1 = prompt("HEX you want:");

    const hexToDecimal = hex => parseInt(hex, 16);
    const dec1 = hexToDecimal(number1);

    const hexToBinary = decimal => {
        let result = "";
        if (decimal == 0) {
            result = "0";
        }
        while (decimal > 0) {
            result += decimal % 2;
            decimal = Math.floor(decimal / 2);
        };
        return result.split("").reverse().join("");
    }

    const dec2 = hexToBinary(dec1);

    alert("Dạng thập phân: " + dec1); // 10
    alert("Dạng nhị phân: " + dec2); // 2



}
