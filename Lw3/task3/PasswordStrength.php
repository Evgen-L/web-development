<?php
    function passwordSafety()
    {
        $strNew = $_GET["password"];
        $duplicateСharacters = $strNew;
        $countDuplicateCharacters = 1;
        $countCapitalLetters = 0;
        $countLowerCase = 0;
        $countNumbers = 0;
        $passwordSafety = 0;
        $i = 0;
        while ($i <= strlen($strNew))
        {
            if (($strNew[$i] >= 'A') and ($strNew[$i] <= 'Z')) 
            {
                $passwordSafety = $passwordSafety + 4;
                $countCapitalLetters++;
            }
            if (($strNew[$i] >= 'a') and ($strNew[$i] <= 'z')) 
            {
                $passwordSafety = $passwordSafety + 4;
                $countLowerCase++;
            }
            if (($strNew[$i] >= '0') and ($strNew[$i] <= '9')) 
            {
                $countNumbers++;
                $countAllSymbols++;
                $passwordSafety = $passwordSafety + 8;
            }
            $j = 0;
            while ($j <= strlen($duplicateСharacters))
            {
                if (($strNew[$i] === $duplicateСharacters[$j]) and ($i != $j))  
                {
                    $countDuplicateCharacters++;
                    $duplicateСharacters[$j] = ' '; 
                }
                $j++;
            }
            $i++;
        }
        if (($countNumbers === 0) or (($countLowerCase === 0) and ($countCapitalLetters === 0)))
        {
            $passwordSafety = $passwordSafety - strlen($strNew);
        } 
        if ($countDuplicateCharacters > 1)
        {
            $passwordSafety = $passwordSafety - $countDuplicateCharacters + 1;
        }
        if ($countCapitalLetters > 0)
        {
            $passwordSafety = $passwordSafety + ((strlen($strNew) - $countCapitalLetters) * 2);
        }
        if ($countLowerCase > 0)
        {
            $passwordSafety = $passwordSafety + ((strlen($strNew) - $countLowerCase) * 2);
        }
        return $passwordSafety;
    }
    echo passwordSafety();
?>