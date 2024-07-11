/* 매개 변수(Parameter), 전달 인자(Argument) */
const input1 = document.querySelector("#input1");
const btn1 = document.querySelector("#btn1");

// 전달 받은 값이 양수/음수/0 인지 구분해서 출력하는 함수
function testFn1( num ){

  let str;
  if(num === 0)   str = "0";
  else if(num >0) str = "양수";
  else            str = "음수";
  alert(`${num}은 ${str} 입니다`);

}

// #btn1 버튼이 클릭 되었을 때
btn1.addEventListener("click", function(){
  // #input1에 작성된 값 얻어오기
  const value = Number(input1.value);
  // 함수 호출
  testFn1(value);

})

// ㅡㅡㅡㅡㅡㅡ★☆★☆★☆★☆ 함수 1개끝 ★☆★☆★☆★☆ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

/* 입력 받은 수 3개 합계 구하기 */
const btn2 = document.querySelector("#btn2");

function testFn2(num1, num2, num3){
  const sum = num1 + num2 + num3;
  alert(`합계 : ${sum}`);
}

btn2.addEventListener("click", function(){

  // 버튼 클릭 시점에 클래스가 "input2"인 요소 모두 얻어오기
  const inputs = document.querySelectorAll(".input2");
                 // NodeList(유사 배열 형태)queryAll 이기 때문!!

  const value1 = Number(inputs[0].value);
  const value2 = Number(inputs[1].value);
  const value3 = Number(inputs[2].value);

  testFn2(value1, value2, value3); // 함수 호출

});


/** 합계 구하기 (배열 버전)
 *  @param arr : 전달 받은 숫자 배열
 */
function testFn3( arr ){

  let sum = 0;

  for(let i = 0 ; i < arr.length ; i++) {
    sum += arr[i];    
  }

  alert(`합계 : ${sum}`);

}

// #btn3 클릭 시 testFn3 호출
document.querySelector("#btn3").addEventListener("click", function(){

  // 클래스가 input2인 요소를 모두 얻어와 저장(배열)
  const inputs = document.querySelectorAll(".input2");
  
  // inputs 요소 별로 값을 얻어와 숫자로 변환해 숫자 배열에 저장
  
  // 1) inputs 길이 만큼의 배열 생성
  const numberArr = new Array(inputs.length);

  // 2) inputs 각 인덱스 요소의 값을 얻어오기
  for(let i = 0; i < inputs.length; i++){
    const num = Number(inputs[i].value);
    
  // 3) numberArr의 i번째 인덱스 요소에 num 저장
    numberArr[i] = num; // 입력된 값이 모두 numberArr에 저장
  }

  // 합계 구하는 함수 호출
  testFn3( numberArr);

});

/* return 확인하기 1 */
/** num의 x 제곱을 반환하는 함수 */
function pow(num, x) {

  let result = 1; // 곱할 때 영향을 주지 않는 1로 초기화

  for(let i=0; i < x; i++){
    result *= num;
  }
  // 현재 함수를 종료,
  // result 값을 가지고 호출한 곳으로 돌아감
  return result;
}


/** 출력할 문자열을 반환하는 함수 */
function printStr(num){
  return `결과 : ${num}`;
}

// #btn4 클릭 시
document.querySelector("#btn4").addEventListener("click", function(){

  const num = Number(prompt("숫자 입력"));
  const x   = Number(prompt("몇 제곱?"));

  alert(printStr( pow(num, x) ));

})

/* return 확인하기 2 */
function testFn5aaa(num){
  return testFn5bbb(num) * 2;
}

function testFn5bbb(num){
  return testFn5ccc(num) * 3;
}

function testFn5ccc(num){
  return num + 1;
}

const btn5 = document.querySelector("#btn5");
btn5.addEventListener("click", function(){

  alert( testFn5aaa(3) );
  console.log(testFn5aaa(3));
})

/* 익명 함수 확인 */
const btn6 = document.querySelector("#btn6");

