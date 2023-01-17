<?php

    header("Access-Control-Allow-Origin: *");

    require "database.php";

    $dbo = new PDO("mysql:host=localhost;dbname=lego", "root", "");

    $response = array();

?>