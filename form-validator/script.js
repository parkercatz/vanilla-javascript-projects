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

// emailのバリデーションチェック
function isValidEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// 必須項目のチェック
function checkRequired(inputArr) {
  inputArr.forEach(input => {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

// inputのIDの取得
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1); // 頭文字を大文字にする
}

// イベントリスナー
form.addEventListener("submit", e => {
  e.preventDefault();

  checkRequired([username, email, password, password2]);
});
