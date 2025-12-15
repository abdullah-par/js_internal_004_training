let params = new URLSearchParams(window.location.search);
let na = params.get("username");
document.getElementById("username").innerHTML = `Welcome, ${na}`
