<?php
//Здесь можно изменить адрес почты, на которую прийдёт письмо.
define("EMAIL", "machulskiy99@yandex.ru"); 

//Здесь нужно сменить адрес сайта на свой
define("DOMAIN", "avenir-mebel.ru");

$timeout = 0.05;
//error_reporting(0);
session_start();
$time_picked = $_SESSION['last_picked']+$timeout*60;
$time = time();
if($time_picked  > $time){
	die("<b style='color:red'>Подождите ".date('i:s',$time_picked-time())." мин. </b>");
}

if(!isset($_POST['name']) or !isset($_POST['phone']) or empty($_POST['phone']) or empty($_POST['name'])){
	$_SESSION['last_picked'] = time();
	die("<b style='color:red'>Заполните обязательные поля!</b>");
	
}


$form = "Новый клиент Avenir-Mebel";

$desc = $_POST['text'] ?? "Отсутсвует";

$name = trim($_POST['name']);
$phone = trim($_POST['phone']);
$desc = trim($desc);

	
	

$msg = $form."; \r\nИмя: ".$name.";\r\nТелефон: ".$phone.";".$add."\r\nПримечание: ".$desc.";";
		
$from = "webmaster@".DOMAIN;
$headers  = "MIME-Version: 1.0";
$headers .= "Content-type: text/html; charset=windows-1251" . "\r\n";
$headers .= "From: $from";
$path = dirname(_FILE_).'/clients.txt';

$fc = file_get_contents($path);

$fd = fopen($path, 'w') or die("не удалось создать файл");
	fwrite($fd, $fc."\r\n-------------\r\n".$msg);
	fclose($fd);

mail(EMAIL, $form,
str_replace('\r\n',"\r\n", $msg), $headers); 
$_SESSION['last_picked'] = time()+$timeout*100*60;
echo "<b style='color:green'>Заявка принята</b>";
		




?>