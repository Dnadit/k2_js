//DOM 요소 생성 함수
/*
function domAdd() {              //요즘은 cont domAdd = () => {} 로 많이씀.
    console.log('domAdd') ; 
}
*/
//const 안바뀜 let 바뀜
const domAdd = () => {
    console.log('domAdd') ;
    const btn1 = document.createElement("button") ;
    btn1.innerHTML = "버튼1" ;
    btn1.id = "bt1" ;
    btn1.className = "btc" ;
    document.getElementById("content").append(btn1);

    const btn2 = document.createElement("button") ;
    btn2.innerHTML = "버튼2" ;
    btn2.id = "bt2" ;
    btn2.className = "btc" ;
    document.getElementById("content").append(btn2);

    const btn3 = document.createElement("button") ;
    btn3.innerHTML = "버튼3" ;
    btn3.id = "bt3" ;
    btn3.className = "btc" ;
    document.getElementById("content").append(btn3);
}

// DOM 요소 접근
const domRead = () => {
    const btc = document.querySelectorAll(".btc") ;
    console.log(btc)

    //for 순회
    console.log("** for **");
    for(let i=0; i < btc.length ; i++) {
        console.log(btc[i]);        
    }

    //for ... in 순회 (break가 안 걸림)
    console.log("** for in **");
    for(let k in btc) {
        console.log(btc[k]);
    }

    //foreach 순회
    console.log("** foreach **");
    btc.forEach((item, k) => console.log(item, k))          // 한줄만 쓸때는 {} 생략가능, 제어하기 위해서 index를 뽑아내려면 ,k

    //for ... of (break가 걸림) in 보다 of 를 많이 씀.
    console.log("** for of **"); 
    for(let [k,item] of btc.entries()) {
        console.log(k, item.innerHTML);
        if(k == 1) break;
    }
}

//자바스크립트 랜더링 제어
document.addEventListener("DOMContentLoaded", () => {    //DomContent가 다 로드되고나서, () => {} 이름이 없는함수는 화살표로 대체가능, function(콜백함수) 실행.
    //DOM 요소 생성
    domAdd();

    //DOM 요소 접근
    domRead();
}) ;
