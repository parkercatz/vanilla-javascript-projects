const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// エラーメッセージの表示
function showError(input, message) {
  const formControl = input.parentElement; //　親要素の取得
  const small = formControl.querySelector("small"); // small要素の取得
  formControl.className = "form-control error"; // class属性の取得
  small.innerText = message; // 対象の要素のテキストを取得
}

// 成功時
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// イベントリスナー
form.addEventListener("submit", function(e) {
  e.preventDefault();

  // usernameの判定
  if (username.value === "") {
    showError(username, "Username is required");
  } else {
    showSuccess(username);
  }
});
