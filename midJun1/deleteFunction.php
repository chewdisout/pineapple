<?php

$connection = mysqli_connect("localhost", "root", "root", "emailsub");
if(mysqli_connect_errno()){
    echo'Ошибка в подключении к базе данных ('.mysqli_connect_errno().'):'.mysqli_connect_error();
    exit();
}

$id = $_POST['delete_id'];
$query = mysqli_query($connection, "DELETE FROM email WHERE id='$id'");

?>
