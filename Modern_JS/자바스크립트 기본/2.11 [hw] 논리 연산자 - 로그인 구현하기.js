let checkedId = prompt("아이디를 입력해주세요", "");

if (checkedId == "Admin") {
  let checkedPw = prompt("비밀번호를 입력해주세요", "");
  if (checkedPw == "TheMaster") {
    alert("환영합니다!");
  } else if (checkedPw == "" || checkedId == "null") {
    alert("취소되었습니다.");
  } else {
    alert("인증에 실패하였습니다.");
  }
} else if (checkedId == "" || checkedId == "null") {
  alert("취소되었습니다.");
} else {
  alert("인증에 실패하였습니다.");
}
