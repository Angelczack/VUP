<?php
$conn = mysqli_connect("localhost:3310","root",'112655');
if(!$conn)
{
    die("连接数据库失败，请重新尝试:" . mysqli_connect_errno());
}
mysqli_select_db($conn,'VUP');
mysqli_set_charset($conn,'utf8');