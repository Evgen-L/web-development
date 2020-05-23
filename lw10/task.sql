CREATE DATABASE university;
USE university;
CREATE TABLE faculty
(
    id               INT AUTO_INCREMENT NOT NULL,
    name             VARCHAR(255)       NOT NULL,
    PRIMARY KEY (id)
) DEFAULT CHARACTER SET utf8mb4
  COLLATE 'utf8mb4_unicode_ci'
  ENGINE = InnoDB
;
 
 CREATE TABLE classes 
(
    id               INT AUTO_INCREMENT NOT NULL,
    name             VARCHAR(255)       NOT NULL,
    faculty_id       INT                NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (faculty_id) REFERENCES faculty (id)
) DEFAULT CHARACTER SET utf8mb4
  COLLATE 'utf8mb4_unicode_ci'
  ENGINE = InnoDB
;

CREATE TABLE students 
(
    id               INT AUTO_INCREMENT NOT NULL,
    name             VARCHAR(255)       NOT NULL,
    surname          VARCHAR(255)       NOT NULL,
    patronymic       VARCHAR(255)       NOT NULL,
    age              INT                NOT NULL,
    class_id       INT                NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (class_id) REFERENCES classes (id)
) DEFAULT CHARACTER SET utf8mb4
  COLLATE 'utf8mb4_unicode_ci'
  ENGINE = InnoDB
;

insert into faculty (name) VALUES
    ('ФИиВТ'),
    ('ФСТ'),
    ('РТФ');   

insert into classes (name, faculty_id) VALUES
    ('ПС-11', '1'),
    ('ИВТ-12', '1'),
    ('БиС-21', '1'),
    ('Конфликтология-31', '2'),
    ('Сервис-42', '2'),
    ('Туризм-13', '2'),
    ('Радиотехника-23', '3'),
    ('ЭиН-21', '3'),
    ('РСК-43', '3');

insert into students (name, surname, patronymic, age, class_id) VALUES
    ('Денис', 'Актуганов', 'Алексеевич', '18', '1'),
    ('Даниил', 'Алафузов', 'Сергеевич', '21', '1'),
    ('Яков', 'Алгаев', 'Вадимович', '18', '3'),
    ('Эрнест', 'Александров', 'Эдуардович', '19', '1'),
    ('Андрей', 'Арсибеков', 'Артурович', '19', '2'),
    ('Руслан', 'Васильев', 'Геннадьевич', '18', '2'),
    ('Родион', 'Вязов', 'Валерьевич', '18', '3'),
    ('Рустам', 'Гайнутдинов', 'Маратович', '18', '2'),
    ('Даниил', 'Герасимов', 'Алексеевич', '19', '2'),
    ('Михаил', 'Глушков', 'Олегович', '18', '3'),
    ('Роман', 'Казанцев', 'Сергеевич', '18', '3'),
    ('Мария', 'Милкова', 'Андреевна', '18', '3'),
    ('Андрей', 'Мошкин', 'Юрьевич', '20', '2'),
    ('Эльдар', 'Мухаметханов', 'Тимурович', '18', '1'),
    ('Николай', 'Никольский', 'Александрович', '18', '1'),
    ('Дарья', 'Окунева', 'Геннадьевна', '19', '4'),
    ('Ирина', 'Попова', 'Вадимовна', '18', '4'),
    ('Елена', 'Садовина', 'Аркидьевна', '18', '4'),
    ('Анатолий', 'Садовин', 'Петрович', '19', '4'),
    ('Оксана', 'Садовина', 'Владимирована', '22', '5'),
    ('Николай', 'Старков', 'Палыч', '18', '6'),
    ('Елена', 'Тарасенко', 'Петровна', '18', '4'),
    ('Юлия', 'Тимошенко', 'Анатольевна', '18', '5'),
    ('Эдуард', 'Тинькоф', 'Эдуардович', '18', '5'),
    ('Павел', 'Титкин', 'Сергеевич', '19', '6'),
    ('Пётр', 'Тихий', 'Николаевич', '21', '6'),
    ('Сергей', 'Тихонов', 'Вадимович', '23', '5'),
    ('Наталья', 'Тишакова', 'Андреевна', '18', '5'),
    ('Генадий', 'Токарев', 'Иванович', '17', '6'),
    ('Вадим', 'Томин', 'Вадимович', '18', '7'),
    ('Иван', 'Тренин', 'Сергеевич', '18', '6'),
    ('Николай', 'Угаров', 'Степанович', '18', '7'),
    ('Пётр', 'Угримов', 'Геннадьевич', '18', '8'),
    ('Андрей', 'Уймин', 'Юрьевич', '19', '8'),
    ('Сергей', 'Уколов', 'Вадимович', '21', '9'),
    ('Ольга', 'Фадеева',  'Петровна', '18', '7'),
    ('Эрнест', 'Файбус', 'Эрнестович', '17', '7'),
    ('Генадий', 'Фатин',  'Яковлевич', '18', '9'),
    ('Иван', 'Хмелев', 'Анатольевич', '18', '7'),
    ('Петр', 'Ховрин', 'Иванович', '18', '8'),
    ('Надежда', 'Хортова',  'Семёновна', '18', '9'),
    ('Рустам', 'Хотеев', 'Николаевич', '18', '8'),
    ('Елена', 'Яблокова', 'Павловна', '21', '8'),
    ('Семён', 'Явдохин', 'Олегович', '18', '9'),
    ('Владимир', 'Яковлев', 'Михайлович',   '18', '9');
    

   
SELECT
    name,
    surname,
    patronymic,
    age
FROM
    students
WHERE
    age = 19;
    
    
    
/*SELECT
    students.name,
    students.surname,
    students.patronymic,
    classes.name AS classes
FROM
    students 
    JOIN classes ON students.class_id = classes.id
WHERE
    class_id = '1';
*/


/*SELECT
  students.name,
  students.surname,
  students.patronymic,
  faculty.name AS 'faculty'
FROM
  students
  JOIN classes ON students.class_id = classes.id
  JOIN faculty ON classes.faculty_id = faculty.id  
WHERE
  faculty_id = '1';*/
      
/*SELECT
  students.name,
  students.surname,
  students.patronymic,
  class_id AS classes,
  faculty_id AS 'faculty'
FROM
  students
  JOIN classes ON students.class_id = classes.id
  JOIN faculty ON classes.faculty_id = faculty.id
WHERE
  students.name = 'Эрнест'
  AND
  students.surname = 'Александров';*/