var num1 = '', num2 = '', ans, action;

display = document.getElementById('input').value;
ans = document.getElementById('answer').value;

// get numbers on button click
function getNumber(num) {
    if (action == null) {
        num1 = num1 + num;
        document.getElementById('answer').value = num1;
    }
    else {
        num2 = num2 + num;
        document.getElementById('answer').value = num2;
    }
}

// get operand on button click
function getOperand(params) {
    action = params;
    document.getElementById('input').value = action;
}


// clear screen
function clearScreen() {
    num1 = '', num2 = '', ans, action = null;
    document.getElementById('input').value = '';
    document.getElementById('answer').value = (num1, num2);
}

// backspace
function backspace() {
    var input_var  = document.getElementById('answer');
    var x = input_var.value;
    if (x.length > 0) {
        x = x.substring(0, x.length-1); 
        input_var.value = x;
    }
    
}



// display result 
function compute() {
    if (action == '+') {
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
        document.getElementById('answer').value = add(num1, num2);
    }
    if (action == '-') {
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
        document.getElementById('answer').value = sub(num1, num2);
    }
    if (action == '/') {
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
        document.getElementById('answer').value = div(num1, num2);
    }
    if (action == '*') {
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
        document.getElementById('answer').value = mul(num1, num2);  
    }
}

// perform arithmetic operation
function add(num1, num2) {
    return num1 + num2;
}

function sub(num1, num2) {
    return num1 - num2;
}
function div(num1, num2) {
    return num1 / num2;
}

function mul(num1, num2) {
    return num1 * num2;
}