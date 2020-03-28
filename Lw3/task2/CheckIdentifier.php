<?php
	function checkIdentifier()
	{
	     $strNew = $_GET["identifier"];
		 $checkInd = 'Yes';
		 $i = 1;
		 if (($strNew[0] >= '0') AND ($strNew[0] <= '9'))
		 {
			echo(($strNew[0]). "Первый символ должен быть буквой</br>");
			$checkInd = 'No';
		 }	
		 while ($i < strlen($strNew))
		 {
			if ((($strNew[$i] < 'A') or ($strNew[$i] > 'Z')) and (($strNew[$i] < 'a') or ($strNew[$i] > 'z')) and (($strNew[$i] < '0') or ($strNew[$i] > '9')))
			{
			    $chekInd = 'No';
				echo ($strNew[$i]. "Этот символ недопустим </br>");
			}
			$i++;
		 }
		 if ($checkInd === 'No')
		 {
			$strNew = $strNew. "can be identifier";
		 }else
		  {
		       echo "</br>";
			   $strNew = $strNew. " is identifier";
		  }
		 return $strNew;
	}
	echo checkIdentifier();