<?php
    require('functions.php');

    if (isset($_GET['users'])){
        $users = getUser($pdo);
    }

    echo json_encode($users);