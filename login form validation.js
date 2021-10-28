function form_validation() {
  let mail = document.getElementById("input1").value;
  let pass = document.getElementById("input2").value;
  let form = document.getElementById("loginForm");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("submitted");
  });

  let mail_char = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (mail.match(mail_char)) {
    alert(" You have valid mail ");
  } else {
    alert(" Invalid gmail eg: demo@gmail.com ");
    return false;
  }
  if (pass.length == 6) {
    alert(" Valid password ");
  } else {
    alert(" Password must be 6 Charcter ");
    return false;
  }
}
