// 일단 너비, 높이, 글자크기, 굵기, 글자색, 배경색
// 가로정렬, 세로정렬, 출력 문자열 입력!!
// "적용하기 Button 클릭시" 문제에서 제시한 이미지가 나오게하기!!

const width = document.querySelector("#widthInput")
const height = document.querySelector("#heightInput")
const fontsz = document.querySelector("#fontSizeInput")

const fontcolor = document.querySelector("#fontColorInput")
const bgc = document.querySelector("#backgroundColorInput")  

const textOutput = document.querySelector("#textOutput")

const applyButton = document.querySelector(".applyButton")

const result = document.querySelector(".result")

// 입력값 다 가져오기

// value 매기기

applyButton.addEventListener("click", function(){

  const widthValue = width.value;
  const heightValue = height.value;
  const fontszValue = fontsz.value;
  const bgcValue = bgc.value;
  const textOutputValue = textOutput.value;
  const fontcolorValue = fontcolor.value;
  const radioFont = document.querySelector('input[name = "myradio1"]:checked').value;
  const rowAlign = document.querySelector('input[name = "myradio2"]:checked').value;
  const columnAlign = document.querySelector('input[name = "myradio3"]:checked').value;
  

  result.style.width = widthValue + 'px';
  result.style.height = heightValue + 'px';
  result.style.fontSize = fontszValue + 'px';
  result.style.backgroundColor = bgcValue;
  result.innerText = textOutputValue;
  result.style.color = fontcolorValue;
  result.style.fontWeight = radioFont;
  result.style.justifyContent = rowAlign;
  result.style.alignItems = columnAlign;
  

  



});