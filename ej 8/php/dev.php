<?php
echo('<h1>esta calculadora es traida a ustedes por: </h1>');
$developer='mariano arias';
if (isset($_GET['developer'])) {
    $developer = $_GET['developer'];
}
echo($developer);