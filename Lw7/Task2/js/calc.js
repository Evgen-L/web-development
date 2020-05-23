function calc(str){
  if (typeof str == "string")
  {
    if (validator(str))
    {
      console.log("Example entered correctly");
      str = str.replace("(",""); //удаляю скобки
      str = str.replace(")","");
      str = str.replace(/\s+/g, ' ').trim();//удаляю пробелы
      console.log(str);
      if (checkRatioOperatorsAndNumbers(str))
      {
        console.log("Ration is correct");
        if (isLengthMoreThan3(str))
        {
          console.log("Enough data");
          if(chekMultiplicationAndDivision(str))
          {
            console.log("Multiplication and division is ok");
            if(checkQuantityNumbersAndOperators(str))
            {
              console.log("Quantity is ok");
              calculation(str)
            }
          }
        }
      }
    }
  } else {
    console.log("invalid data type entered");
  }
}

function isEmpty(str)//проверяет на пустоту строку
{
  if (str.trim() == '')
    return true;
  return false;
}


function validator(str)//проверяет, правильно ли введены символы
{
  let validValues = "1234567890+-*/() ";
  if (isEmpty(str))
  {
    console.log('ban? Empty string entered');
    return false;
  }
  for (let position = 0; position <= (str.length - 1); position++)
  {
    if (validValues.indexOf(str[position]) == -1)
    {
      console.log('ban: example entered incorrectly');
      return false;
    }
  }
  return true;
}

function checkRatioOperatorsAndNumbers(str)//проверяем, что операторы и цифры стоят как положено
{
  let flagNumber = false;
  let operators = "/+*-";
  let cloneStr = str;
  while((isEmpty(cloneStr)) == false)
  {
    if ((isNaN(parseFloat(cloneStr))) == false)//если символ число, например 4, +3 или -5(но не - 6)
    {
      flagNumber = true;
      if ( isNaN(parseFloat(cloneStr[0])) )//если есть знак перед числом
      {
        cloneStr = cloneStr.slice(2) //удалить слева два символа из строки
      } else{
        cloneStr = cloneStr.slice(1)
      }
    } else if ( (flagNumber) && (operators.indexOf(cloneStr[0]) != -1) ) //если после числа зафиксирован оператор, то бан
      {
        console.log('ban: first operators and then numbers');
        return false
      } else cloneStr = cloneStr.slice(1)
  }
  return true
}

function isLengthMoreThan3(str)
{
  if (str.length < 3)
  {
    console.log('ban: not enough data'); //недостаточно слагаемых
    return false
  }
  return true
}

function chekMultiplicationAndDivision(str)
{
  for (let position = 0; position <= (str.length - 1); position++)
  {
    if (((str[position] == '/') || (str[position] == '*')) && ((isNaN(parseFloat(str[position + 1]))) == false))
    {
      console.log('ban: numbers do not have division or multiplication signs' );
      return false
    }
  }
  return true;
}

function checkQuantityNumbersAndOperators(str)//определяем что количество операторов соответсвует количесву аргументов
{
  let countNumbers = 0;
  let countOperators = 0;
  let operators = "/+*-";
  let symbols = "+- ";
  let numbers = "1234567890"
  for (let position = 0; position <= (str.length - 2); position++)
  {
    if ((symbols.indexOf(str[position]) != -1) && (isNaN(parseFloat(str[position + 1])) == false))
    {
      countNumbers++;
    } else
    {
      if ((operators.indexOf(str[position]) != -1) && (numbers.indexOf(str[position + 1]) == -1))
      {
        countOperators++;
      }
    }
  }
  console.log(countNumbers, countOperators);
  if ((countNumbers) != (countOperators + 1))
  {
    console.log('ban: please recount the quantity of operators and numbers');
    return false
  }
  return true
}

function calculation(str)//вычисления
{
  let posOperator = 0;
  let posArgument = 0;
  searchPositions(posOperator, posArgument, str);
  let result = parseFloat(str[posArgument]);
  let argument1 = 0;
  let argument2 = 0;
  while (posOperator >= 0)
  {
     argument1 = result;
     declaringSecondArgument(argument2, posArgument, str);
     if ((str[posOperator] == ' ') && (argument2 == 0))
     {
       console.log('ban: cannot be divided by zero');
       return false
     }
     result = eval(`${argument1} ${str[posOperator]} ${argument2} `);
     transitionPosOperator(str, posOperator)
  }
  console.log('result');
  return result
}

function searchPositions(posOperator, posArgument, str)//функция находит позиции первых оператора и аргумента
{
  while ( (isInteger(str[posArgument]) == false ) && ( (str[posArgument] != '+') || (isInteger(str[posArgument + 1]) == false) ) && ( (str[posArgument] != '-') || (isInteger(str[posArgument + 1]) == false) ) )//двигай позицию пока не найдем чило или число со знаком
  {
    posArgument++
  }
  if (str[posArgument - 1] == ' ')
  {
    posOperator = posArgument - 2
  } else {posOperator--}
}

function declaringSecondArgument(argument2, posArgument, str)//определяет второй аргумент
{
  if (isInteger(str[posArgument]))
  {
    while (isInteger(str[posArgument]))
    {
      posArgument++
    }
    argument2 = (parseFloat(str[posArgument]))
  } else
  {
    posArgument++;
    while (isInteger(str[posArgument]))
    {
      posArgument++
    }
    argument2 = (parseFloat(str[posArgument]))
  }
}

function transitionPosOperator(str, posOperator)//переход позиции оператора
{
  if (posOperator != 0)
  {
    if (str[posOperator - 1] == ' ')
    {
      posOperator = posOperator - 2
    }else
    {
      posOperator--
    }
  }
}
