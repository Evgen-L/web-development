<?php
function getParametr($name)
{
    return $_POST[$name] ?? null;
}

function getRequestMethod()
{
    return $_SERVER['REQUEST_METHOD'];
}//ОПРЕДЕЛЯЕМ КАКОЙ МЕТОД У ЗАПРОСА, КОТОРЫЙ ОТПРАВИЛ ПОЛЬЗОВААТЕЛЬ 