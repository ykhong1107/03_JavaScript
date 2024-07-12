const number = document.querySelectorAll(".number");
const lottoBtn = document.querySelector("#lottoBtn");


lottoBtn.addEventListener("click", ()=>{

  for(let i=0 ; i<number.length; i++){
    
    number[i].style.display = 'flex';
    
    number[i].addEventListener("click",() => {
      number[i].style.backgroundColor = 'pink';
    });
  

  }

});



