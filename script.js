const time = document.getElementById("time"),
  greeting = document.getElementById("greeting"),
  name = document.getElementById("name"),
  focus = document.getElementById("focus");

function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  const ampm = hour >= 12 ? "PM" : "AM";

  hour = hour % 12 || 12;

  time.innerHTML =
    hour +
    "<span>:</span>" +
    addZero(min) +
    "<span>:</span>" +
    addZero(sec) +
    " " +
    ampm;
  setTimeout(showTime, 1000);
}
//Add Zero
function addZero(n) {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

//Set background  and greeting

function setBgGreeet() {
  let today = new Date();
  hour = today.getHours();
  if (hour < 12) {
    //Morning
    document.body.style.backgroundImage =
      "url('http://source.unsplash.com/1600x900/?sunrise,morning')";
    greeting.textContent = "Good Morning";
    document.body.style.color = "black";
  } else if (hour < 18) {
    //Afternoon
    document.body.style.backgroundImage =
      "url('http://source.unsplash.com/1600x900/?afternoon,sun')";
    greeting.textContent = "Good Afternoon";
  } else {
    //Evening
    document.body.style.backgroundImage =
      "url('http://source.unsplash.com/1600x900/?sunset,evening,night')";
    greeting.textContent = "Good Evening";
    document.body.style.color = "white";
  }
}
//get focus

//set name and focus
function setName(e) {
  if (e.type == "keypress") {
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("name", e.target.inneText);
      name.blur();
    }
  } else {
    localStorage.setItem("name", e.target.inneText);
  }
}
function setFocus(e) {
  if (e.type == "keypress") {
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("focus", e.target.inneHTML);
      focus.blur();
    }
  } else {
    localStorage.setItem("focus", e.target.inneText);
  }
}
name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);
focus.addEventListener("keypress", setFocus);
focus.addEventListener("blur", setFocus);
showTime();
setBgGreeet();
getFocus();
