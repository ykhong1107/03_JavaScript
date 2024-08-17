
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



// --------------------------------------------------//

/* 화면에 존재하는 .box, .color-input 얻어와 변수에 저장 */

const boxList = document.querySelectorAll(".box");

const inputList = document.querySelectorAll(".color-input");

/* 클릭할 버튼 요소 얻어오기 */

const changeBtn = document.querySelector("#changeButton");

/* 변경 버튼 클릭 시 */
changeBtn.addEventListener("click", function(){

  // 상태 선택자 : checked -> 체크된 요소를 선택
  const checkBtn = 
  document.querySelector("[name = opacity-btn]:checked");
  
  // 선택 안되면 null 반환
  let op;
  
  if( checkBtn === null ) op = 1; // 체크가 안되어 있으면 1
  else                    op = checkBtn.value; // 체크된 값


  for(let i=0 ; i < boxList.length ; i++){
    // input에 작성된 값을 얻어와
    // 같은 index 번째 box 요소에 배경색으로 대입
    boxList[i].style.backgroundColor = inputList[i].value;
  
    // 투명도 적용
    boxList[i].style.opacity = op;
  }
});


/* input 관련 요소에 작성된 값 -> value

  나머지 요소(div,p,span,...)에 작성된 내용
    -> innerText, innerHTML
*/


