<?php
    require "user.php";
    header("Access-Control-Allow-Origin: *");

    $user = new User();

    $msg = "";

    if(isset($_POST['reg'])) {
        $msg = $user->registrate($_POST['name'], $_POST['username'], $_POST['email'], $_POST['address'], $_POST['pwd1'], $_POST['pwd2']);
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
    <title>Registration</title>
</head>
<body class="bg-secondary">
    <div class="container">
        <div class="row">
            <div class="col-10 col-sm-9 col-md-8 col-lg-7 col-xl-6 mx-auto mt-3 rounded shadow bg-light p-3 text-center">
                <h3 class="mt-0 mb-3">Registration</h3>
                <?=$msg?>
                <form action="" method="post" class="form-group col-11 col-sm-9 col-md-8 col-lg-7 mx-auto">
                    <label>Name:</label>
                    <input class="form-control mb-3" type="text" name="name" required>
                    <label>Username:</label>
                    <input class="form-control mb-3" type="text" name="username" required>
                    <label>E-mail address</label>
                    <input class="form-control mb-3" type="email" name="email" required>
                    <label>Postal address</label>
                    <input class="form-control mb-3" type="text" name="address" required>
                    <label>Password</label>
                    <input class="form-control mb-3" type="password" name="pwd1" required>
                    <label>Password again</label>
                    <input class="form-control mb-3" type="password" name="pwd2" required>
                    <button type="reset" class="btn btn-secondary">Undo</button>
                    <button type="submit" class="btn btn-dark" name="reg">Registration</button>
                </form>
                <a href="/react-lego-project/src/php/login.php" class="text-dark">I've already registered</a>
            </div>
        </div>
    </div>
</body>
</html>
