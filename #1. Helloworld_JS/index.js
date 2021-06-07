
// querySelector는 노드의 첫번째 자식을 반환 ( css selector 표기법과 동일 )
const title = document.querySelector("#title");
// const title = document.getElementById("title");

function handleClick() {
    title.style.color = "blue";
}

// handleResize()라고 쓰지 않는다. 함수를 바로 즉시 호출하지 않기 위해
title.addEventListener("click", handleClick);