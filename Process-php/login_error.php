<?php
if (isset($_SESSION['login_error'])) {
    echo '<p style="color: red; text-align: center;">' . $_SESSION['login_error'] . '</p>';
    unset($_SESSION['login_error']);
}
?>