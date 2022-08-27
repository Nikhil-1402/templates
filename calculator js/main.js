let display = document.getElementById("visual");
let equation = '';
let btn = document.querySelectorAll('.btn');
for (const i of btn) {
    function number(num) {
        equation += num;
        display.value = equation;
        // console.log(display.value);
        // console.log(equation);
    }

    function reset() {
        equation = '';
        display.value = 0;
        // console.log(equation);
        // console.log(display.value);
    }

    function del() {
        equation = equation.substring(0, (equation.length - 1));
        if (equation.length != 0) {
            display.value = equation;
        } else {
            display.value = 0;
        }
        // console.log(equation);
        // console.log(display.value);
    }

    function operation(op) {
        let last = equation.substr(equation.length - 1, 1);
        // console.log(last);
        if (last != '%' && last != '/' && last != '*' && last != '-' && last != '+') {
            equation += op;
        } else {
            equation = equation;
        }
        display.value = equation;
        // console.log(equation);
        // console.log(display.value);
    }

    function equal() {
        equation = eval(equation);
        display.value = equation;
        // console.log(equation);
        // console.log(display.value);
    }
}


let toggle = () => {
    let mode = document.getElementById('mode');
    let body = document.getElementById('body');
    mode.classList.toggle('active');
    body.classList.toggle('active');
}