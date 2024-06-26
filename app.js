const number = document.querySelectorAll("[data-number]");
const display = document.querySelector(".lower");
const mindisplay = document.querySelector(".upper");
const decimal = document.getElementById(".");
const back = document.getElementById("backspace");
const operation = document.querySelectorAll("[data-operation]");
const equal = document.getElementById("equal");
const fact = document.getElementById("!");
const clear = document.getElementById("C");
clear.addEventListener("click", () => {
    mindisplay.textContent = "";
    display.textContent = "";
})
fact.addEventListener("click", () => {
    let k = display.textContent;
    num1 = Number(k);
    mindisplay.textContent = num1 + "!";
    num1 = factorial(num1);
    display.textContent = num1
})
function factorial(num) {
    if (num == 0) return 1;
    let mul = 1;
    for (let i = 1; i <= num; i++) mul *= i;
    return mul;
}
equal.addEventListener('click', operate);
let num1 = 0, num2 = 0;
operation.forEach((e) => {
    e.addEventListener("click", () => {
        let k = display.textContent;
        num1 = Number(k);
        mindisplay.textContent = num1 + " " + e.textContent;
        display.textContent = "";
    })
})
decimal.addEventListener("click", () => {
    let k = display.textContent;
    k = k.replace(/\s/g, "");
    if (!k.includes(".")) {
        k += ".";
        display.textContent = k;
    }
});
back.addEventListener('click', () => {
    let k = display.textContent;
    k = k.replace(/\s/g, "");
    k = k.substring(0, k.length - 1)
    display.textContent = k;
});
number.forEach((e) => {
    e.addEventListener("click", () => {
        let k = display.textContent;
        k = k.replace(/\s/g, "");
        if (k.length < 13) {
            k += e.textContent;
            display.textContent = k
        }
    })
});

window.addEventListener("keydown", (e) => {
    if (e.key >= '0' && e.key <= 9) {
        let k = display.textContent;
        k = k.replace(/\s/g, "");
        if (k.length < 13) {
            k += e.key;
            display.textContent = k
        }
    }
    if (e.key == 'Backspace') {
        let k = display.textContent;
        k = k.replace(/\s/g, "");
        k = k.substring(0, k.length - 1)
        display.textContent = k;
    }
    if (e.key == '.') {
        let k = display.textContent;
        k = k.replace(/\s/g, "");
        if (!k.includes(".")) {
            k += ".";
            display.textContent = k;
        }
    }
    if (e.key == '+' || e.key == '-' || e.key == '*' || e.key == '/') {
        let k = display.textContent;
        num1 = Number(k);
        mindisplay.textContent = num1 + " " + e.key;
        display.textContent = "";
    }
    if (e.key == 'Enter') {
        if (num1 != 0) {
            if (display.textContent != "") {
                operate();

            }
        }
    }
    if (e.key == '!') {
        let k = display.textContent;
        num1 = Number(k);
        if (num1 > 999999999) {
            alert("out of limit")
        } else {
            num1 = factorial(num1);
            display.textContent = num1
            mindisplay.textContent = num1 + "!";
        }
    }
    if (e.key == "Escape") {
        mindisplay.textContent = "";
        display.textContent = "";
    }
    // console.log(e);

})

function operate() {
    let k = display.textContent;
    num2 = Number(k);
    let operat = mindisplay.textContent.charAt(mindisplay.textContent.length - 1);
    mindisplay.textContent += " " + num2;
    console.log(num1 + " " + num2 + " " + operat);
    let ans = 0;
    if (operat == '+') {
        ans = num1 + num2;
    } else if (operat == '-') {
        ans = num1 - num2;
    } else if (operat == '*') {
        ans = num1 * num2;
    } else if (operat == '/' && num2 == 0) {
        alert('Math error')
        mindisplay.textContent = "";
        display.textContent = "";
    } else if (operat == '/') {
        ans = num1 / num2;
    }

    let a = "" + ans;

    display.textContent = a;
    mindisplay.textContent += " = ";
    num1 = ans;
}



