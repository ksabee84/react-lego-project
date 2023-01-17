<?php
    header("Access-Control-Allow-Origin: *");
    $host = "localhost";
    $user = "root";
    $password = "";
    $dbname = "lego";

    class Legoitem {
        public $id;
        public $name;
        public $category;
        public $theme;
        public $serial;
        public $year;
        public $pieces;
        public $price;
        public $state;
        public $imgUrl;
        public $imgAlt;

        function __construct($id, $name, $category, $theme, $serial, $year, $pieces, $price, $state, $imgUrl, $imgAlt) {
            $this->id = $id;
            $this->name = $name;
            $this->category = $category;
            $this->theme = $theme;
            $this->serial = $serial;
            $this->year = $year;
            $this->pieces = $pieces;
            $this->price = $price;
            $this->state = $state;
            $this->imgUrl = $imgUrl;
            $this->imgAlt = $imgAlt;
        }
    }
    
    if(isset($_GET["id"])) {
        $id = $_GET["id"];

        try {
            $con = new PDO("mysql:host=localhost;dbname=lego", "root", "");
            $stmt = $con->prepare("SELECT * FROM legoitems WHERE id = :id");
            $stmt->bindParam(':id',$id, PDO::PARAM_STR);
            $result = $stmt->execute();
            $stmt->setFetchMode(PDO::FETCH_ASSOC);

            $response = array();

            $i = 0;

            while($row = $stmt->fetch()) {
                $legoitem = new Legoitem($row["id"], $row["name"], $row["category"], $row["theme"], $row["serial"], $row["year"], $row["pieces"] ,$row["price"], $row["state"], $row["imgUrl"], $row["imgAlt"]);
                $response[$i++] = $legoitem;
            }

            echo json_encode($response);
        }
        catch(PDOException $e) {
            echo "Connection failed: ". $e->getMessage();
        }
    }
    else {
        $response["error"] = "No id given!";
        echo json_encode($response);
    }
    
?>