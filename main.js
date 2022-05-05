
function closeModal() {
    var x = document.getElementById('demoACC');
    if (x.className.indexOf("subnav-show ") == -1) {
        x.className += "subnav-show ";
      } else {
        x.className= x.className.replace("subnav-show ", "");
      }
}

