<?php 
//include '../common.inc.php';

function saveDate() 
{
    $errors = [];
    //получить данные из формы
    //проверить правильность введенных данных
    //Если данные введены верно, сохранить данные файла и отобразить главную страничку с уведомлением об успешной отправке
    $answer = [];
    if ( empty($errors) )
    {
        $answer['success'] = true;  
    } 
    renderTemplate('main.tpl.php', $answer);
    //... а иначе отобразить главную страничку с уведомленем об ошибках.
}

function getForm()
{
    $fields = [
        'name' => getParametr('name'),
        'email' => getParametr('email')
    ];
}

function checkValid()
{
    
}