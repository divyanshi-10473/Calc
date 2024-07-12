let display = document.getElementById('display');
buttons = document.querySelectorAll('button');
for (item of buttons) {

    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        if (buttonText == 'C') {
            display.value = "";
        }
        else if(buttonText==='%'){
            display.value=display.value/100;
        }

        else if (buttonText == 'Del') {
            display.value=display.value.slice(0,-1);
        }
        else if (buttonText == '=') {
            display.value = eval(display.value);
        }
        else {
            display.value += buttonText;
        }

    })
}


