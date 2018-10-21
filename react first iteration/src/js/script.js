var username = "clive01"
window.onload = function() {
  var time = new Date();
  document.getElementById("headerChild3").innerHTML = time.toLocaleString('en-UK', { hour: 'numeric', minute: 'numeric', hour12: true });
  document.getElementById("timeOfDayWelcomeMessage").innerHTML = welcomeMessageFunc(username);
}

function welcomeMessageFunc() {
  var d = new Date();
  var n = d.getHours();
  var prefixer;
  if (n>=0&&n<=12) prefixer = "Good morning, ";
  else if (n>=12&&n<=17) prefixer = "Good afternoon, ";
  else prefixer = "Good night, ";
  var welcMessage = prefixer + username;
  return welcMessage;
}
