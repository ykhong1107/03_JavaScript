/* for([1]초기식 ; [2]조건식 ; [4]증감식){

  [3]조건식이 true인 경우 반복 수행할 코드;
} 
  
*/

/** 12345 출력 */
function check1(){

  // num이 1부터 시작해서
  // 1씩 증가 하다가
  // num 값이 5 이하가 아닌 순간 반복을 종료하는 반복문
  for(let num = 1 ; num <= 5 ; num++){
    console.log(num);

  }

}

// 1부터 10까지 1씩 증가하며 출력하기
function check2(){

  for(let num = 1; num <= 10 ;num++){
    console.log(num);
  }

}

// 5부터 13까지 1씩 증가하며 출력하기
function check3(){

  for(let num = 5; num <= 13 ;num++){
    console.log(num);
  }

}

// 1부터 5까지 1씩 증가한 숫자를 한 줄로 출력하기
function check4(){

  let result = ''; // 결과 저장용 변수에 빈칸(string);

  for(let num = 1; num <= 5 ;num++){
    result += num;   // result = result + num;
  }
    console.log(result); // '12345'
}

function check5(){

  let sum = 0; // 더했을 때 영향이 없는 숫자 0을 대입

  for(let num = 1; num <= 10 ;num++){
    sum += num;  
  }
    console.log(sum); 
}
// shift + alt + r -> 한번에 바꾸기!~!!!

function check6(){

  // 증감식을 2씩 증가하도록 변경(복학 대입 연산자 사용)
  for(let num = 1; num <= 10; num += 2){
    console.log(num);

  }

}

function check7(){

  for(let num = 3; num <= 30; num += 3){
    console.log(num);

  }

}