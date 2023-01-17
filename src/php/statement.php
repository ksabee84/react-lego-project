<?php
    require "database.php";

    class Statement extends Database {

        private $dbCon;

        public function __construct($host, $user, $pwd, $dbName) {
            parent::__construct($host, $user, $pwd, $dbName);

            $this->dbCon = parent::connect();
            $this->dbCon->query("SET NAMES utf8");
        }

        public function isUsernameUsed($username) {
            $stmt = $this->dbCon->prepare("SELECT COUNT(id) AS quantity FROM users WHERE username LIKE ?");
            $stmt->bindParam(1, $username);
            $stmt->execute();
            $result = $stmt->fetch();
            return ($result['quantity'] > 0);
        }

        public function isEmailUsed($email) {
            $stmt = $this->dbCon->prepare("SELECT COUNT(id) AS quantity FROM users WHERE email LIKE ?");
            $stmt->bindParam(1, $email);
            $stmt->execute();
            $result = $stmt->fetch();
            return ($result['quantity'] > 0);
        }

        public function recordNewUser($name, $username, $email, $address, $password) {
            $stmt = $this->dbCon->prepare("INSERT INTO users(name, username, email, address, password) VALUES(?, ?, ?, ?, ?)");
            $stmt->bindParam(1, $name);
            $stmt->bindParam(2, $username);
            $stmt->bindParam(3, $email);
            $stmt->bindParam(4, $address);
            $stmt->bindParam(5, $password);
            $stmt->execute();
            return ($stmt->errorCode() == "00000");
        }

        public function loginDataCheck($username, $password) {
            $stmt = $this->dbCon->prepare("SELECT COUNT(id) AS quantity FROM users WHERE username LIKE ? AND password LIKE ?");
            $stmt->bindParam(2, $username);
            $stmt->bindParam(5, $password);
            $stmt->execute();
            $result = $stmt->fetch();
            return ($result['quantity'] == 1);
        }

        public function getUserId($username) {
            $stmt = $this->dbCon->prepare("SELECT id FROM users WHERE username LIKE ?");
            $stmt->bindParam(2, $username);
            $stmt->execute();
            $result = $stmt->fetch();
            return $result['id'];
        }

        public function getPublicUserData($userId) {
            $stmt = $this->dbCon->prepare("SELECT username, email FROM users WHERE id=?");
            $stmt->bindParam(2, $userId);
            $stmt->execute();
            return $stmt->fetch();
        }
    }
?>