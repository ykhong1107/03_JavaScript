
let balance = 10000;

const amount = document.getElementById("amount");

const output = document.getElementById("output");

const password = '1234';

document.getElementById("output").innerText = balance

function deposit(){

  const num1 = Number(amount.value);
  console.log(num1);

  balance += num1;

  output.innerText = balance;

  amount.value = '';
}

function withdrawal(){

  const pw = prompt("비밀번호를 입력해")
  const num1 = Number(amount.value);
  const num2 = Number(output.value)

  if(pw === null){
    alert("비밀번호입력 취소할거야!");
    return;
  }

  if(pw !== password){
    alert("비밀번호가 틀려!");
    return;
  }

  if(num1 > balance){
    alert("출금 금액은 잔액보다 크면 안돼!");
    return;
  }
  
  console.log(num1);

  balance -= num1;

  output.innerText = balance;

  amount.value = '';

  alert(`${num1}원이 출금됬어! 그리고 ${balance}원이 남았어~`)
}