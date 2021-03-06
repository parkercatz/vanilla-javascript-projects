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
function checkEmail(input) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "メールアドレスの書式に誤りがあります。");
  }
}

// 必須項目のチェック
function checkRequired(inputArr) {
  inputArr.forEach(input => {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)}は必須です。`);
    } else {
      showSuccess(input);
    }
  });
}

// inputの長さをチェック
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)}は${min}文字以上で入力してください。`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)}は${max}文字以下で入力してください。`
    );
  } else {
    showSuccess(input);
  }
}

// パスワードの比較チェック
function checkPasswordsMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "パスワードが一致しません。");
  }
}

// inputのIDの取得
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1); // 頭文字を大文字にする
}

// イベントリスナー
form.addEventListener("submit", e => {
  e.preventDefault();
  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkEmail(email);
  checkPasswordsMatch(password, password2);
});
