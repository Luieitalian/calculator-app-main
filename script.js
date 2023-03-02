function updateTheme1() {
    $('body').css('background-color', 'hsl(222, 26%, 31%)');

    $('.top-section').css('color', 'hsl(0, 0%, 100%)');

    $('#result').css('background-color', 'hsl(224, 36%, 15%)');
    $('#result').css('color', 'hsl(0, 0%, 100%)');

    $('.keypad').css('background-color', 'hsl(223, 31%, 20%)');

    $('.keypad > div > button').css('background-color', 'hsl(30, 25%, 89%)');

    $('.keypad > div > button').css('color', 'hsl(0, 0%, 0%)');

    $('.keypad > div > button').css('box-shadow', '0 4px 0 hsl(35, 11%, 61%)');

    $('#del').css('background-color', 'hsl(225, 21%, 49%)');
    $('#reset').css('background-color', 'hsl(225, 21%, 49%)');
    $('#equals').css('background-color', 'hsl(6, 63%, 50%)');

    $('#del').css('box-shadow', '0 4px 0 hsl(224, 28%, 35%)');
    $('#reset').css('box-shadow', '0 4px 0 hsl(224, 28%, 35%)');
    $('#equals').css('box-shadow', '0 4px 0 hsl(25, 99%, 27%)');

    $('#del').css('color', 'white');
    $('#reset').css('color', 'white');
    $('#equals').css('color', 'white');
}
function updateTheme2() {
    $('body').css('background-color', 'hsl(0, 0%, 90%)');

    $('.top-section').css('color', 'hsl(60, 10%, 19%)');

    $('#result').css('background-color', 'hsl(0, 0%, 93%)');
    $('#result').css('color', 'hsl(60, 10%, 19%)');

    $('.keypad').css('background-color', 'hsl(0, 5%, 81%)');

    $('.keypad > div > button').css('background-color', 'hsl(45, 7%, 89%)');

    $('.keypad > div > button').css('color', 'hsl(60, 10%, 19%)');

    $('.keypad > div > button').css('box-shadow', '0 4px 0 hsl(35, 11%, 61%)');

    $('#del').css('background-color', 'hsl(185, 42%, 37%)');
    $('#reset').css('background-color', 'hsl(185, 42%, 37%)');
    $('#equals').css('background-color', 'hsl(25, 98%, 40%)');

    $('#del').css('box-shadow', '0 4px 0 hsl(185, 58%, 25%)');
    $('#reset').css('box-shadow', '0 4px 0 hsl(185, 58%, 25%)');
    $('#equals').css('box-shadow', '0 4px 0 hsl(25, 99%, 27%)');

    $('#del').css('color', 'white');
    $('#reset').css('color', 'white');
    $('#equals').css('color', 'white');

}
function updateTheme3() {
    $('body').css('background-color', 'hsl(268, 75%, 9%)');

    $('.top-section').css('color', 'hsl(52, 100%, 62%)');

    $('#result').css('background-color', 'hsl(268, 71%, 12%)');
    $('#result').css('color', 'hsl(52, 100%, 62%)');

    $('.keypad').css('background-color', 'hsl(268, 71%, 12%)');

    $('.keypad > div > button').css('background-color', 'hsl(268, 47%, 21%)');

    $('.keypad > div > button').css('color', 'hsl(52, 100%, 62%)');

    $('.keypad > div > button').css('box-shadow', '0 4px 0 hsl(285, 91%, 52%)');
    $('.keypad > div > button:active').css('box-shadow', '0 -1px 0 hsl(285, 91%, 52%)');

    $('#del').css('background-color', 'hsl(281, 89%, 26%)');
    $('#reset').css('background-color', 'hsl(281, 89%, 26%)');
    $('#equals').css('background-color', 'hsl(176, 100%, 44%)');

    $('#del').css('box-shadow', '0 4px 0 hsl(285, 91%, 52%)');
    $('#reset').css('box-shadow', '0 4px 0 hsl(285, 91%, 52%)');
    $('#equals').css('box-shadow', '0 4px 0 hsl(177, 92%, 70%)');


    $('#del').css('color', 'white');
    $('#reset').css('color', 'white');
    $('#equals').css('color', 'hsl(198, 20%, 13%)');

}
function setAttributeChecked(theme) {
    switch (theme) {
        case 1:
            document.getElementById('t1').setAttribute('checked', 'true');
            document.getElementById('t2').setAttribute('checked', 'false');
            document.getElementById('t3').setAttribute('checked', 'false');
            break;
        case 2:
            document.getElementById('t1').setAttribute('checked', 'false');
            document.getElementById('t2').setAttribute('checked', 'true');
            document.getElementById('t3').setAttribute('checked', 'false');
            break;
        case 3:
            document.getElementById('t1').setAttribute('checked', 'false');
            document.getElementById('t2').setAttribute('checked', 'false');
            document.getElementById('t3').setAttribute('checked', 'true');
            break;
    }
}
function setStorage() {

    if (document.getElementById('t1').checked) {
        localStorage.setItem('theme', '1');
    }
    else if (document.getElementById('t2').checked) {
        localStorage.setItem('theme', '2');
    }
    else if (document.getElementById('t3').checked) {
        localStorage.setItem('theme', '3');
    }
}
$(function () {

    if (!localStorage.getItem('theme')) {
        localStorage.setItem('theme', '1');
        setAttributeChecked(1);
        updateTheme1();
    }
    else if (localStorage.getItem('theme') === '1') {
        setAttributeChecked(1);
        updateTheme1();
    }
    else if (localStorage.getItem('theme') === '2') {
        setAttributeChecked(2);
        updateTheme2();
    }
    else if (localStorage.getItem('theme') === '3') {
        setAttributeChecked(3);
        updateTheme3();
    }

    $('#t1').click(function () {
        setAttributeChecked(1);
        setStorage();
        updateTheme1();
    });
    $('#t2').click(function () {
        setAttributeChecked(2);
        setStorage();
        updateTheme2();
    });
    $('#t3').click(function () {
        setAttributeChecked(3);
        setStorage();
        updateTheme3();
    });


    // CALCULATOR


    // GET ELEMENTS

    const buttons = document.querySelectorAll('button');
    const display = document.querySelector('#result');

    // EVENTLISTENERS

    let firstOperand = null;
    let operator = null;
    let currentOperand = '';

    buttons.forEach((button) => {
        button.addEventListener('click',(event) => {
            const target = event.target;
            const value = target.innerText;

            if(target.id == 'reset'){
                firstOperand = null;
                operator = null;
                currentOperand = '';
                display.innerText = '';
            }
            else if (target.id == 'del'){
                display.innerText = display.innerText.substring(0,display.innerText.length-1);
                currentOperand = display.innerText;
            }
            else if (target.id == 'division' || target.id == 'multiplication'|| target.id == 'plus'|| target.id == 'minus'){
                operator = value;
                firstOperand = parseFloat(display.innerText);
                currentOperand = '';
            }
            else if (target.id == 'equals') {
                if(operator){
                    const secondOperand = parseFloat(display.innerText);
                    if(operator === '+'){
                        firstOperand = firstOperand + secondOperand;
                    }
                    else if (operator === '-'){
                        firstOperand = firstOperand - secondOperand;
                    }
                    else if (operator === 'x'){
                        firstOperand = firstOperand * secondOperand;
                    }
                    else if (operator === '/'){
                        firstOperand = firstOperand / secondOperand;
                    }
                    operator = null;
                    currentOperand = firstOperand.toString();
                    display.innerText = firstOperand;
                }
                
            }
            else if (value === '.' && currentOperand.includes('.')){
                return
            }
            else {
                currentOperand += value;
                display.innerText = currentOperand;
            }
        })


    });





});