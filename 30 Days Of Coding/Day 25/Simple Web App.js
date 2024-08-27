<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Simple Web App</title>
</head>
<body>
  <h1>My Simple Web App</h1>
  <input type="text" id="input" placeholder="Type something">
  <button id="submit">Submit</button>
  <p id="result"></p>
  <script>
    document.getElementById("submit").addEventListener("click", () => {
      const input = document.getElementById("input").value;
      document.getElementById("result").textContent = `You typed: ${input}`;
    });
  </script>
</body>
</html>
