﻿PROGRAM GetQueryString(INPUT, OUTPUT);
USES
  DOS;
FUNCTION GetQueryStringParameter(Key: STRING): STRING;
VAR
  Str: STRING;
BEGIN{GetQueryStringParameter}
  Str := GetEnv('QUERY_STRING');
  IF (Str[POS(Key, Str)-1] = '&') OR (POS(Key, Str) = 1)
  THEN
    BEGIN
      DELETE(Str, 1, POS(Key, Str)-1);
      IF COPY(Str, 1, POS('=', Str)-1) = Key
      THEN
        BEGIN
          DELETE(Str, 1, POS('=', Str));
          IF (POS('&', Str) <> 0)
          THEN
            GetQueryStringParameter := COPY(Str, 1, POS('&', Str)-1)
          ELSE
            GetQueryStringParameter := COPY(Str, 1, LENGTH(Str))
        END
      ELSE
        GetQueryStringParameter := ''     
    END    
  ELSE
    GetQueryStringParameter := ''     
END;{GetQueryStringParameter}
BEGIN{WorkWithQueryString}
  WRITELN('Content-Type: text/plain');
  WRITELN;
  WRITELN('First Name: ', GetQueryStringParameter('first_name'));
  WRITELN('Last Name: ', GetQueryStringParameter('last_name'));
  WRITELN('Age: ', GetQueryStringParameter('age'))
END.{WorkWithQueryString}