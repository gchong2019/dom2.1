<?php
    include "conn.php";
    if(isset($_GET['sid'])){
        $sid=$_GET['sid'];
        /* 解决跨域 */
        header('Access-Control-Allow-Origin:*');//任意的地址
        header('Access-Control-Allow-Method:POST,GET');//请求的方式
        $result=mysql_query("select * from date where picid=$sid ");
        echo json_encode(mysql_fetch_array($result,MYSQL_ASSOC));
    }
    
    
?>