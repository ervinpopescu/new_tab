// sets username for greeting message
var username = "Ervin";

// constant to set the greeting message based on the time of the day, reference https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
const determineGreet = hours => document.getElementById("greeting").innerText = `Good ${hours < 12 ? "morning," : hours < 18 ? "afternoon," : "evening,"} ${username}.`;

// web api to load time based on browser time, reference https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
window.addEventListener('load', (event) => {
  let link = document.getElementsByTagName('a');
  document.body.style.background = "#1e1e2e";
  document.getElementById("greeting").style.color = "#f28fad";
  for (i = 0; i < link.length; i++)
    link[i].style.color = "#bbb";
  determineGreet(new Date().getHours());
});

function currentTime() {
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let session = "AM";

  if (hh == 0) {
    hh = 12;
  }
  if (hh > 12) {
    hh = hh - 12;
    session = "PM";
  }

  hh = (hh < 10) ? "0" + hh : hh;
  mm = (mm < 10) ? "0" + mm : mm;
  ss = (ss < 10) ? "0" + ss : ss;

  let time = hh + ":" + mm + " " + session;

  document.getElementById("time").innerText = time;
  setTimeout(function() { currentTime() }, 1000);
}
currentTime();
