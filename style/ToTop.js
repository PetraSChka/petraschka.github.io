/* Скрол на верх */
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/* Сообщение при нажатии на кнопку "Отправить" */
function clickFunc() { alert('Ваше сообщение отправлено'); }
notification.onclick = clickFunc;