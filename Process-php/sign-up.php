<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect and sanitize input data
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $phone_number = htmlspecialchars($_POST['number']);
    $password = htmlspecialchars($_POST['password']);
    $confirm_password = htmlspecialchars($_POST['confirm-password']);

    // Validate input data
    if (!empty($email) && filter_var($email, FILTER_VALIDATE_EMAIL) && !empty($phone_number) && !empty($password) && ($password === $confirm_password) && !empty($confirm_password)) {
        // Hash the password
        $hashed_password = password_hash($password, PASSWORD_DEFAULT);

        // Database connection parameters
        $servername = "localhost";
        $username = "root"; // Replace with your database username
        $password_db = ""; // Replace with your database password
        $dbname = "k3rry_bets"; // Replace with your database name

        // Create a connection to the database
        $conn = new mysqli($servername, $username, $password_db, $dbname);

        // Check if the connection was successful
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        // Check if email already exists
        $stmt_check = $conn->prepare("SELECT email FROM users WHERE email = ?");
        $stmt_check->bind_param("s", $email);
        $stmt_check->execute();
        $stmt_check->store_result();

        if ($stmt_check->num_rows > 0) {
            $error = "Email already exists";
            header("Location: ../Html/sign-up.html?error=" . urlencode($error));
            $stmt_check->close();
            $conn->close();
            exit();
        }

        $stmt_check->close();

        // Prepare an SQL statement to insert the form data into the database
        $stmt = $conn->prepare("INSERT INTO users (email, phone_number, password) VALUES (?, ?, ?)");
        $stmt->bind_param("sss", $email, $phone_number, $hashed_password);

        // Execute the SQL statement and check if it was successful
        if ($stmt->execute()) {
            // Redirect to login page after successful signup
            header("Location: ../Html/login.html");
            exit();
        } else {
            $error = "Database error: " . $stmt->error;
            header("Location: ../Html/sign-up.html?error=" . urlencode($error));
            exit();
        }

        // Close the statement and the database connection
        $stmt->close();
        $conn->close();
    } else {
        $error = "Invalid input data!";
        header("Location: ../Html/sign-up.html?error=" . urlencode($error));
        exit();
    }
} else {
    $error = "Invalid request method!";
    header("Location: ../Html/sign-up.html?error=" . urlencode($error));
    exit();
}
?>