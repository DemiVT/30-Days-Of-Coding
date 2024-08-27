<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Event Handling</title>
</head>
<body>
  <button id="clickMe">Click Me!</button>
  <input type="text" id="inputField" placeholder="Type something">
  <script>
    document.getElementById("clickMe").addEventListener("click", () => {
      alert("Button clicked!");
    });

    document.getElementById("inputField").addEventListener("input", (event) => {
      console.log("Input value:", event.target.value);
    });
  </script>
</body>
</html>
