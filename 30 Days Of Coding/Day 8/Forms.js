<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Form Validation</title>
</head>
<body>
  <form id="myForm">
    <label for="email">Email:</label>
    <input type="email" id="email" required>
    <button type="submit">Submit</button>
    <p id="feedback"></p>
  </form>
  <script>
    document.getElementById("myForm").addEventListener("submit", (event) => {
      event.preventDefault();
      let email = document.getElementById("email").value;
      let feedback = document.getElementById("feedback");

      if (email) {
        feedback.textContent = "Form submitted successfully!";
        feedback.style.color = "green";
      } else {
        feedback.textContent = "Please enter a valid email.";
        feedback.style.color = "red";
      }
    });
  </script>
</body>
</html>
