<?php
$servername = "localhost";
$username = "root"; // default for WAMP
$password = ""; // default is empty
$dbname = "portfolio_db";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$raw_message = $_POST['message'];

// Append phone to message for storage and email
$message = $raw_message . "\n\nMobile Number: " . $phone;

  // No file upload needed anymore
  // $targetDir = "uploads/"; ... 

  $sql = "INSERT INTO contacts (name, email, message)
          VALUES ('$name', '$email', '$message')";

  if ($conn->query($sql) === TRUE) {
    // Send Email Notification
    $to = "praveenveeramani3007@gmail.com"; 
    $subject = "New Contact Form Submission from " . $name;
    // Removed Resume from body
    $body = "Name: $name\nEmail: $email\nPhone: $phone\nMessage:\n$raw_message"; 
    $headers = "From: no-reply@yourdomain.com"; 

    if(mail($to, $subject, $body, $headers)) {
        // Email sent
    }

    echo "
      <script>
        alert('Your message has been sent successfully!');
        window.location.href = 'contact.html';
      </script>
    ";
  } else {
    echo "
      <script>
        alert('Database error: " . addslashes($conn->error) . "');
        window.history.back();
      </script>
    ";
  }
// Removed else block for upload failure

$conn->close();
?>
