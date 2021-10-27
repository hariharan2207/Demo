function form_validation() {
    let mail = document.forms["login"]["input1"].value;
    let pass = document.forms["login"]["input2"].value;
    let mail_char = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (mail.match(mail_char)) {
      alert(" You have valid mail ");
    } else {
      alert(" Invalid gmail eg: demo@gmail.com ");
    }
    if (pass.length == 6) {
      alert(" Valid password ");
    } else {
      alert(" Password must be 6 Charcter ");
    }
  }
