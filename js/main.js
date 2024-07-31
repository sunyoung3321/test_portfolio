// 제이쿼리 문서 불러오는 방법
$(function(){
    $("h1").on("click",function(){
        $(this).css({"color" : "red"})
    })
})

const title = document.getElementById("tit")
console.log(title)
// 자바스크립트 문서 불러오는 방법
title.addEventListener("click",function(){
    this.style.color="blue"
})