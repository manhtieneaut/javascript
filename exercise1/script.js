function calculater(){
    let amount = prompt("Enter amount");

    let rate = prompt("Enter interest rate (%)");

    let months = prompt("Enter months to pay");
    //tính lãi suất hành tháng

    const interest =(amount*(rate * 0.01))/months;

    //Tính tổng tiền phải trả hàng tháng

    const total = ((amount / months)+interest).toFixed(2);

    alert("EMI:"+total);
}