let a = parseFloat(prompt("Nhập số a:"));
let b = parseFloat(prompt("Nhập số b:"));

if (b === 0) {
    alert("Không thể chia cho 0!");
} else if (a % b === 0) {
    alert(`${a} là bội số của ${b}`);
} else {
    alert(`${a} không phải là bội số của ${b}`);
}