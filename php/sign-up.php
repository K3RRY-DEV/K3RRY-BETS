<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect and sanitize input data
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $phone_number = htmlspecialchars($_POST['number']);
    $password = htmlspecialchars($_POST['password']);
    $confirm_password = htmlspecialchars($_POST['confirm-password']);

    // Validate input data
    if (!empty($email) && filter_var($email, FILTER_VALIDATE_EMAIL) && !empty($phone_number) && !empty($password) && ($password === $confirm_password)) {
        // Hash the password
        $hashed_password = password_hash($password, PASSWORD_DEFAULT);

        // Database connection parameters
        $servername = "localhost";
        $username = "username";
        $password_db = "password";
        $dbname = "k3rry_bets";

        // Create a connection to the database
        $conn = new mysqli($servername, $username, $password_db, $dbname);

        // Check if the connection was successful
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        // Prepare an SQL statement to insert the form data into the database
        $stmt = $conn->prepare("INSERT INTO users (email, phone_number, password) VALUES (?, ?, ?)");
        $stmt->bind_param("sss", $email, $phone_number, $hashed_password);

        // Execute the SQL statement and check if it was successful
        if ($stmt->execute()) {
            echo "Sign-up successful!";
        } else {
            echo "Error: " . $stmt->error;
        }

        // Close the statement and the database connection
        $stmt->close();
        $conn->close();
    } else {
        echo "Invalid input data!";
    }
} else {
    echo "Invalid request method!";
}
?>
