function calculater(){
    let number1 = prompt("HEX you want:");

    const hexToDecimal = hex => parseInt(hex, 16);
    const dec1 = hexToDecimal(number1);
    alert(dec1); // 2
    

  
}