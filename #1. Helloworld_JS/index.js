
// querySelector는 노드의 첫번째 자식을 반환 ( css selector 표기법과 동일 )
const title = document.querySelector("#title");
// const title = document.getElementById("title");
title.innerHTML = "Hi! From JS";
title.style.color = "red";
console.dir(document);
document.title = "I own you now";