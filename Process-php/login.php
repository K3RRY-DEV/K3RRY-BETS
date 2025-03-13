<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Database connection details (replace with your actual credentials)
    $servername = "localhost";
    $username = "root"; // Replace with your database username
    $password_db = ""; // Replace with your database password
    $dbname = "k3rry_bets"; // Replace with your database name

    // Create connection
    $conn = new mysqli($servername, $username, $password_db, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Get form data
    $number = $_POST['number'];
    $password = $_POST['password'];

    // Prepare and execute a query to retrieve the user's hashed password
    $stmt = $conn->prepare("SELECT id, password FROM users WHERE phone_number = ?");
    $stmt->bind_param("s", $number);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        $stmt->bind_result($id, $hashed_password);
        $stmt->fetch();

        // Verify the password
        if (password_verify($password, $hashed_password)) {
            // Login successful
            $_SESSION['user_id'] = $id;
            header("Location: ../Pages-php/Sports.php"); // Redirect to success.html
            exit();
        } else {
            echo "Incorrect password"; // Basic error
        }
    } else {
        echo "User not found"; // Basic error
    }

    $stmt->close();
    $conn->close();
} else {
    echo "Invalid request method.";
}
?>