<?php
if (isset($_POST['number_a']) && isset($_POST['number_b']) && isset($_POST['op'])) {
    if (!empty($_POST['number_a']) && !empty($_POST['number_b']) && !empty($_POST['op'])) {
        $numero_a = $_POST['number_a'];
        $numero_b = $_POST['number_b'];
        $operacion = $_POST['op'];
        switch ($operacion) {
            case 'mas':
                echo ($numero_a + $numero_b);
                break;
            case 'menos':
                echo ($numero_a - $numero_b);
                break;
            case 'multiplicar':
                echo ($numero_a * $numero_b);
                break;

            default:
                echo ($numero_a / $numero_b);
                break;
        }
    } else {
        echo ('por favor, completa todos los campos e intenta nuevamente');
    }
} else {
    echo ('falta definir variables necesarias para la operacion');
}
