<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>DOM Manipulation</title>
</head>
<body>
  <h1 id="header">Hello!</h1>
  <button id="changeText">Change Text</button>
  <script>
    document.querySelector("#changeText").addEventListener("click", () => {
      document.getElementById("header").textContent = "Text Changed!";
      document.getElementById("header").style.color = "red";
    });
  </script>
</body>
</html>
