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
            $securepassword = sha1($password);
            $sql = "SELECT * FROM registration WHERE username='$username'";
            $result = $conn ->query($sql);
            if($result->num_rows==0){
                echo "username does not exist";
           

            }
            else {
               $row = $result->fetch_assoc();
               $usernameCheck =$row["username"];
               $passwordCheck = $row["password"];
               if( $passwordCheck==$securepassword){
                   echo "Login is complete";
                   header("Location: ../mainPage.html");
                   exit();
               } else {
                   echo "password does not exist";
                  
               
               }
            }
            $conn->close();


        }
    }
}
