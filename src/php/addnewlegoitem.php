<?php
    header("Access-Control-Allow-Origin: *");
    $host = "localhost";
    $user = "root";
    $password = "";
    $dbname = "lego";

    if(isset($_POST["name"]) and isset($_POST["category"]) and isset($_POST["theme"]) and isset($_POST["serial"]) and isset($_POST["year"]) and isset($_POST["pieces"]) and isset($_POST["price"]) and isset($_POST["state"]) and isset($_POST["imgUrl"]) and isset($_POST["imgAlt"])) {
        $response = array();
        
        $dbo = new PDO("mysql:host=localhost;dbname=lego", "root", "");
        
        $name = $_POST["name"];
        $category = $_POST["category"];
        $theme = $_POST["theme"];
        $serial = $_POST["serial"];
        $year = $_POST["year"];
        $pieces = $_POST["pieces"];
        $price = $_POST["price"];
        $state = $_POST["state"];
        $imgUrl = $_POST["imgUrl"];
        $imgAlt = $_POST["imgAlt"];

        $stmt = $dbo->prepare("INSERT INTO legoitems(name, category, theme, serial, year, pieces, price, state, imgUrl, ImgAlt) VALUES (:name, :category, :theme, :serial, :year, :pieces, :price, :state, :imgUrl, :imgAlt)");
        $stmt->bindParam(':name', $name, PDO::PARAM_STR);
        $stmt->bindParam(':category', $category, PDO::PARAM_STR);
        $stmt->bindParam(':theme', $theme, PDO::PARAM_STR);
        $stmt->bindParam(':serial', $serial, PDO::PARAM_STR);
        $stmt->bindParam(':year', $year, PDO::PARAM_INT);
        $stmt->bindParam(':pieces', $pieces, PDO::PARAM_INT);
        $stmt->bindParam(':price', $price, PDO::PARAM_INT);
        $stmt->bindParam(':state', $state, PDO::PARAM_STR);
        $stmt->bindParam(':imgUrl', $imgUrl, PDO::PARAM_STR);
        $stmt->bindParam(':imgAlt', $imgAlt, PDO::PARAM_STR);
        
        if($stmt->execute()) {
            $response["message"] = "Data uploaded successfully!";
            $response["code"] = "1";
        }
        else {
            $response["message"] = "Database error...";
            $response["code"] = "0";
        }

    } else {
        $response["message"] = "Not all data is provided!";
        $response["code"] = "0";
        
    }

    echo json_encode($response);  
?>