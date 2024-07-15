const checkBtn1 = document.querySelector("#checkBtn1");

checkBtn1.addEventListener("click", () => {

  const test1 = document.querySelector("#test1"); // ul

  // 요소.childNodes -> 배열 형태(NodeList)로 반환

  // #test1의 모든 자식 노드 얻어오기
  const list = test1.childNodes;
  console.log(list);

  // 첫 번째 li 노드 선택
  console.log(list[3]);

  // 2) 요소.parentNode

  // #li1의 부모 노드 탐색 (JS는 부모 찾기 가능!!)

  const li1 = document.querySelector("#li1");
  console.log(li1.parentNode);

  // 3) 요소.firstChild : 첫 번째 자식 노드 탐색
  //    요소.lastChild  : 마지막  자식 노드 탐색

  // #test1의 첫째, 마지막 자식 노드 탐색
  console.log(test1.firstChild);
  console.log(test1.lastChild);

  // 마지막 li 요소의 배경색을 pink로 변경
  test1.lastChild.style.backgroundColor = "pink";

  // 4) 이전 형제 노드 탐색 : 요소.previousSibling
  //    다음 형제 노드 탐색 : 요소.nextSibling

  // list[9]의 다음, 다음 형제 노드 선택
  console.log(list[9].nextSibling.nextSibling);

  // list[5]의 이전, 이전 형제 노드 선택
  console.log(list[5].previousSibling.previousSibling);

})

/* Element 요소 탐석 */
const checkBtn2 = document.querySelector("#checkBtn2")

checkBtn2.addEventListener("click", () => {

  /* 
  children : 자식 요소만 모두 선택
  parentElement : 부모 요소 선택
  firstElementChild : 첫 번째 자식 요소 선택
  lastElementChild  : 마지막 자식 요소 선택
  previousElementSibling : 이전 형제 요소 선택
  nextElementSibling     : 다음 형제 요소 선택
 */

  const test2 = document.querySelector("#test2"); //ul

  // #test2의 모든 자식 요소
  console.log(test2.children); // 자식요소 4개

  // #test2의 부모 요소
  console.log(test2.parentElement); // body 태그

  // #test2의 첫 번째 자식 요소
  console.log(test2.firstElementChild);

  // #test2의 마지막 자식 요소
  console.log(test2.lastElementChild);

  // #test2의 이전 형제 요소
  console.log(test2.previousElementSibling);

  // #test2의 다음 형제 요소
  console.log(test2.nextElementSibling);
})