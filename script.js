const operator1 = document.querySelector("#operator1");
const operator2 = document.querySelector("#operator2");
const numbers = document.querySelectorAll('.button');
const ac = document.querySelector('#ac');
const c=document.querySelector('#c');
const operations = document.querySelectorAll('.operation');
const equal = document.querySelector(`#equal`);
let operand1 = '', operand2 = '', p = 0;
const minus=document.querySelector(`#minus`);

numbers.forEach(num => {
    num.addEventListener('click', (e) => {
        if (p == 0) {
            operand1 += `${e.target.id}`;
            operator1.textContent = operand1;
        }
        else {
            operand2 += `${e.target.id}`;
            operator2.textContent = operand2;
        }
    })
}

);

operations.forEach(op => {
    op.addEventListener('click', (e) => {
        if (operand1 != '' && operand2 == '') {
            if(operand1.slice(-1)=='+' ||
             operand1.slice(-1)=='⨯' ||
              operand1.slice(-1)=='/' ||
               operand1.slice(-1)=='-' ||
                operand1.slice(-1)=='%'){
                    operand1=operand1.slice(0,-1);
            }
            operand1 += `${op.textContent}`;
            operator1.textContent = operand1;
            p = 1;
        }
        else if (operand1 != '' && operand2 != '') {
            let sign = operand1.slice(-1);
            operand1 = operand1.slice(0, -1);
            operand1 = `${returnn(operand1, operand2, sign)}${op.textContent}`;
            operator1.textContent = operand1;
            operand2 = '';
            operator2.textContent = operand2;
        }
    })
});

function returnn(a, b, sign) {
    if (sign == '/') {
        return roundNumber(a / b);
    }
    else if (sign == '+') { return roundNumber(Number(a) + Number(b)); }
    else if (sign == '⨯') { return roundNumber(a * b) }
    else if (sign == `%`) { return roundNumber(a % b) }
    else if(sign==`-`){return roundNumber(a-b);
    }
}



ac.addEventListener('click', () => {
    operand1 = '';
    operator1.textContent = operand1;
    operand2 = '';
    operator2.textContent = operand2;
    p=0;
})

c.addEventListener('click', () => {
   if(operand1!='' && operand2==''){
    operand1=operand1.slice(0,-1);
    operator1.textContent=operand1;
   }
   else if(operand2!=''){
    operand2=operand2.slice(0,-1);
    operator2.textContent=operand2;
   }
})

function roundNumber(num) {
    return Math.round(num * Math.pow(10, 6)) / Math.pow(10, 6);
}

equal.addEventListener('click', () => {
    if (operand1 != '' && operand2 != '') {
        let sign = operand1.slice(-1);
        operand1 = operand1.slice(0, -1);
        operand1 = `${returnn(operand1, operand2, sign)}`;
        operator1.textContent = operand1;
        operand2 = '';
        operator2.textContent = operand2;
    }
}
)

minus.addEventListener('click',()=>{
    if(p==0){operand1='-'
operator1.textContent=operand1;}

})
