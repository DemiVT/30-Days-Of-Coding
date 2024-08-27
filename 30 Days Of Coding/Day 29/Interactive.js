<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Final Project</title>
</head>
<body>
  <h1>Interactive Web Page</h1>
  <input type="text" id="input" placeholder="Enter something">
  <button id="submit">Submit</button>
  <div id="result"></div>
  <script>
    document.getElementById("submit").addEventListener("click", () => {
      const input = document.getElementById("input").value;
      document.getElementById("result").innerHTML = `<p>You entered: ${input}</p>`;
    });
  </script>
</body>
</html>