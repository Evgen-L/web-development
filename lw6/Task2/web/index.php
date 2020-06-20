<?php
include '../src/common.inc.php';
if (getRequestMethod() === 'POST')
{
    saveDate();   
}
else 
{
    mainPage();
}