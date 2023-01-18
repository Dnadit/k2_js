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
    btn1.innerHTML = "주사위" ;
    btn1.id = "bt1" ;
    btn1.className = "btc" ;
    document.getElementById("content").append(btn1);  
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

//click함수
const clickBtn = (div0, bt0) => {
    bt0.addEventListener("click", () => {
        div0.innerHTML = `<h1>${bt0.innerHTML}</h1>`;
        console.log(bt0.innerHTML);
    })
}

//DOM 요소 수정
const domUpdate = () => {
    const div1 = document.querySelector("#div1");
    //div1.innerHTML = "요소를 수정하고 있습니다...";
    
    // 함수 호출
    // const bt1 = document.querySelector("#bt1");
    // const bt2 = document.querySelector("#bt2");
    // const bt3 = document.querySelector("#bt3");

    // clickBtn(div1, bt1);
    // clickBtn(div1, bt2);
    // clickBtn(div1, bt3);

    const btc = document.querySelectorAll(".btc");
    for(let bt of btc) {
        console.log(bt);
        bt.addEventListener("click", () => {
            div1.innerHTML = `<h1>${bt.innerHTML}</h1>`;
        })
    console.log(btc);
    }
}

//자바스크립트 랜더링 제어
document.addEventListener("DOMContentLoaded", () => {    //DomContent가 다 로드되고나서, () => {} 이름이 없는함수는 화살표로 대체가능, function(콜백함수) 실행.
    //DOM 요소 생성
    domAdd();

    //DOM 요소 접근
    domRead();

    //DOM 요소 변경
    domUpdate();

});
