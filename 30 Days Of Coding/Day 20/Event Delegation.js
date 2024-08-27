<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Event Delegation</title>
</head>
<body>
  <div id="container">
    <button class="item">Item 1</button>
    <button class="item">Item 2</button>
  </div>
  <script>
    document.getElementById("container").addEventListener("click", (event) => {
      if (event.target && event.target.classList.contains("item")) {
        console.log("Item clicked:", event.target.textContent);
      }
    });
  </script>
</body>
</html>