// 익명 함수를 이벤트 핸들러로 많이 사용하는 이유
// -> 해당 이벤트 전용 기능인 경우가 많아서
//   (다른 곳에서는 재사용을 못하는 경우가 많아서)
btn6.addEventListener("click", function(){ // 익명함수
  console.log("익명 함수 실행");

  /* 변수 + 익명 함수 */
  // 변수는 함수도 저장할 수 있다!!!! (자료형 : function)

  // 변수명이 익명 함수의 함수명 역할을 해준다!!
  // (요즘 함수 정의 방법 (function 단어 안쓰는게 트렌드다!!!) )
  
  // 해당 함수는 지역 변수에 저장됨
  // -> 해당 지역에서만 사용 가능한 함수
  const plusFn = function(a, b){
  return a+ b;
  }

  console.log( plusFn (1,2) );

});
  
  // 이름 있는 함수 선언/정의 -> 여러 곳에 재사용 가능
function testFn6(){
  console.log("이름 있는 함수 실행");
}

// 함수명만 작성 -> 함수코드가 그대로 반환
btn6.addEventListener("click", testFn6)

/* 매개 변수/return 익명 함수 전달하기 */
const btn7 = document.querySelector("#btn7");

function testFn7( otherFn ){
  // otherFn : 전달 받은 함수 코드

  return function(num){ 
    // otherFn() : 전달 받은 함수 호출(실행)
    return otherFn() + num;
   }

}

btn7.addEventListener("click", function(){

  testFn7( function(){ return 10; } )

  const resultFn = testFn7( function(){ return 10; })

// testFn7() 호출 결과로 받환 받은 함수
  // function(num){
  // return oherFn() + num;
  //}

  alert (resultFn(100) ); //

})

/* 화살표 함수 */
const arrows = document.querySelectorAll(".arrow"); // 버튼 4개

// 화살표 함수 기본 형태
arrows[0].addEventListener("click", () => {

  // 익명 함수를 변수에 대입
  const sumFn = (a, b, c) => {
    return a + b + c;
  }

  alert( sumFn(10,20,30 ));

});

// 매개 변수가 1개인 경우
arrows[1].addEventListener("click", () => {

  // 매개 변수 1개 --> () 생략 가능
  const testFn = num => {
    return 10 * num;
  }

  alert( testFn(99) );

});

/* 한 줄만 작성된 경우 */
arrows[2].addEventListener("click", () => {

  // 함수 정의 부분이 return 한 줄 --> { return } 생략 가능
  const minusFn = (a, b) => a - b;

  alert( minusFn(10, 3) ); // 7

  // 매개 변수 1개, 정의 내용 rreturn 한 줄
  const doubleFn = num => num * 2;

  console.log( doubleFn(3) ); // 6

});

//object를 return하는 경우
arrows[3].addEventListener("click", () => {
    
  // JS 객체 : { k:v, k:v, .... }
  // k(key)   == 변수명
  // v(value) == 대입되는 값

  // 정상 작성
  const objectFn = (name, age) => {
    return { "이름": name, "나이": age };
  }

  // 잘못 작성
  // const objectFn = (name, age) => { "이름": name, "나이": age };
  
  console.log(objectFn("홍윤기", 35));

});

/* 즉시 실행 함수 */

  (() => {
    console.log("[즉시 실행 함수 실행됨]");
    console.log("[점심 맛있게 드세요]");
  }) ()

/*    
    ccc부터 입력되서 하나씩 나감@@@@@@@@@@@
 ㅣ   ccc()    ㅣ
 ㅣ   bbb()    ㅣ
 ㅣ   aaa()    ㅣ
 ㅣ  alert()   ㅣ
 ㅣ이벤트핸들러ㅣ
컵ㅡㅡㅡㅡㅡㅡㅡ
*/

/* STACK 구조
 - 자료 구조 중 하나

 - 한 쪽으로만 들어가고
   한 쪽으로만 나오는 형태

 - 메모리에서 실행된 함수들을
   리스트업할 때 사용됨
   (함수 호출 구조는 Stack 형식)
   
 - 선입후출
   (First In Last Out, FILO)
   또는
   후입선출
   (Last In First Out, LIFO)
   
*/








//-------------------------------------------------

const lunch1 = document.querySelector(".lunch");
const ip = document.querySelector(".ip");

let value = Number(lunch1.value);

function lunch(value){


  if(value === 0) {
    alert("형제네");
    return;
  } else if(value === 1) {
    alert("서울초밥");
    return;

  }else {
    alert("남원추어탕");
    return;

  }

}




// lunch1.addEventListener("click", function(){
  
//   const value = Number(ip.value);
 
//   lunch(value);

// })