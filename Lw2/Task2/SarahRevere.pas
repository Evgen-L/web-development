PROGRAM SarahRevere(INPUT, OUTPUT);
USES
  Dos;
VAR
  Lantern: STRING;
BEGIN{SarahRevere}
  WRITELN('Content-Type: text/plain');
  WRITELN;
  Lantern := GetEnv('QUERY_STRING');
  IF Lantern = 'lanterns=1'
  THEN
    WRITELN('THE BRITISH ARE COMING BY SEA')
  ELSE
    BEGIN
      IF Lantern = 'lanterns=2'
      THEN
        WRITELN('THE BRITISH ARE COMING BY LAND')
      ELSE
        WRITELN('SARAH DIDNT SAY')
    END
END.{SarahRevere}
