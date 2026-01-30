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
$message = $_POST['message'];

$targetDir = "uploads/";
if (!is_dir($targetDir)) {
  mkdir($targetDir, 0777, true);
}

$fileName = basename($_FILES["resume"]["name"]);
$targetFilePath = $targetDir . time() . "_" . $fileName;

if (move_uploaded_file($_FILES["resume"]["tmp_name"], $targetFilePath)) {
  $sql = "INSERT INTO contacts (name, email, message, resume_path)
          VALUES ('$name', '$email', '$message', '$targetFilePath')";

  if ($conn->query($sql) === TRUE) {
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
} else {
  echo "
    <script>
      alert('Error uploading your resume. Please try again.');
      window.history.back();
    </script>
  ";
}

$conn->close();
?>
