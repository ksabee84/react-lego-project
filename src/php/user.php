<?php
    require "statement.php";

    define('HOST', 'localhost');
    define('USER', 'root');
    define('PWD', '');
    define('DBNAME', 'lego');

    class User {
        private $statement;
        public $username;
        public $email;

        public function __construct() {
            $this->statement = new Statement(HOST, USER, PWD, DBNAME);
        }

        public function registrate($name, $username, $email, $address, $password1, $password2) {
            $msg = "";

            try {
                $this->userNameLengthCheck($username);
            }
            catch(Exception $e) {
                $msg .= $e->getMessage();
            }

            $msg .= ($this->statement->isUsernameUsed($username)) ? "<li>This username is used!</li>" : "";

            try {
                $this->emailLengthCheck($email);
            }
            catch(Exception $e) {
                $msg .= $e->getMessage();
            }

            $msg .= ($this->statement->isEmailUsed($email)) ? "<li>This e-mail address is used!</li>" : "";

            try {
                $this->passwordLengthCheck($password1);
                $this->passwordEqualityCheck($password1, $password2);
            }
            catch(Exception $e) {
                $msg .= $e->getMessage();
            }

            if($msg == "") {
                $msg .= (!$this->statement->recordNewUser($name, $username, $email, $address, hash('sha512', $password1)))
                ? "<li>Registration not successful! (inner error)</li>"
                : "";
            }

            $msg = ($msg == "")
            ? "<h5 class='text-success'>Registration successful!</h5> <a class='mb-3 d-block' href='login.php'>Login</a>"
            : "<ul>".$msg."</ul>";

            return $msg;
        }

        public function login($username, $password) {
            if($this->statement->loginDataCheck($username, hash('sha512', $password))) {
                session_start();
                $_SESSION['login'] = true;
                $_SESSION['userId'] = $this->statement->getUserId($username);
            } else {
                throw new Exception('<h4>Incorrect login data!</h4>');
            }
        }

        public function loginCheck() {
            session_start();
            $userData = $this->statement->getPublicUserData($_SESSION['userId']);
            if(!empty($userData)) {
                $this->username = $userData['username'];
                $this->email = $userData['email'];
                return true;
            } else {
                return false;
            }
        }

        public function logout() {
            session_start();
            unset($_SESSION['login']);
            unset($_SESSION['userId']);
        }

        private function userNameLengthCheck($username) {
            if(strlen($username) < 6) {
                throw new Exception('<li>Username is short! (at least 6 character)</li>');
            } else if(strlen($username) > 20) {
                throw new Exception('<li>Username is too long! (maximum 20 character)</li>');
            }
        }

        private function emailLengthCheck($email) {
            if(strlen($email) < 6) {
                throw new Exception('<li>E-mail address is short! (at least 6 character)</li>');
            } else if(strlen($email) > 50) {
                throw new Exception('<li>E-mail address is too long! (maximum 50 character)</li>');
            }
        }

        private function passwordLengthCheck($password) {
            if(strlen($password) < 6) {
                throw new Exception('<li>Password is short! (at least 6 character)</li>');
            }
        }

        private function passwordEqualityCheck($password1, $password2) {
            if($password1 != $password2) {
                throw new Exception('<li>Passwords are not the same!</li>');
            }
        }
    }
?>