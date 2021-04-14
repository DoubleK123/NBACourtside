<?php
$username =$_POST["username"];
$password =$_POST["password"];

if(!empty($username)){
    if(!empty($password)) {
        $host = "localhost";
        $dbusername = "root";
        $dbpassword = "";
        $dbname = "nbacourtside";

        $conn = new mysqli($host,$dbusername,$dbpassword,$dbname);

        if(mysqli_connect_error()){
            die('Connection Error ('.mysqli_connect_errorno().')'
            .mysqli_connect_error());
        }
        else{
            $securePassword = sha1($password);
            $sql = "INSERT INTO registration values  ('$username', '$securePassword')";
            if($conn ->query($sql)){
                // echo "New Record is inserted successfully";
                header("Location: ../mainPage.html");
                exit();

            }
            else {
                echo "Error: " .$sql . "<br>" . $conn ->error;
            }
            $conn->close();


        }

           
        

    }
    else {
        echo "Password should not be empty";
        die();
    }
}
else {
    echo "Username should not be emtpy";
    die();
}