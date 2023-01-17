<?php
    header("Access-Control-Allow-Origin: *");

    require "database.php";

    $dbo = new PDO("mysql:host=localhost;dbname=lego", "root", "");

    $response = array();

    if($_SERVER['REQUEST_METHOD'] === 'POST' && empty($_POST)) {
        $_POST = json_decode(file_get_contents('php://input'), true);
        }
        
        if(isset($_POST["id"])) {
        $id = $_POST["id"];

        try {
            $stmt = $dbo->prepare("DELETE FROM legoitems WHERE id = :id");
            $stmt->bindParam(':id', $id, PDO::PARAM_INT);
            $stmt->execute();

            $response["ok"] = "Item deleted!";
        }
        catch(PDOException $e) {
            echo "Connection failed: ". $e->getMessage();
        }
    }
    else {
        $response["error"] = "No id given!";
    }

    echo json_encode($response);

?>