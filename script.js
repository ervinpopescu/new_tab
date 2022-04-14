// sets username for greeting message
var username = "Ervin";

// constant to set the greeting message based on the time of the day, reference https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
const determineGreet = hours => document.getElementById("greeting").innerText = `Good ${hours < 12 ? "morning," : hours < 18 ? "afternoon," : "evening,"} ${username}.`;

// web api to load time based on browser time, reference https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
window.addEventListener('load', (event) => {
  let today = new Date();
  let time = today.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  let link = document.getElementsByTagName('a');
  document.body.style.background = "#1e1e2e";
  document.getElementById("greeting").style.color = "#bf616a";
  for (i = 0; i < link.length; i++)
    link[i].style.color = "#bbb";
  determineGreet(new Date().getHours());
  displayTime(time);
});

// sets time above the greeting message
function displayTime(time) {
  document.getElementById("time").innerHTML = time;
}

