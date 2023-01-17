<?php

    require "user.php";

    $user = new User();

    $msg = "";

    if(isset($_POST['login'])) {
        try {
            $user->login($_POST['username'], $_POST['password']);
            header('Location: /index.html');
        }
        catch(Exception $e) {
            $msg = $e->getMessage();
        }
    }
?>

<!DOCTYPE html>
<html lang="eng">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
    integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <title>Login</title>
</head>
<body class="bg-secondary">
    <div class="container">
        <div class="row">
            <div class="col-10 col-sm-9 col-md-8 col-lg-7 col-xl-6 mx-auto mt-3 rounded shadow bg-light p-3 text-center">
                <h3 class="mt-0 mb-3">Login</h3>
                <?=$msg?>
                <form action="" method="post" class="form-group col-11 col-sm-9 col-md-8 col-lg-7 mx-auto">
                    <label>Username:</label>
                    <input class="form-control mb-3" type="text" name="username" required>
                    <label>Password:</label>
                    <input class="form-control mb-3" type="password" name="password" required>
                    <button type="submit" class="btn btn-dark" name="login">Login</button>
                </form>
                <a href="register.php" class="text-dark">I haven't registered yet</a>
            </div>
        </div>
    </div>
</body>
</html>