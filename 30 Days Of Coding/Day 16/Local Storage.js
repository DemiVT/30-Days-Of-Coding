// Local Storage example
document.getElementById("saveButton").addEventListener("click", () => {
  localStorage.setItem("username", "JohnDoe");
  console.log("Username saved to localStorage");
});

document.getElementById("loadButton").addEventListener("click", () => {
  let username = localStorage.getItem("username");
  console.log("Loaded username:", username);
});
