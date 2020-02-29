<?php
	function passwordStrength(string $password):?string
	{
	     $strNew = $_GET["password"];
		 $duplicateСharacters = $strNew;
		 $countDuplicateCharacters = 1;
		 $checkInd = 'Yes';
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
			if ($strNew[$i] >= 'A') and ($strNew[$i] <= 'Z')) 
			{
			    $flagCapitalLetters = 'True';
				$countCapitalLetters++;
				$countAllSymbols++;
				$passwordStrength = $passwordStrength + 4 + (($countAllSymbols-$countCapitalLetters)*2);
			}
			if ($strNew[$i] >= 'a') and ($strNew[$i] <= 'z')) 
			{
			    $flagLowerCase = 'True';
				$countLowerCase++;
				$countAllSymbols++;
				$passwordStrength = $passwordStrength + 4 + (($countAllSymbols-$countLowerCase)*2);
			}
			if ($strNew[$i] >= '0') and ($strNew[$i] <= '9')) 
			{
			    $flagNumbers = 'True';
				$countNumbers++;
				$countAllSymbols++;
				$passwordStrength = $passwordStrength + 8;
			}
			$j = 1;
			while ($j < strlen($duplicateСharacters))
			{
		     if (($strNew[$i] = $duplicateСharacters[$j]) and (i != j))  
			 {
			    $countDuplicateCharacters++;
				$duplicateСharacters[$j] = ' ';
			 }
			}	
			$i++;
		 }
		 if ($flagNumbers = 'False') or (($flagLowerCase = 'False') and ($flagCapitalLetters = 'False'))
		 {
			$passwordStrength = $passwordStrength - $countAllSymbols;
		 }
		 if ($countDuplicateCharacters > 1)
		 {
	        $passwordStrength = $passwordStrength - $countDuplicateCharacters;
		 }	 
		 return $passwordStrength;
		 
	}
	echo passwordStrength('');