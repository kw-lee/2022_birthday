var dday = new Date("January 29, 2022, 23:59:59").getTime();

setInterval(function() {
  var today = new Date().getTime();
  var gap = dday - today;
  var day = Math.floor(gap / (1000 * 60 * 60 * 24));
  var hour = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var min = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
  var sec = Math.floor((gap % (1000 * 60)) / 1000);
  if (day >= 0) {
    document.getElementById("dday").innerHTML = "프로젝트 종료까지 " + day + "일 " + hour + "시간 " + min + "분 " + sec + "초 남았습니다.";
  } else {
    document.getElementById("dday").innerHTML = "프로젝트가 종료되었습니다.";
  }
}, 1000);
