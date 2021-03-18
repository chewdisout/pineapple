<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="scriptDB.js"></script>
</head>
<body>
<div style="margin: 10px 0px 0px 5px; font-weight: bold;">Email database:</div><br>
<div id="btnMenu" style="margin-bottom: 5px;">
    <button type="button" onclick="sortListDate()">Sort by date</button>
    <button type="button" onclick="sortListAZ()">Sort by name</button>
    <button style="margin: 0px 10px 0px 10px" type="button" onclick="showAll()">Show all</button>
</div>
<input id="search" type="search" onkeyup="searchEmail()">
<div id="sortInfo"></div>
<ul id="table">
<?php

$connection = mysqli_connect("localhost", "root", "root", "emailsub");
if(mysqli_connect_errno()){
    echo'Ошибка в подключении к базе данных ('.mysqli_connect_errno().'):'.mysqli_connect_error();
    exit();
}

function getEmails($con){
    $sql = "SELECT * FROM email";
    $result = mysqli_query($con, $sql);
    $allEmails = mysqli_fetch_all($result);
    return $allEmails;
}

$emailsData = getEmails($connection);

for($i = 0; $i < count($emailsData); $i++){
    echo '<li style="margin-top: 3px" id="'.$emailsData[$i][0].'"><input type="checkbox"><label id="label-style" for=""><number>'.$emailsData[$i][0].'</number> - <email>'.$emailsData[$i][1].'</email> - '.$emailsData[$i][2].'</label><input style="margin-left: 3px" type="button" id="'.$emailsData[$i][0].'" value="Delete"></li>';
}

?>
</ul>

<script>
    $(document).ready(function () {
        $("input").click(function() {
            var label = "#" + this.id;
            if(confirm('are you sure?')){
                $.ajax({
                    type: 'post',
                    url:'deleteFunction.php',
                    data:{delete_id: this.id},
                    success: function() {
                        $(label).hide('slow');
                        location.reload();
                    }
                });
            }

        });
    });
</script>
</body>
</html>



