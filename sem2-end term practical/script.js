function checkArmstrong() {
    let num = document.getElementById("num").value;
    let temp = num;
    let sum = 0;
    let digits = num.length;

    while (temp > 0) {
        let rem = temp % 10;
        sum += rem ** digits;
        temp = Math.floor(temp / 10);
    }

    if (sum == num) {
        document.getElementById("result").innerText =
            num + " is an Armstrong Number";
    } else {
        document.getElementById("result").innerText =
            num + " is not an Armstrong Number";
    }
}