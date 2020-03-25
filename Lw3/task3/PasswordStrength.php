<?php
	function passwordStrength():?int
	{
	     $strNew = $_GET["password"];
		 $duplicateСharacters = $strNew;
		 $countDuplicateCharacters = 1;
		 $flagNumbers = 'False';
		 $flagCapitalLetters = 'False';
		 $flagLowerCase = 'False';
		 $countCapitalLetters = 0;
		 $countLowerCase = 0;
		 $countNumbers = 0;
		 $countAllSymbols = 0;
		 $i = 1;
		 while ($i < strlen($strNew))
		 {
            if (($strNew[$i] >= 'A') && ($strNew[$i] <= 'Z')) 
			{
			    $flagCapitalLetters = 'True';
				$countCapitalLetters++;
				$countAllSymbols++;
				$passwordStrength = $passwordStrength + 4 + (($countAllSymbols-$countCapitalLetters)*2);
			}
			if (($strNew[$i] >= 'a') && ($strNew[$i] <= 'z')) 
			{
			    $flagLowerCase = 'True';
				$countLowerCase++;
				$countAllSymbols++;
				$passwordStrength = $passwordStrength + 4 + (($countAllSymbols-$countLowerCase)*2);
			}
			if (($strNew[$i] >= '0') && ($strNew[$i] <= '9')) 
			{
                $flagNumbers = 'True';
				$countNumbers++;
				$countAllSymbols++;
				$passwordStrength = $passwordStrength + 8;
			}
			$j = 1;
			while ($j < strlen($duplicateСharacters))
			{
		        if (($strNew[$i] = $duplicateСharacters[$j]) && ($i != $j))  
			     {
			         $countDuplicateCharacters++;
				     $duplicateСharacters[$j] = ' '; 
			     }
                $j++;
			}	
			$i++;
            print $passwordStrength;
		 }
		 if (($flagNumbers = 'False') or (($flagLowerCase = 'False') && ($flagCapitalLetters = 'False')))
		 {
			$passwordStrength = $passwordStrength - $countAllSymbols;
		 }
		 if ($countDuplicateCharacters > 1)
		 {
	        $passwordStrength = $passwordStrength - $countDuplicateCharacters;
		 }	 
		 return $passwordStrength;
		 
	}
	echo passwordStrength();
?>